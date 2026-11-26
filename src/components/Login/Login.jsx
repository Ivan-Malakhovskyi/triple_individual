import { useContext } from "react";
import { useNavigate } from "react-router";
import { fakeLoginApi } from "@/services/fakeLoginApi";
import styles from "./Login.module.css";
import authContext from "@/context/auth/context";

const Login = () => {
  const navigate = useNavigate();
  const { onLogIn } = useContext(authContext);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    try {
      const resp = await fakeLoginApi(email, password);

      if (resp.success) {
        onLogIn();
        navigate("/search_games", { replace: true });
        return resp;
      }
    } catch (error) {
      console.log(error);
      alert("Incorrect credentials");
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Login page</h1>

      <form className={styles.form} id="loginForm" onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={styles.input}
          required
        />
        <button className={styles.submitBtn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
