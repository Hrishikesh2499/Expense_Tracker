import { TabContext, TabList } from "@mui/lab";
import { AppBar, Tab } from "@mui/material";
import { HOME_TAB } from "./tab.constant";
import { TTabType } from "./tab.interface";
import classes from "./tab.styles";

interface IProps {
  tabType: TTabType;
  onChange: (event: React.SyntheticEvent<Element, Event>, value: any) => void;
}
const HomeTab = (props: IProps) => {
  const getTabList = () => {
    return (
      <AppBar position="static" sx={classes.appBar}>
        <TabList onChange={props.onChange}>
          {Object.keys(HOME_TAB).map((key) => {
            const { label } = HOME_TAB[key as TTabType];
            return (
              <Tab key={key} sx={classes.tab} value={key} label={label} />
            );
          })}
        </TabList>
      </AppBar>
    );
  };
  
  return <TabContext value={props.tabType}>{getTabList()}</TabContext>;
};

export default HomeTab;
