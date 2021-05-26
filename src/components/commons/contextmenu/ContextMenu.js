import { forwardRef, useImperativeHandle, useState } from "react";
import { ClickAwayListener, Grow, makeStyles, MenuItem, MenuList, Paper, Popper } from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";
import { Fragment } from "react";

console.debug("SubContextMenu.js");

const useStyles = makeStyles((theme) => ({
  popper: {
    zIndex: theme.zIndex.modal + 2000,
  },
  paper: {
    width: 200,
  },
}));

const ContextMenu = forwardRef(function ({ menus, open, onClose, anchorEl }, ref) {
  const classes = useStyles();
  const [focused, setFocused] = useState(null);

  useImperativeHandle(ref, () => ({
    closeMenu,
  }));

  /**
   * 하위 메뉴 열기
   */
  const setFocusedMenu = (event, menu) => {
    setFocused({
      element: event.currentTarget,
      menu: menu,
    });
  };

  /**
   * 메뉴 클릭
   */
  const clickMenu = (event, menu) => {
    if (menu.children) {
      openChildMenu(event, menu);
    } else {
      if (typeof menu.onClick === "function") menu.onClick(event);
      closeMenu();
    }
  };

  /**
   * 메뉴 닫기
   */
  const closeMenu = () => {
    setFocused(null);
    onClose();
  };

  return (
    <Fragment>
      <Popper
        className={classes.popper}
        open={open}
        anchorEl={anchorEl}
        placement={"right-start"}
        modifiers={{
          flip: {
            enabled: false,
          },
          preventOverflow: {
            enabled: true,
            boundariesElement: "viewport",
          },
        }}
        transition
        disablePortal
        keepMounted
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper className={classes.paper} elevation={5}>
              <ClickAwayListener onClickAway={closeMenu}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  {menus.map((menu, index) => (
                    <MenuItem
                      key={index}
                      onClick={(event) => {
                        clickMenu(event, menu);
                      }}
                      onMouseEnter={(event) => {
                        setFocusedMenu(event, menu);
                      }}
                    >
                      <span style={{ flexGrow: 1 }}>
                        {menu.name}
                        {menu.opened}
                      </span>
                      {menu.children ? <ArrowRight /> : null}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      {focused?.menu?.children ? (
        <ContextMenu
          ref={ref}
          menus={focused.menu.children}
          anchorEl={focused.element}
          onClose={() => {
            closeMenu();
          }}
          open
        />
      ) : null}
    </Fragment>
  );
});

export default ContextMenu;
