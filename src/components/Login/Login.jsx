import { useNavigate } from "react-router";
import { fakeLoginApi } from "../fakeAPI/auth";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    try {
      const resp = await fakeLoginApi(email, password);
      console.log(resp);
      if (resp.success) {
        navigate("/games", { replace: true });
        return resp;
      }
    } catch (error) {
      console.log(error);
      alert("Incorrect credentials");
    }
  };

  return (
    <div>
      <h1>Login page</h1>

      <form id="loginForm" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
