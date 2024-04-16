import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="text-4xl">THis is abou page</div>
      <Link to={"/"}>Go to Home section</Link>
    </div>
  );
};

export default About;
