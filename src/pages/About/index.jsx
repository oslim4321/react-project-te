import { useGetCurrentUser } from "@/shared/hooks/useGetCurrentUser";
import { Link } from "react-router-dom";

const About = () => {
  const { currentUser } = useGetCurrentUser();
  return (
    <div>
      <h1>hello {currentUser?.firstName || "Guest"}</h1>
      <div className="text-4xl">THis is abou page</div>
      <Link to={"/"}>Go to Home section</Link>
    </div>
  );
};

export default About;
