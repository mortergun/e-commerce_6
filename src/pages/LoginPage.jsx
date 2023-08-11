import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import './styles/LoginPage.css'

const LoginPage = () => {

  const { register, reset, handleSubmit } = useForm()
  const { loginUser } = useAuth()
  const navigate = useNavigate()
  
  const submit = data => {
    loginUser(data, navigate)
    reset({
      email: '',
      password: ''
    })
  }

  return (
    <article>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(submit)}>
          <div className="user-box">
            <input {...register('email', { required: true })} type="email" id="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="user-box">
            <input {...register('password', { required: true })} type="password" id="password" />
            <label htmlFor="password">Password</label>
          </div>
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </button>
        </form>
      </div>
    </article>
  )
}

export default LoginPage