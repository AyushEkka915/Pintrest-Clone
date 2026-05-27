import { avatars } from "../data/avatarData";
import styles from "./AvatarDrawer.module.css";

export default function AvatarDrawer({
  open,
  onClose,
  onSelect,
}) {
  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2>Select Profile Picture</h2>

        <div className={styles.grid}>
          {avatars.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="avatar"
              className={styles.avatar}
              onClick={() => onSelect(img)}
            />
          ))}
        </div>

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}