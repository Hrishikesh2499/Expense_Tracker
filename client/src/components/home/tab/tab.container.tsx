import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setTabTypeAction } from "../../../rtk/features/homeSlice";
import { useAppDispatch, useAppSelector } from "../../../rtk/hooks/hooks";
import HomeTab from "./tab.component";
import { HOME_TAB, PATH_TAB_VALUE_MAPPING } from "./tab.constant";
import { TTabType } from "./tab.interface";

type TTabPath = "/expense-manager" | "/user-manager";

const TabContainer = () => {
  const { tabType } = useAppSelector((state) => state.home);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useMemo(() => {
    const key = Object.keys(PATH_TAB_VALUE_MAPPING).find((key)=>pathname.includes(key));
    const value=PATH_TAB_VALUE_MAPPING[key as TTabPath]
    dispatch(setTabTypeAction(value));
  }, [dispatch, pathname]);

  const onChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: any
  ) => {
    const { path } = HOME_TAB[value as TTabType];
    navigate(path);
  };
  return <HomeTab tabType={tabType} onChange={onChange} />;
};

export default TabContainer;
