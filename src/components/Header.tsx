import React from "react"
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { GiStairsGoal } from "react-icons/gi"
import { Link } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../app/hooks"
import { logout, reset } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import Auth from "./Auth"

const Header: React.FC = () => {
  return (
    <header>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <Link className="btn btn-primary text-xl" to="/">
            GoalSetter <GiStairsGoal />
          </Link>
        </div>
        <div className="navbar-end">
          <Auth />
        </div>
      </div>
    </header>
  )
}

export default Header
