import { useCallback, useEffect, useMemo } from "react";
import { batch } from "react-redux";
import { clearErrorAction, setErrorAction } from "../../../../../rtk/features/errorSlice";
import {
  clearExpenseManagerAction,
  closeDialogAction,
  ISetCreateExpenseType,
  setCreateExpenseTypeAction,
  TOpenDialog,
} from "../../../../../rtk/features/expenseManagerSlice";
import { useAppDispatch, useAppSelector } from "../../../../../rtk/hooks/hooks";
import { createExpenseTypeAsync } from "../../../../../rtk/thunks/expenseType.thunks";
import {
  createErrorPayload,
  createHelperTextObject,
  isDisabled,
} from "../../../../../utils/utils";
import CreateExpenseType from "./createExpenseType.component";

const CreateExpenseTypeContainer = () => {
  const { openDialog, createExpenseType } = useAppSelector(
    (state) => state.expenseManager
  );
  const { required } = useAppSelector(
    (state) => state.errorHandler.createExpenseType
  );
  const dispatch = useAppDispatch();
  const open = useMemo(() => openDialog === "createExpenseType", [openDialog]);
  const disableSaveButton = useMemo(() => isDisabled(required), [required]);
  
  useEffect(() => {
    dispatch(clearExpenseManagerAction());
  }, [dispatch]);

  useMemo(() => {
    const payload = createErrorPayload(
      createExpenseType,
      "required",
      "createExpenseType"
    );
    dispatch(setErrorAction(payload));
  }, [createExpenseType, dispatch]);

  const onChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    const { name, value } = event.target;
    const payload: ISetCreateExpenseType = { name, value };
    dispatch(setCreateExpenseTypeAction(payload));
  };

  const save = () => {
    dispatch(createExpenseTypeAsync(createExpenseType));
    close()
  };

  const close = () => {
    const type: TOpenDialog = "createExpenseType";
    dispatch(closeDialogAction({ type }));
    batch(() => {
      dispatch(closeDialogAction({ type }));
      dispatch(clearErrorAction());
    });
  };

  const helperText = useCallback(() => {
    return createHelperTextObject(required);
  }, [required]);

  return (
    <CreateExpenseType
    disableSaveButton={disableSaveButton}
      onChange={onChange}
      save={save}
      close={close}
      open={open}
      helperText={helperText}
    />
  );
};

export default CreateExpenseTypeContainer;

