import { Call, Clock, Location } from "iconsax-react";
import "../css/footer.css";
import instagram from "../assets/Instagram.png";

import telegram from "../assets/Telegram.png";
import pintrest from "../assets/pintrest.png";
import facebook from "../assets/Facebook.png";

import enamd from "../assets/enamd.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer footer1">
        <span>اطلاعات تماس</span>

        <ul>
          <li>
            <Clock color="#ffffff" />
            <p>شنبه - پنجشنبه: 08:30 - 19:30 ، جمعه : 08:30 - 17:00</p>
          </li>

          <li>
            <Location color="#ffffff" />
            <p>آدرس باغ : پاکدشت ، گلزار ، خیابان گلستان ، پلاک 107</p>
          </li>

          <li>
            <Call color="#ffffff" />
            <p>021-86046127 - 0903-4644222</p>
          </li>
        </ul>
      </div>

      <div className="footer footer2">
        <span>دسترسی سریع</span>

        <ul>
          <li>درباره ما</li>
          <li>سوالات متداول</li>
          <li>باشگاه مشتریان VIP</li>
          <li>همکاری با ما</li>
          <li>شرایط و قوانین</li>
        </ul>
      </div>

      <div className="footer footer3">
        <span>شبکه های اجتماعی</span>

        <ul>
          <li>
            <img src={instagram} alt="instagram" />
            <p>اینستاگرام</p>
          </li>

          <li>
            <img src={telegram} alt="telegram" />
            <p>تلگرام</p>
          </li>

          <li>
            <img src={pintrest} alt="pintrest" />
            <p>پینترست</p>
          </li>

          <li>
            <img src={facebook} alt="facebook" />
            <p>فیسبوک</p>
          </li>
        </ul>
      </div>

      <div className="footer footer4">
        <span>نمادهای اعتماد</span>
        <img src={enamd} alt="enamd" />
      </div>
    </div>
  );
};

export default Footer;
