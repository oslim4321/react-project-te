import Header from "@/myComponents/header";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default HomePage;
