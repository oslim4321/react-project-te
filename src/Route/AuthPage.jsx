import { Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <div>
      <h1>THis is the navbar for Auth</h1>
      <Outlet />
    </div>
  );
};

export default AuthPage;
