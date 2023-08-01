import { TModalProp } from "../../../interfaces/modal.interface";
import Modal from "./modal.component";

const ModalContainer: React.FC<TModalProp> = (props) => {
  return <Modal {...props}/>;
};

export default ModalContainer;
