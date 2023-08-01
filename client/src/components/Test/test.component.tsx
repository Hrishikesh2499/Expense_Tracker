import { Box, Button } from "@mui/material";

interface IProps {
  onClick: React.FormEventHandler<HTMLButtonElement>;
  value: number;
}
export type TCalculation = "addtion" | "subtraction";
const Test = (props: IProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "400px",
        gap:"16px"
      }}
    >
      <Button variant="contained" name="addtion" onClick={props.onClick}>
        Addition
      </Button>
      <Button variant="contained" name="subtraction" onClick={props.onClick}>
        Subtraction
      </Button>
      Value : {props.value}
    </Box>
  );
};

export default Test;
