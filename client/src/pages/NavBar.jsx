import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LogoutIcon from "@mui/icons-material/Logout";
// import ArrowRightIcon from "@material-ui/icons/ArrowRight";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
///////////// IMPORTS //////////////

const NavBar = () => {
  const drawerWidth = 260;
  const navigate = useNavigate();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List onClick={() => {}}>
        {[`username`].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src="" />
              </ListItemAvatar>
              <ListItemText primary={text} />
            </ListItemButton>
            <ListItemText primary={` coins`} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List onClick={() => {}}>
        {["Create Post"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List onClick={() => {}}>
        {["Logout"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List onClick={() => {}}>
        {["All Districts"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{/* <MoreHorizIcon /> */}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>Districts List here</List>
    </Drawer>
  );
};

export default NavBar;
