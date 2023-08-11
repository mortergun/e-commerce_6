import { Link } from "react-router-dom"
import './styles/Header.css'

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title"><Link to='/'>e-commerce</Link></h1>
      <nav className="header-nav">
        <ul className="header__list">
          <li className="header__item"><Link to='/login'>Login</Link></li>
          <li className="header__item"><Link to='/register'>Register</Link></li>
          <li className="header__item"><Link to='/cart'>Cart</Link></li>
          <li className="header__item"><Link to='/purchases'>Purchases</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header