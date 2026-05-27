import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import { AVATAR_URL } from "../data/pinsData";
import styles from "./Navbar.module.css";
import { useState } from "react";
import AvatarDrawer from "./AvatarDrawer";
import { updateProfileImage } from "../redux/authSlice";

export default function Navbar({ variant = "home" }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((s) => s.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
    
  const handleSelectAvatar = (img) => {
  dispatch(updateProfileImage(img));
  setOpenDrawer(false);};


  const handleHome = () => {
  navigate("/");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
    const [openDrawer, setOpenDrawer] = useState(false);
    const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className={styles.top}>
        <div className={styles.topInner}>
          <div className={styles.left}>
            <Link to="/" className={styles.logo}>
              <span className="material-symbols-outlined filled" style={{ fontSize: 32 }}>
                favorite
              </span>
                <button onClick={handleHome} className={styles.logoText}>Pinterest</button>
            </Link>
            <nav className={styles.nav}>
              <button
                onClick={handleHome}
                className={`${styles.navLink} ${isActive("/") ? styles.navActive : ""} `}>
                    Home</button>
              <span className={styles.navLink}>Explore</span>
              <span className={styles.navLink}>Create</span>
            </nav>
          </div>
          <SearchBar className={styles.searchDesktop} />
          <div className={styles.right}>
            <ThemeToggle />
            <button type="button" className={styles.iconBtn} aria-label="Notifications">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button type="button" className={styles.iconBtn} aria-label="Chat">
              <span className="material-symbols-outlined">chat</span>
            </button>
            <button type="button" className={styles.iconBtn} aria-label="Settings">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <img src={user?.profileImage} alt="profile"className={styles.avatar}
            onClick={() => setOpenDrawer(true)}/>
            <button type="button" className={styles.logout} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </header>

      <nav className={styles.bottom}>
        <Link to="/" className={`${styles.bottomItem} ${isActive("/") ? styles.bottomActive : ""}`}>
          <span className="material-symbols-outlined filled">home</span>
          <span>Home</span>
        </Link>
        <span className={styles.bottomItem}>
          <span className="material-symbols-outlined">search</span>
          <span>Search</span>
        </span>
        <span className={styles.bottomItem}>
          <span className="material-symbols-outlined">add</span>
          <span>Create</span>
        </span>
        <span className={styles.bottomItem}>
          <span className="material-symbols-outlined">person</span>
          <span>{user.name?.split(" ")[0] || "Profile"}</span>
        </span>
      </nav>
      <AvatarDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} onSelect={handleSelectAvatar}/>
    </>
  );
  
}