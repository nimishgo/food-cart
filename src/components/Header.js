import { LOGO_URL } from "../constants";
import { CiShoppingCart } from "react-icons/ci";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userStore";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const { userName } = useContext(UserContext);
  const [log, setLog] = useState("log-in");
  const check = useOnlineStatus();
  return (
    <div className="flex justify-between px-8 items-center bg-[#eed9c4]">
      <div className="logo_name">
        <img
          src={LOGO_URL}
          alt=""
          srcSet=""
          className="w-36 h-32 rounded-full p-4 object-cover mix-blend-multiply"
        />
      </div>
      <ul className="flex justify-center items-center text-2xl space-x-4">
        <li>
          <Link to="/" className="link_hover">
            Home
          </Link>
        </li>
        <li>
          <Link to="/grocery" className="link_hover">
            Grocery
          </Link>
        </li>
        <li>
          <Link to="/about" className="link_hover">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link_hover">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/cart" className="link_hover">
            <CiShoppingCart /> Cart - {cartItems.length}
          </Link>
        </li>
        <li className="link_hover">{check ? "✅ online" : "❎ offline"}</li>
        <li className="flex justify-center items-center">
          <button
            onClick={() => {
              if (log == "log-in") setLog("log-out");
              else {
                setLog("log-in");
              }
            }}
            className="bg-red-500 w-24 h-8 text-white rounded-lg font-extrabold"
          >
            {log}
          </button>
        </li>
        <li>{userName}</li>
      </ul>
    </div>
  );
};

export default Header;
