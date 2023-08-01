import { CellClassParams } from "@ag-grid-community/all-modules";
import {
  setLabAction,
  setOpenDialogAction,
} from "../../../../rtk/features/labSlice";
import { useAppDispatch } from "../../../../rtk/hooks/hooks";
import { deleteLabAsync } from "../../../../rtk/thunks/lab.thunks";
import Actions from "./actions.component";

const ActionsContainer = (props: CellClassParams) => {
  const dispatch = useAppDispatch();
  const onClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    switch (event.currentTarget.name) {
      case "delete":
        dispatch(deleteLabAsync(props.data._id));
        break;
      case "edit":
        dispatch(setLabAction(props.data));
        dispatch(setOpenDialogAction("editLab"));
        break;

      default:
        break;
    }
  };
  return <Actions {...props} onClick={onClick} />;
};

export default ActionsContainer;
