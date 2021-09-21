import { MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useHistory } from "react-router";

const Menu = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <MenuItem onClick={() => sendTo("/")}>Login</MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Menu;
