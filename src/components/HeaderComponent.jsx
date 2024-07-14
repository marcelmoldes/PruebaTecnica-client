import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Classroom Management
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/teachers">
          Teachers
        </Button>
        <Button color="inherit" component={Link} to="/students">
          Students
        </Button>
        <Button color="inherit" component={Link} to="/classes">
          Classes
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
