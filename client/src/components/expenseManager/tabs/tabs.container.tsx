import { SyntheticEvent, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setTabAction } from "../../../rtk/features/expenseManagerSlice";
import { useAppDispatch, useAppSelector } from "../../../rtk/hooks/hooks";
import ExpenseManagerTabs, { TExpenseManagerTabs } from "./tabs.component";
import { EXPENSE_MANAGER_TABS, TAB_PATH_MAPPING } from "./tabs.constant";

type TTabPath =
  | "/expense-manager"
  | "/expense-manager/expense-type"
  | "/expense-manager/expense";

const ExpenseManangerTabsContainer = () => {
  const { tab } = useAppSelector((state) => state.expenseManager);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useMemo(() => {
    if (pathname) {
      const key = Object.keys(TAB_PATH_MAPPING).find((key) => pathname === key);
      const value = TAB_PATH_MAPPING[key as TTabPath];
      if (value) dispatch(setTabAction(value));
    }
  }, [dispatch, pathname]);

  const onChange = (
    event: SyntheticEvent<Element, Event>,
    value: TExpenseManagerTabs
  ) => {
    const { path } = EXPENSE_MANAGER_TABS[value as TExpenseManagerTabs];
    navigate(path);
  };

  return <ExpenseManagerTabs tabType={tab} onChange={onChange} />;
};

export default ExpenseManangerTabsContainer;
