import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { useEffect } from "react";

const useLogin = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
};

export default useLogin;
