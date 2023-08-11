import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./styles/RegisterPage.css";

const RegisterPage = () => {
  const { register, reset, handleSubmit } = useForm();
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const submit = (data) => {
    createUser(data, navigate);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  return (
    <div className="register-box">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div className="register-user-box">
          <input {...register("firstName")} type="text" id="firstname" />
          <label htmlFor="firstname">First Name</label>
        </div>
        <div className="register-user-box">
          <input {...register("lastName")} type="text" id="lastname" />
          <label htmlFor="lastname">Last Name</label>
        </div>
        <div className="register-user-box">
          <input {...register("email")} type="email" id="email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="register-user-box">
          <input {...register("password")} type="password" id="password" />
          <label htmlFor="password">Password</label>
        </div>
        <div className="register-user-box">
          <input {...register("phone")} type="text" id="phone" />
          <label htmlFor="phone">Phone</label>
        </div>
        <button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Create User
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
