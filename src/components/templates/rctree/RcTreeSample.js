import Tree from "rc-tree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import "rc-tree/assets/index.css";

export default function RcTreeSample({ nodes }) {
  const drawTreeItem = (currentNodes) => {
    return currentNodes.map((node) => ({
      key: node.id,
      title: node.text,
      node: node.data,
      children: drawTreeItem(nodes.filter((childNode) => childNode.parent === node.id)),
    }));
  };

  return (
    <div style={{ margin: "0 20px" }}>
      <Tree
        treeData={drawTreeItem(nodes.filter((childNode) => childNode.parent === "#"))}
        icon={({ data }) => (data.node.nodeTypeCode === "GROUP" ? <FontAwesomeIcon icon={faUserFriends} /> : <FontAwesomeIcon icon={faFolder} />)}
        showLine
        checkable
        defaultExpandAll
      />
    </div>
  );
}
