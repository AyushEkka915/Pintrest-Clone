import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/pinsSlice";
import { CATEGORIES } from "../data/pinsData";
import styles from "./CategoryFilter.module.css";

export default function CategoryFilter() {
  const dispatch = useDispatch();
  const active = useSelector((s) => s.pins.category);

  return (
    <div className={styles.scroll}>
      <div className={styles.row}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`${styles.pill} ${active === cat ? styles.active : ""}`}
            onClick={() => dispatch(setCategory(cat))}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}