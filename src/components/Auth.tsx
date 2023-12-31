import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout, reset } from "../features/auth/authSlice";

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const onLogout: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <ul className="menu menu-horizontal px-1">
      {user ? (
        <>
          <li>
            <button onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        </>
      ) : (
        <>
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
        </>
      )}
    </ul>
  );
};

export default Auth;
