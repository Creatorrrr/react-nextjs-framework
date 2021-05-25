import { useState } from "react";
import ContextMenu from "./ContextMenu";

console.debug("ContextMenuLayout.js");

export default function ContextMenuLayout({ children, menus }) {
  const [mousePosition, setMousePosition] = useState(null);

  /**
   * 컨텍스트 메뉴 열기
   */
  const openContextMenu = (event) => {
    event.preventDefault();
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  /**
   * 컨텍스트 메뉴 닫기
   */
  const closeContextMenu = () => {
    setMousePosition(null);
  };

  return (
    <div onContextMenu={openContextMenu}>
      {children}
      <ContextMenu menus={menus} open={mousePosition !== null} onClose={closeContextMenu} posX={mousePosition?.x} posY={mousePosition?.y} />
    </div>
  );
}
