import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth} from "@/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import "./Reset.css";
function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <div className="reset bg-[url('/img/GDSC.png')] bg-cover bg-center">
      <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" />
      <div className="container relative flex justify-center">
      <div className="reset__container">
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className="reset__btn"
          onClick={() => sendPasswordResetEmail(email)}
        >
          Send password reset email
        </button>
        <div>
          Don't have an account? <Link to="/sign-up">Register</Link> now.
        </div>
      </div>
      </div>
    </div>
  );
}
export default Reset;