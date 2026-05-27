import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../redux/searchSlice";
import styles from "./SearchBar.module.css";

export default function SearchBar({ className = "" }) {
  const dispatch = useDispatch();
  const query = useSelector((s) => s.search.query);

  return (
    <div className={`${styles.wrap} ${className}`}>
      <span className={`material-symbols-outlined ${styles.icon}`}>search</span>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))}
        className={styles.input}
      />
    </div>
  );
}