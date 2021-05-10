import Tree from "rc-tree";
import "rc-tree/assets/index.css";

export default function RcTreeSample({ nodes }) {
  const drawTreeItem = (currentNodes) => {
    return currentNodes.map((node) => ({
      key: node.id,
      title: node.text,
      children: drawTreeItem(nodes.filter((childNode) => childNode.parent === node.id)),
    }));
  };

  return (
    <div style={{ margin: "0 20px" }}>
      <Tree treeData={drawTreeItem(nodes.filter((childNode) => childNode.parent === "#"))} showLine checkable defaultExpandAll />
    </div>
  );
}
