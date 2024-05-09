import { useGetCurrentUser } from "@/shared/hooks/useGetCurrentUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { currentUser } = useGetCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser?.email) {
      navigate("/auth/login");
    }
  }, [currentUser]);

  // if (!currentUser?.email) {
  //   return (
  //     <div>
  //       pls login
  //       <button>Go to login</button>
  //     </div>
  //   );
  // }
  return (
    <div>hello {currentUser?.firstName + " " + currentUser?.lastName}</div>
  );
};

export default Dashboard;
