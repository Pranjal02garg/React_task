import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return <AuthForm onSubmit={handleRegister} isRegister={true} />;
}