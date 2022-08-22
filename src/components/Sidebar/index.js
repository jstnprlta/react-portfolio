import { Link } from 'react-router-dom'
import './index.scss'
import logo from '../../assets/img/Horse.png'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={logo} alt="horse" />
    </Link>
  </div>
)

export default Sidebar
