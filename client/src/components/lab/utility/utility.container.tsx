import React from "react";
import { setOpenDialogAction } from "../../../rtk/features/labSlice";
import { useAppDispatch } from "../../../rtk/hooks/hooks";
import ExpenseTypeUtility from "./utility.component";

const ExpenseTypeUtilityContainer = () => {
  const dispatch = useAppDispatch();
  const onClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const { id } = event.currentTarget;
    dispatch(setOpenDialogAction(id));
  };

  return <ExpenseTypeUtility onClick={onClick} />;
};

export default ExpenseTypeUtilityContainer;
