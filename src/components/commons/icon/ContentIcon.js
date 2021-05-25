import IconFolder from "assets/imgs/icon-folder.svg";
import IconFile from "assets/imgs/icon-file.svg";
import IconTrash from "assets/imgs/icon-trash.svg";
import styles from "./ContentIcon.module.css";

console.debug("ContentIcon.js");

export default function ContentIcon({ nodeTypeCode }) {
  return nodeTypeCode === "FOLDER" ? (
    <IconFolder className={styles.icon} />
  ) : nodeTypeCode === "DOCUMENT" ? (
    <IconFile className={styles.icon} />
  ) : nodeTypeCode === "DIRECTORY" ? (
    <IconFolder className={styles.icon} />
  ) : nodeTypeCode === "TRASH" ? (
    <IconTrash className={styles.icon} />
  ) : null;
}
