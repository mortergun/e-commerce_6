import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import './styles/RegisterPage.css'

const RegisterPage = () => {

  const { register, reset, handleSubmit } = useForm()
  const { createUser } = useAuth()
  const navigate = useNavigate()

  const submit = data => {
    createUser(data, navigate)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: ''
    })
  }

  return (
    <article>
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(submit)}>
          <div className="register-user-box">
            <input {...register('firstName', { required: true })} type="text" id="firstname" />
            <label htmlFor="firstname">First Name</label>
          </div>
          <div className="register-user-box">
            <input {...register('lastName', { required: true })} type="text" id="lastname" />
            <label htmlFor="lastname">Last Name</label>
          </div>
          <div className="register-user-box">
            <input {...register('email', { required: true })} type="email" id="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="register-user-box">
            <input {...register('password', { required: true })} type="password" id="password" />
            <label htmlFor="password">Password</label>
          </div>
          <div className="register-user-box">
            <input {...register('phone', { required: true })} type="text" id="phone" />
            <label htmlFor="phone">Phone</label>
          </div>
            <a>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Create User
            </a>
        </form>
      </div>
    </article>
  )
}

export default RegisterPage