import { Box, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { CellClassParams } from "@ag-grid-community/all-modules";

interface IProps extends CellClassParams {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const Actions = (props: IProps) => {
  return (
    <Box>
      <Tooltip title="Delete">
        <IconButton name="delete" onClick={props.onClick}>
          <DeleteIcon color="primary" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit">
        <IconButton name="edit" onClick={props.onClick}>
          <EditIcon color="primary" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Actions;
