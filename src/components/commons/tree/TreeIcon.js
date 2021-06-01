import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFolderOpen, faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import styles from "./TreeIcon.module.css";

export default function TreeIcon({ type, expanded }) {
  return type === "GROUP" ? (
    <FontAwesomeIcon icon={faUserFriends} className={styles.icon} />
  ) : type === "USER" ? (
    <FontAwesomeIcon icon={faUser} className={styles.icon} />
  ) : expanded ? (
    <FontAwesomeIcon icon={faFolderOpen} className={styles.icon} />
  ) : (
    <FontAwesomeIcon icon={faFolder} className={styles.icon} />
  );
}
