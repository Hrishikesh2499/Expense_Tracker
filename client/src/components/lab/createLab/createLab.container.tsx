import { useCallback, useEffect, useMemo } from "react";
import { batch } from "react-redux";
import {
  setErrorAction,
  clearErrorAction,
} from "../../../rtk/features/errorSlice";
import {
  closeDialogAction,
  updateLabAction,
} from "../../../rtk/features/labSlice";
import { useAppSelector, useAppDispatch } from "../../../rtk/hooks/hooks";
import { createLabAsync, updateLabAsync } from "../../../rtk/thunks/lab.thunks";
import {
  createErrorPayload,
  createHelperTextObject,
  isDisabled,
} from "../../../utils/utils";
import CreateLab from "./createLab.component";

const CreateLabContainer = () => {
  const { openDialog, lab } = useAppSelector((state) => state.lab);
  const { required } = useAppSelector((state) => state.errorHandler.createLab);
  const dispatch = useAppDispatch();
  const open = useMemo(
    () => openDialog === "createLab" || openDialog === "editLab",
    [openDialog]
  );
  const disableSaveButton = useMemo(() => isDisabled(required), [required]);

  useEffect(() => {
    // dispatch(clearExpenseManagerAction());
  }, [dispatch]);

  useMemo(() => {
    // extract fields which are mandatory
    const { handle } = lab;
    const payload = createErrorPayload({ handle }, "required", "createLab");
    dispatch(setErrorAction(payload));
  }, [lab, dispatch]);

  const helperText = useCallback(() => {
    return createHelperTextObject(required);
  }, [required]);

  const onChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    const { name, value } = event.target;
    const payload = { name, value };
    dispatch(updateLabAction(payload));
  };
  const title = useCallback(() => {
    switch (openDialog) {
      case "createLab":
        return "Create Lab";
      case "editLab":
        return "Edit Lab";
      default:
        return "";
    }
  }, [openDialog]);

  const save = () => {
    switch (openDialog) {
      case "createLab":
        dispatch(createLabAsync(lab));

        break;
      case "editLab":
        dispatch(updateLabAsync(lab));
        break;
    }
    close();
  };

  const close = () => {
    batch(() => {
      dispatch(closeDialogAction());
      dispatch(clearErrorAction());
    });
  };

  return (
    <CreateLab
      helperText={helperText}
      onChange={onChange}
      save={save}
      close={close}
      open={open}
      lab={lab}
      title={title()}
      disableSaveButton={disableSaveButton}
    />
  );
};

export default CreateLabContainer;
