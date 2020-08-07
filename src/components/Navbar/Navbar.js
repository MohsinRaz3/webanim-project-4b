import React from "react";
import {
  AppBar,
  Toolbaar,
  ListItem,
  IconButton,
  ListItemText,
  Divider,
  List,
  Typography,
  Box,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";

import { ArrowRightAlt, AssignmentInd, Home } from "@material-ui/icons";
import junto from "../Graphics/junto.jpg";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    display: "flex",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  slide2: {
    position: "absolute",
    right: "10px",
    bottom: "20px",
    
  },

  sidebar: {
    color: "green",
    flexGrow: 1,
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  header: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
  },
}));

export function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box component="nav">
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <img src={junto} alt="junto" />

          <div className={classes.sidebar}>
            {isMobile ? (
              <>
                <div className={classes.slide2}>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                    <MenuItem onClick={handleClose}>About Us</MenuItem>
                    <MenuItem onClick={handleClose}>Blog </MenuItem>
                    <MenuItem onClick={handleClose}>Services</MenuItem>
                  </Menu>{" "}
                </div>
              </>
            ) : (
              <div className={classes.header}>
                <Button> Home</Button>
                <Button>About us</Button>
                <Button>Blog</Button>
                <Button>Services</Button>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
