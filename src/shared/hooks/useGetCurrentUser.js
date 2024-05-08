import axios from "axios";
import { useEffect, useState } from "react";

export const useGetCurrentUser = () => {
  const [currentUser, setcurrentUser] = useState();

  const token = localStorage.getItem("token");

  const getCurrentUser = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/v1/auth/checkAuth",
        { headers: { Authorization: "Bearer " + token } }
      );
      setcurrentUser(res?.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return {
    currentUser,
  };
};
