import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSave } from "../redux/pinsSlice";
import styles from "./PinCard.module.css";

export default function PinCard({ pin, showMeta = true }) {
  const dispatch = useDispatch();

  return (
    <article className={styles.card}>
      <Link to={`/pin/${pin.id}`} className={styles.imageLink}>
        <div className={styles.imageWrap}>
          <img src={pin.image} alt={pin.title} className={styles.img} />
          <div className={styles.overlay}>
            <button
              type="button"
              className={styles.saveBtn}
              onClick={(e) => {
                e.preventDefault();
                dispatch(toggleSave(pin.id));
              }}
            >
              {pin.saved ? "Saved" : "Save"}
            </button>
            <div className={styles.overlayBottom}>
              <button type="button" className={styles.iconBtn} aria-label="Share">
                <span className="material-symbols-outlined">ios_share</span>
              </button>
              <button type="button" className={styles.iconBtn} aria-label="More">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
          </div>
        </div>
      </Link>
      {showMeta && (
        <>
          <h3 className={styles.title}>{pin.title}</h3>
          {pin.description && (
            <p className={styles.desc}>{pin.description}</p>
          )}
          {pin.creator && (
            <p className={styles.creator}>{pin.creator}</p>
          )}
        </>
      )}
    </article>
  );
}