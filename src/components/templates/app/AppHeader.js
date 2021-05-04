import React from "react";
import Header from "components/commons/layout/Header";
import { Button, FormControl, IconButton, makeStyles, MenuItem, Select } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

console.debug("AppHeader.js");

const useStyles = makeStyles({
  select: {
    color: "white",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
    "& .MuiSelect-select": {
      backgroundColor: "transparent",
    },
  },
});

export default function AppHeader({ onTitleClick, onLogoutClick, language, onLanguageChange }) {
  const classes = useStyles();

  return (
    <Header title={"리액트 프레임워크"} onTitleClick={onTitleClick}>
      <FormControl>
        <Select className={classes.select} value={language} onChange={onLanguageChange} disableUnderline>
          <MenuItem value="ko-KR">한국어</MenuItem>
          <MenuItem value="en-US">ENGLISH</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={onLogoutClick} style={{ color: "white" }}>
        로그아웃
      </Button>
      <IconButton color="inherit">
        <AccountCircle />
      </IconButton>
    </Header>
  );
}
