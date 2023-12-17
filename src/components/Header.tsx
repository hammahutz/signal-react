import React from "react"
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <Link className="btn btn-primary text-xl" to="/">
            GoalSetter
          </Link>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
