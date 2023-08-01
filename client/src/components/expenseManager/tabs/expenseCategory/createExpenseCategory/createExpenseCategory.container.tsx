import { useCallback, useEffect, useMemo } from "react";
import { batch } from "react-redux";
import {
  clearErrorAction,
  setErrorAction,
} from "../../../../../rtk/features/errorSlice";
import {
  clearExpenseManagerAction,
  closeDialogAction,
  ISetCreateExpenseType,
  setCreateExpenseCategoryAction,
  TOpenDialog,
} from "../../../../../rtk/features/expenseManagerSlice";
import { useAppDispatch, useAppSelector } from "../../../../../rtk/hooks/hooks";
import { createExpenseCategoryAsync } from "../../../../../rtk/thunks/expenseCategory.thunks";
import {
  createErrorPayload,
  createHelperTextObject,
  isDisabled,
} from "../../../../../utils/utils";
import CreateExpenseCategory from "./createExpenseCategory.component";

const CreateExpenseCategoryContainer = () => {
  const { openDialog, createExpenseCategory } = useAppSelector(
    (state) => state.expenseManager
  );
  const { required } = useAppSelector(
    (state) => state.errorHandler.createExpenseCategory
  );
  const dispatch = useAppDispatch();
  const open = useMemo(
    () => openDialog === "createExpenseCategory",
    [openDialog]
  );
  const disableSaveButton = useMemo(() => isDisabled(required), [required]);

  useEffect(() => {
    dispatch(clearExpenseManagerAction());
  }, [dispatch]);

  useMemo(() => {
    const payload = createErrorPayload(
      createExpenseCategory,
      "required",
      "createExpenseCategory"
    );
    dispatch(setErrorAction(payload));
  }, [createExpenseCategory, dispatch]);

  const helperText = useCallback(() => {
    return createHelperTextObject(required);
  }, [required]);

  const onChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    const { name, value } = event.target;
    const payload: ISetCreateExpenseType = { name, value };
    dispatch(setCreateExpenseCategoryAction(payload));
  };

  const save = () => {
    dispatch(createExpenseCategoryAsync(createExpenseCategory));
    close()
  };

  const close = () => {
    const type: TOpenDialog = "createExpenseCategory";
    batch(() => {
      dispatch(closeDialogAction({ type }));
      dispatch(clearErrorAction());
    });
  };

  return (
    <CreateExpenseCategory
      helperText={helperText}
      onChange={onChange}
      save={save}
      close={close}
      open={open}
      disableSaveButton={disableSaveButton}
    />
  );
};

export default CreateExpenseCategoryContainer;
