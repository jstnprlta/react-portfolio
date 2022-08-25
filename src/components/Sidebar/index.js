import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logo from '../../assets/img/spartan-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={logo} alt="spartan" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" className="" to="/">
        <FontAwesomeIcon icon={faHome} color="#" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/justin-peralta-a80840173?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEgar0wL2S8mnvd3u9veHZg%3D%3D"
        >
          <FontAwesomeIcon icon={faLinkedin} color="maroon" />
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/jstnprlta">
          <FontAwesomeIcon icon={faGithub} color="maroon" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
