import { ColDef,} from "@ag-grid-community/all-modules";
import {  useEffect } from "react";
import { TUserFields } from "../../../interfaces/userManager.interface";
import { useAppDispatch, useAppSelector } from "../../../rtk/hooks/hooks";
import {
  fetchAllUsersAsync,
  updateUserAsync,
} from "../../../rtk/thunks/userManager.thunks";
import UserGrid from "./grid.component";
import { USER_FIELDS_WITH_HEADERNAME } from "./grid.constant";

const GridContainer = () => {
  const { users } = useAppSelector((state) => state.userManager);
  const { spinner } = useAppSelector((state) => state.spinner);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllUsersAsync());
  }, [dispatch]);
 
  const colDefs = () => {
    return Object.keys(USER_FIELDS_WITH_HEADERNAME).map((field) => {
     const props =
        USER_FIELDS_WITH_HEADERNAME[field as TUserFields];
      const valueSetter: ColDef["valueSetter"] = (params) => {
        const { data, newValue } = params;
        switch (field as TUserFields) {
          case "email":
            dispatch(updateUserAsync({ ...data, email: newValue }));
            return true;
          default:
            break;
        }
        return true;
      };
      const colDef: ColDef = {
        field,
        tooltipField: field,
        headerTooltip: props.headerName,
        valueSetter,
        ...props
      };
      return colDef;
    });
  };
  return <UserGrid spinner={spinner} colDefs={colDefs()} rowData={users} />;
};

export default GridContainer;
