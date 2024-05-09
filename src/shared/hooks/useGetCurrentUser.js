import { useEffect, useState } from "react";
import { UserRequest } from "../api/request";
import { useNavigate } from "react-router-dom";

export const useGetCurrentUser = () => {
  const [currentUser, setcurrentUser] = useState();
  const navigate = useNavigate();
  // const token = localStorage.getItem("token");

  const getCurrentUser = async () => {
    try {
      // const res = await axios.get(
      //   "http://localhost:4000/api/v1/auth/checkAuth",
      //   { headers: { Authorization: "Bearer " + token } }
      // );
      const res = await UserRequest().get("/auth/checkAuth");

      setcurrentUser(res?.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  function handleLogout() {
    localStorage.removeItem("token");
    setcurrentUser(null);
    navigate("/auth/login");
    // window.location.reload();
  }
  useEffect(() => {
    getCurrentUser();
  }, []);

  return {
    currentUser,
    handleLogout,
  };
};
