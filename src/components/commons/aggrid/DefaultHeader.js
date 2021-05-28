import { FilterList } from "@material-ui/icons";
import styles from "./DefaultHeader.module.css";

console.debug("DefaultHeader.js");

export default function DefaultHeader(props) {
  const filterEnabled = typeof props.onFilterClick === "function";

  return (
    <div className={styles.header}>
      <div className={styles.text}>
        <span>{props.text}</span>
      </div>
      {filterEnabled && (
        <FilterList
          className={styles.filterIcon}
          onClick={() => {
            props.onFilterClick(props);
          }}
        />
      )}
    </div>
  );
}
