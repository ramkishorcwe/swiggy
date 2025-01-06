import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center shadow-md bg-pink-100">
        <Link to={"/"} className="w-[64] h-[64] ml-10">
          <img src="/pxfuel.jpg" alt="..." />
        </Link>
        <div className="flex gap-4 max-w-fit items-center mr-10">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About us</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
