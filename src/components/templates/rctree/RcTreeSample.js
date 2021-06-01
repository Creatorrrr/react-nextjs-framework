import { useRef, useState } from "react";
import Tree from "rc-tree";
import { Typography } from "@material-ui/core";
import TreeIcon from "@/components/commons/tree/TreeIcon";
import ContextMenu from "@/components/commons/contextmenu/ContextMenu";
import "rc-tree/assets/index.css";

export default function RcTreeSample({ nodes }) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState(null);
  const contextMenuRef = useRef(null);

  /**
   * 트리 노드 선택
   */
  const selectTreeNode = (selectedKeys, info) => {
    alert(info?.node?.data?.name);
  };

  /**
   * 컨텍스트 메뉴 열기
   */
  const openContextMenu = ({ event, node }) => {
    event.preventDefault();
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
    contextMenuRef.current.closeMenu();
    setOpen(true);
  };

  /**
   * 컨텍스트 메뉴 닫기
   */
  const closeContextMenu = () => {
    setOpen(false);
  };

  /**
   * 트리 내용 그리기 (재귀)
   */
  const drawTreeItem = (currentNodes) => {
    return currentNodes.map((node) => ({
      key: node.id,
      title: <Typography>{node.text}</Typography>,
      data: node.data,
      children: drawTreeItem(nodes.filter((childNode) => childNode.parent === node.id)),
    }));
  };

  return (
    <div style={{ margin: "0 20px" }}>
      <Tree
        treeData={drawTreeItem(nodes.filter((childNode) => childNode.parent === "#"))}
        icon={({ data, expanded }) => <TreeIcon type={data.data.node.nodeTypeCode} expanded={expanded} />}
        onSelect={selectTreeNode}
        onRightClick={openContextMenu}
        showLine
        checkable
        defaultExpandAll
      />
      <ContextMenu
        ref={contextMenuRef}
        menus={[
          {
            name: "메뉴1",
            onClick: () => {
              alert("메뉴1클릭");
            },
          },
          {
            name: "메뉴2",
            children: [
              {
                name: "메뉴2하위1",
                onClick: () => {
                  alert("메뉴2하위1클릭");
                },
              },
              {
                name: "메뉴2하위2",
                onClick: () => {
                  alert("메뉴2하위2클릭");
                },
              },
            ],
          },
          {
            name: "메뉴3",
            onClick: () => {
              alert("메뉴3클릭");
            },
          },
        ]}
        open={open}
        posX={pos?.x}
        posY={pos?.y}
        onClose={closeContextMenu}
      />
    </div>
  );
}
