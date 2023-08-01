import { useCallback } from "react";
import { TError } from "../../../../rtk/features/errorSlice";
import {
  IAddUserManagerProp,
  setAddNewUserProp,
  TAddUserManagerPropKey,
} from "../../../../rtk/features/userManagerSlice";
import { useAppDispatch, useAppSelector } from "../../../../rtk/hooks/hooks";
import AddNewUserDialogContent, {
  IPropValue,
} from "./addNewUserDialogContent.component";
import { LABELS } from "./addNewUserDialogContent.constant";

export type TAddNewUserHelperText = {
  [key in TAddUserManagerPropKey]: string;
};

const AddNewUserDialogContentContainer = () => {
  const dispatch = useAppDispatch();
  const { addNewUserProp } = useAppSelector((state) => state.userManager);
  const { required } = useAppSelector(
    (state) => state.errorHandler.addNewUser
  );

  const onChange = (propKey: string, propValue: IPropValue) => {
    dispatch(setAddNewUserProp({ propKey, propValue }));
  };

  const helperText = useCallback(() => {
    const helpTextObj = {} as TAddNewUserHelperText;
    Object.keys(required).forEach((key) => {
      const propKey = key as keyof IAddUserManagerProp;
      helpTextObj[propKey] = required[propKey as keyof TError]
        ? ""
        : `${LABELS[propKey]} Is Required.`;
    });
    return helpTextObj;
  }, [required]);
  return (
    <AddNewUserDialogContent
      onChange={onChange}
      addNewUserProp={addNewUserProp}
      helperText={helperText()}
    />
  );
};

export default AddNewUserDialogContentContainer;
