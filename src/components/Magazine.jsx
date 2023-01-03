import "../css/magazine.css";
import banner2Desk from "../assets/banner2Desk.png"
import banner2Phone from "../assets/banner2Phone.png"

import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";

import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";

const Magazine = () => {
  return (
    <>
      <div className="magazine-container">
        <h3>مجله گلدونه</h3>

        <div className="cards">
          <div className="card">
            <img src={card1} alt="card1" />
            <p>روش های آبیاری گیاهان</p>
          </div>

          <div className="card">
            <img src={card2} alt="card2" />
            <p>گیاهان مناسب برای حیوانات خانگی</p>
          </div>

          <div className="card">
            <img src={card3} alt="card3" />
            <p>بهترین درخت میوه برای کاشت در حیاط</p>
          </div>

          <div className="card">
            <img src={card4} alt="card4" />
            <p>معرفی گیاه آلیسوم شیرین</p>
          </div>

          <div className="card">
            <img src={card5} alt="card5" />
            <p>معرفی گیاهان آپارتمانی بزرگ</p>
          </div>

          <div className="card">
            <img src={card6} alt="card6" />
            <p>تقویت گیاهان با پوست تخم مرغ</p>
          </div>
        </div>
      </div>

      <div className="banner">
        <img src={banner2Phone} alt="banner2Phone" />
        <img src={banner2Desk} alt="banner2Desk" />
      </div>
    </>
  );
};

export default Magazine;
