import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { MoveToInbox, Mail, AccountTree } from "@material-ui/icons";

console.debug("RoutingSidebar.js");

export default function RoutingSidebar({ onAgGridClick, onSnackbarClick, onDialogClick, onTreeClick, onRcTreeClick, onUtilClick }) {
  return (
    <div style={{ width: 200 }}>
      <List>
        <ListItem button onClick={onAgGridClick}>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText>AgGrid</ListItemText>
        </ListItem>
        <ListItem button onClick={onSnackbarClick}>
          <ListItemIcon>
            <MoveToInbox />
          </ListItemIcon>
          <ListItemText>Snackbar</ListItemText>
        </ListItem>
        <ListItem button onClick={onDialogClick}>
          <ListItemIcon>
            <MoveToInbox />
          </ListItemIcon>
          <ListItemText>Dialog</ListItemText>
        </ListItem>
        <ListItem button onClick={onTreeClick}>
          <ListItemIcon>
            <AccountTree />
          </ListItemIcon>
          <ListItemText>Tree</ListItemText>
        </ListItem>
        <ListItem button onClick={onRcTreeClick}>
          <ListItemIcon>
            <AccountTree />
          </ListItemIcon>
          <ListItemText>RcTree</ListItemText>
        </ListItem>
        <ListItem button onClick={onUtilClick}>
          <ListItemIcon>
            <AccountTree />
          </ListItemIcon>
          <ListItemText>Util</ListItemText>
        </ListItem>
      </List>
    </div>
  );
}
