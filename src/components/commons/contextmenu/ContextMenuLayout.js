import { useRef, useState } from "react";
import ContextMenu from "./ContextMenu";

console.debug("ContextMenuLayout.js");

export default function ContextMenuLayout({ children, menus }) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState(null);
  const posRef = useRef(null);

  /**
   * 컨텍스트 메뉴 열기
   */
  const openContextMenu = (event) => {
    event.preventDefault();
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
    setOpen(true);
  };

  /**
   * 컨텍스트 메뉴 닫기
   */
  const closeContextMenu = () => {
    setOpen(false);
  };

  return (
    <div onContextMenu={openContextMenu}>
      {children}
      <div ref={posRef} style={{ position: "fixed", left: pos?.x, top: pos?.y }} />
      <ContextMenu menus={menus} open={open} anchorEl={posRef.current} onClose={closeContextMenu} />
    </div>
  );
}
