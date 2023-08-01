import { CellClassParams } from "@ag-grid-community/all-modules";
import { useAppDispatch } from "../../../../rtk/hooks/hooks";
import { deleteUserAsync } from "../../../../rtk/thunks/userManager.thunks";
import Actions from "./actions.component";

const ActionsContainer = (props: CellClassParams) => {
  const dispatch = useAppDispatch();
  const onClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    switch (event.currentTarget.name) {
      case "delete":
        dispatch(deleteUserAsync({ id: props.data.id }));
        break;

      default:
        break;
    }
  };
  return <Actions {...props} onClick={onClick} />;
};

export default ActionsContainer;
