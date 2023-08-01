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
  setCreateExpenseAction,
  TOpenDialog,
} from "../../../../../rtk/features/expenseManagerSlice";
import { useAppDispatch, useAppSelector } from "../../../../../rtk/hooks/hooks";
import { createExpenseAsync } from "../../../../../rtk/thunks/expense.thunks";
import {
  createErrorPayload,
  createHelperTextObject,
  isDisabled,
} from "../../../../../utils/utils";
import CreateExpense from "./createExpense.component";

const CreateExpenseContainer = () => {
  const { openDialog, createExpense } = useAppSelector(
    (state) => state.expenseManager
  );
  const { required } = useAppSelector(
    (state) => state.errorHandler.createExpense
  );
  const dispatch = useAppDispatch();
  const open = useMemo(
    () => openDialog === "createExpense",
    [openDialog]
  );
  const disableSaveButton = useMemo(() => isDisabled(required), [required]);

  useEffect(() => {
    dispatch(clearExpenseManagerAction());
  }, [dispatch]);

  useMemo(() => {
    const payload = createErrorPayload(
      createExpense,
      "required",
      "createExpense"
    );
    dispatch(setErrorAction(payload));
  }, [createExpense, dispatch]);

  const helperText = useCallback(() => {
    return createHelperTextObject(required);
  }, [required]);

  const onChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    const { name, value } = event.target;
    const payload: ISetCreateExpenseType = { name, value };
    dispatch(setCreateExpenseAction(payload));
  };

  const save = () => {
    dispatch(createExpenseAsync(createExpense));
    close()
  };

  const close = () => {
    const type: TOpenDialog = "createExpense";
    batch(() => {
      dispatch(closeDialogAction({ type }));
      dispatch(clearErrorAction());
    });
  };

  return (
    <CreateExpense
      helperText={helperText}
      onChange={onChange}
      save={save}
      close={close}
      open={open}
      disableSaveButton={disableSaveButton}
    />
  );
};

export default CreateExpenseContainer;
