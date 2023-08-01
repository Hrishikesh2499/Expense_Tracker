import { TabList, TabContext } from "@mui/lab";
import { Tab } from "@mui/material";
import ErrorBoundary from "../../common/error-boundary/errorBoundary";
import { EXPENSE_MANAGER_TABS } from "./tabs.constant";

export type TExpenseManagerTabs = "dashboard" | "expenseType";

interface IProps {
  tabType: TExpenseManagerTabs;
  onChange: (event: React.SyntheticEvent<Element, Event>, value: any) => void;
}

const ExpenseManagerTabs = (props: IProps) => {
  const getTabList = () => {
    return (
      <TabList onChange={props.onChange}>
        {Object.keys(EXPENSE_MANAGER_TABS).map((key) => {
          const { label } = EXPENSE_MANAGER_TABS[key as TExpenseManagerTabs];
          return <Tab key={key} value={key} label={label} />;
        })}
      </TabList>
    );
  };
  return (
    <ErrorBoundary>
      <TabContext value={props.tabType}>
        {getTabList()}
      </TabContext>
    </ErrorBoundary>
  );
};

export default ExpenseManagerTabs;
