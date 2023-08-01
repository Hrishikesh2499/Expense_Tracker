import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function NavTopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" color="whitesmoke" component="div" sx={{ flexGrow: 1 }}>
            <b>TODO 2022</b>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
