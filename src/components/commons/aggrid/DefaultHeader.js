import { useState } from "react";
import { FilterList, ArrowUpward, ArrowDownward, ImportExport } from "@material-ui/icons";
import styles from "./DefaultHeader.module.css";

console.debug("DefaultHeader.js");

const ASC = "asc";
const DESC = "desc";
const NO_SORT = "no";

function SortIcon({ direction, onClick }) {
  return direction === ASC ? (
    <ArrowUpward className={styles.icon} onClick={onClick} />
  ) : direction === DESC ? (
    <ArrowDownward className={styles.icon} onClick={onClick} />
  ) : (
    <ImportExport className={styles.icon} onClick={onClick} />
  );
}

export default function DefaultHeader(props) {
  const [direction, setDirection] = useState(NO_SORT);

  const sortEnabled = typeof props.onSortClick === "function";
  const filterEnabled = typeof props.onFilterClick === "function";

  /**
   * 정렬 클릭
   */
  const onSortClick = () => {
    switch (direction) {
      case ASC:
        setDirection(DESC);
        break;
      case DESC:
        setDirection(NO_SORT);
        break;
      default:
        setDirection(ASC);
    }
    props.onSortClick(direction, props);
  };

  /**
   * 필터 클릭
   */
  const onFilterClick = () => {
    props.onFilterClick(props);
  };

  return (
    <div className={styles.header}>
      <div className={styles.text}>
        <span>{props.displayName}</span>
        {sortEnabled && <SortIcon direction={direction} onClick={onSortClick} />}
      </div>
      {filterEnabled && <FilterList className={styles.icon} onClick={onFilterClick} />}
    </div>
  );
}
