import { Button } from "@/components/ui/button";
import { useGetCurrentUser } from "@/shared/hooks/useGetCurrentUser";
import { Link } from "react-router-dom";

const UserStatus = () => {
  const { currentUser, handleLogout } = useGetCurrentUser();

  if (currentUser?.email) {
    return (
      <div className="flex items-center gap-x-2">
        <p>Hello {currentUser?.firstName}</p>

        <Button
          onClick={handleLogout}
          className="hidden lg:inline-block py-2 px-6 bg-red-500 hover:bg-red-600 text-sm text-white font-bold rounded-xl transition duration-200"
        >
          Logout
        </Button>
      </div>
    );
  }
  return (
    <div>
      <Link
        to="/auth/login"
        className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
      >
        Sign In
      </Link>
      <Link
        to="/auth"
        className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
      >
        Sign up
      </Link>
    </div>
  );
};

export default UserStatus;
