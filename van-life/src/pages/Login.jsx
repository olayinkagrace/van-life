import { useState } from "react";
import {useLogin} from '../hooks/useLogin'
import { Link, useLoaderData } from "react-router-dom";

//to get the "you must log in first message"
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}
 
function Login() {
  const { login, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  const message = useLoaderData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting")
    await login(email, password);
    setStatus("idle")  
   
  };
  return (
    <form className='login' onSubmit={handleSubmit}>
      <h3>Login</h3>
      {message && <h3 className='red'>{message}</h3>}
      {error && <h3 className='red'>{error}</h3>}
      <label>Email:</label>
      <input
        type='email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password:</label>
      <input
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button disabled={status ==="submitting"}>
        {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      <div>
        <Link to='/verifyemail'>
          <small>Forgot password?</small>
        </Link>
      </div>
    </form>
  );
}

export default Login;
