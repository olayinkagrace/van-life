import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";

//to get the "you must log in first message"
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

function Signup() {
  const { signup, error } = useSignup();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  const message = useLoaderData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    await signup(name, email, password);
    setStatus("idle");
  };
  return (
    <div className="login-container">
      <h1>Sign up for an account</h1>
      {message && <h3 className="red">{message}</h3>}
      {error && <h3 className="red">{error}</h3>}

      <Form className="login-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
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
          {status === "submitting" ? "Signing you up..." : "Sign Up"}
        </button>
        <div style={{ marginTop: "10px" }}>
          <small>
          Already have an account?...<Link to="/login">Login</Link>
          </small>
        </div>
      </Form>
    </div>
  );
}

export default Signup;
