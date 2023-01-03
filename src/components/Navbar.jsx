import { HambergerMenu } from "iconsax-react";
import logo from "../assets/logo.svg";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="phone-menu">
        <img src={logo} alt="logo" />
        <HambergerMenu size="24" />
      </div>

      <div className="menu">
        <img src={logo} alt="logo" />

        <ul>
          <li>خانه</li>
          <li>محصولات</li>
          <li>مناسبت ها</li>
          <li>پیگیری خرید</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>

        <div className="login">
          <button>ورود</button>
          <button>ثبت نام</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
