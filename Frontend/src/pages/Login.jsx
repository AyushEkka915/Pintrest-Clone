import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import styles from "./Login.module.css";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!email.includes("@")) e.email = "Enter a valid email";
    if (password.length < 6) e.password = "Password must be at least 6 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    dispatch(login({ name: email.split("@")[0], email }));
    navigate("/");
  };

  return (
    <div className={styles.page}>
      <div className={styles.glow1} />
      <div className={styles.glow2} />
      <div className={styles.card}>
        <div className={styles.logoCircle}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"alt="Pinterest Logo"
          className={styles.logoImg}/>
        </div>
        
        <h1 className={styles.title}>Welcome to Pinterest</h1>
        <p className={styles.sub}>Find new ideas to try</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
            {errors.password && <p className={styles.error}>{errors.password}</p>}
          </div>
          <a href="#forgot" className={styles.forgot}>
            Forgot your password?
          </a>
          <button type="submit" className={styles.submit}>
            Log in
          </button>
        </form>
        <p className={styles.terms}>
          By continuing, you agree to Pinterest&apos;s Terms of Service.
        </p>
      </div>
       <p className={styles.signupText}>
        Not on Pinterest yet?{" "}
        <Link to="/signup" className={styles.signupLink}>
        Sign up
  </Link>
</p>
    </div>
  );
}