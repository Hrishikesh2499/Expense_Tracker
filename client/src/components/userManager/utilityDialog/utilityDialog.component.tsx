import ErrorBoundary from "../../common/error-boundary/errorBoundary";
import Modal from "../../common/modal";

interface IProps {
  title: string;
  save: () => void;
  close: () => void;
  open: boolean;
  getDialogContent: () => JSX.Element;
  disableSaveButton:boolean
}
const UtilityDialog = (props: IProps) => {
  return (
    <ErrorBoundary>
      {props.open && (
        <Modal
          title={props.title}
          save={props.save}
          handleClose={props.close}
          open={props.open}
          disableSaveButton={props.disableSaveButton}

          
        >
          {props.getDialogContent()}
        </Modal>
      )}
    </ErrorBoundary>
  );
};

export default UtilityDialog;
