import { CellClassParams } from "@ag-grid-community/all-modules";
import { useAppDispatch } from "../../../../../../rtk/hooks/hooks";
import { deleteExpenseCategoryAsync } from "../../../../../../rtk/thunks/expenseCategory.thunks";
import Actions from "./actions.component";

const ActionsContainer = (props: CellClassParams) => {
  const dispatch = useAppDispatch();
  const onClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    switch (event.currentTarget.name) {
      case "delete":
        dispatch(deleteExpenseCategoryAsync(props.data.id));
        break;

      default:
        break;
    }
  };
  return <Actions {...props} onClick={onClick} />;
};

export default ActionsContainer;
