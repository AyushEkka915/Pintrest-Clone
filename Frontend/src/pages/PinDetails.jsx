import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSave } from "../redux/pinsSlice";
import { getPinById, getRelatedPins } from "../data/pinsData";
import Navbar from "../components/Navbar";
import PinCard from "../components/PinCard";
import styles from "./PinDetails.module.css";

export default function PinDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pin = getPinById(id);
  const items = useSelector((s) => s.pins.items);
  const user = useSelector((s) => s.auth.user);
  const livePin = items.find((p) => p.id === id) || pin;

  if (!livePin) {
    return (
      <div className={styles.page}>
        <Navbar />
        <p className={styles.notFound}>Pin not found.</p>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  const related = getRelatedPins(livePin.id, livePin.category);

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
  <div className={styles.layout}>

    {/* LEFT SIDE */}
    <section className={styles.left}>

      <div className={styles.topBar}>
        <div className={styles.actions}>
          <button className={styles.iconBtn}>
            <span className="material-symbols-outlined">
              favorite
            </span>
          </button>

          <button className={styles.iconBtn}>
            <span className="material-symbols-outlined">
              chat_bubble
            </span>
          </button>

          <button className={styles.iconBtn}>
            <span className="material-symbols-outlined">
              ios_share
            </span>
          </button>

          <button className={styles.iconBtn}>
            <span className="material-symbols-outlined">
              more_horiz
            </span>
          </button>
        </div>

        <button
          className={styles.saveBtn}
          onClick={() => dispatch(toggleSave(livePin.id))}
        >
          {livePin.saved ? "Saved" : "Save"}
        </button>
      </div>

      {/* IMAGE */}
      <img
        src={livePin.image}
        alt={livePin.title}
        className={styles.heroImg}
      />

      {/* USER */}
      <div className={styles.userRow}>
        <img
          src={user?.profileImage}
          alt="profile"
          className={styles.userAvatar}
        />

        <div>
          <h3>{livePin.creator}</h3>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className={styles.descBox}>
        <h2>{livePin.title}</h2>

        <p>{livePin.description}</p>
      </div>
    </section>

    {/* RIGHT SIDE */}
    <aside className={styles.right}>
      <div className={styles.relatedGrid}>
        {related.map((p) => (
          <PinCard key={p.id} pin={p} />
        ))}
      </div>
    </aside>

  </div>
</main>
    </div>
  );
}