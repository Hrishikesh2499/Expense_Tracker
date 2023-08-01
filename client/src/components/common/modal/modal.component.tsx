import { Box, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TModalProp } from "../../../interfaces/modal.interface";

const Modal: React.FC<TModalProp> = (props) => {
  return (
    <Box sx={{ height: "500px", width: "1000px" }}>
      <Dialog
        sx={{ height: "100%", width: "100%" }}
        open={props.open}
        maxWidth="md"
        fullScreen={props.fullScreen}
        fullWidth
        onClose={props.handleClose}
      >
        <DialogTitle>
          <b>{props.title}</b>
        </DialogTitle>
        <Divider />
        <DialogContent>{props.children || <></>}</DialogContent>
        <Divider />

        <DialogActions>
          <Button disabled={props.disableSaveButton || false} onClick={props.save}>
            {props.saveButtonTitle || "Save"}
          </Button>
          <Button onClick={props.handleClose}>
            {props.closeButtonTitle || "Cancel"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default Modal;
