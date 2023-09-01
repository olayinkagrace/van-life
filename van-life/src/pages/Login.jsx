import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Form, Link, useActionData, useLoaderData, useNavigation } from "react-router-dom";

//to get the "you must log in first message"
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

function Login() {
  const { login, error } = useLogin();
  const [email, setEmail] = useState("Ola@gmail.com");
  const [password, setPassword] = useState("123abcABC!!!");
  const [status, setStatus] = useState("idle");
  const message = useLoaderData();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    await login(email, password);
    setStatus("idle");
  };
  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
    
      <Form className="login-form" onSubmit={handleSubmit}>
        {message && <h3 className="red">{message}</h3>}
        {error && <h3 className="red">{error}</h3>}
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
        <div style={{marginTop: "10px"}}>
          <small>
          Do not havean account?...<Link to="/signup">Sign Up</Link>
          </small>
        </div>
      </Form>
    </div>
  );
}

export default Login;
