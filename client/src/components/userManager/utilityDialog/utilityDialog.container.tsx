import { useCallback, useMemo } from "react";
import {
  ISetErrorActionPayload,
  setErrorAction,
  TAddNewUserError,
} from "../../../rtk/features/errorSlice";
import {
  clearAddNewUserPropAction,
  KeyTypeAddNewUserProp,
  setOpenUtilityDialogAction,
} from "../../../rtk/features/userManagerSlice";
import { useAppDispatch, useAppSelector } from "../../../rtk/hooks/hooks";
import { addUserAsync } from "../../../rtk/thunks/userManager.thunks";
import { hasValue, isDisabled } from "../../../utils/utils";
import AddNewUserDialogContent from "./addNewUserDialogContent";
import UtilityDialog from "./utilityDialog.component";

const UtilityDialogContainer = () => {
  const { openUtilityDialog, utilityDialog, addNewUserProp } = useAppSelector(
    (state) => state.userManager
  );
  const { required } = useAppSelector(
    (state) => state.errorHandler.addNewUser
  );
  const dispatch = useAppDispatch();
  const getTitle = useCallback(() => {
    if (openUtilityDialog) return utilityDialog[openUtilityDialog].title;
    return "";
  }, [openUtilityDialog, utilityDialog]);

  const open = openUtilityDialog ? true : false;
  const save = () => {
    dispatch(addUserAsync(addNewUserProp));
    close();
  };
  const close = () => {
    dispatch(setOpenUtilityDialogAction(undefined));
    dispatch(clearAddNewUserPropAction());
  };
  // To Check Does It satisfy required condition
  useMemo(() => {
    const addNewUserErrorObj = {} as TAddNewUserError;
    Object.keys(addNewUserProp).forEach((key) => {
      const value = addNewUserProp[key as KeyTypeAddNewUserProp];
      addNewUserErrorObj[key as keyof TAddNewUserError] = hasValue(value);
    });
    const payload: ISetErrorActionPayload = {
      type: "required",
      value: addNewUserErrorObj,
      module: "addNewUser",
    };
    dispatch(setErrorAction(payload));
  }, [addNewUserProp, dispatch]);
  
  
  const getDialogContent = useCallback(() => {
    switch (openUtilityDialog) {
      case "userManager":
        return <AddNewUserDialogContent />;

      default:
        return <></>;
    }
  }, [openUtilityDialog]);

  const disableSaveButton = useMemo(() => isDisabled(required), [required])

  return (
    <UtilityDialog
      getDialogContent={getDialogContent}
      close={close}
      open={open ? true : false}
      save={save}
      disableSaveButton={disableSaveButton} // if saving not allowed disable save button
      title={getTitle()}
    />
  );
};

export default UtilityDialogContainer;
