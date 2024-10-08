import React from "react";
import Sidebar from "components/commons/layout/Sidebar";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { MoveToInbox, Mail, AccountTree } from "@material-ui/icons";

console.debug("AppSidebar.js");

export default function AppSidebar({
  onAgGridClick,
  onDataGridClick,
  onSnackbarClick,
  onDialogClick,
  onTreeClick,
  onRcTreeClick,
  onUtilClick,
  onRoutingClick,
}) {
  return (
    <Sidebar>
      <List>
        <ListItem button onClick={onAgGridClick}>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText>AgGrid</ListItemText>
        </ListItem>
        <ListItem button onClick={onDataGridClick}>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText>DataGrid</ListItemText>
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
        <ListItem button onClick={onRoutingClick}>
          <ListItemIcon>
            <AccountTree />
          </ListItemIcon>
          <ListItemText>Routing</ListItemText>
        </ListItem>
      </List>
    </Sidebar>
  );
}
