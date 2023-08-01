import {
  setOpenUtilityDialogAction,
  TUtilityDialogTypes,
} from "../../../rtk/features/userManagerSlice";
import { useAppDispatch } from "../../../rtk/hooks/hooks";
import Utility from "./utility.component";

const UtilityContainer = () => {
  const dispatch = useAppDispatch();
  const onClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const type = event.currentTarget.name;
    switch (type as TUtilityDialogTypes) {
      case "userManager":
        dispatch(setOpenUtilityDialogAction(event.currentTarget.name));
        break;

      default:
        break;
    }
  };
  return <Utility onClick={onClick} />;
};

export default UtilityContainer;
