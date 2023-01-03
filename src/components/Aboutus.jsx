import React from "react";
import "../css/aboutus.css";
// import dottedLines from "../assets/dottedLines.svg";
// import dottedPhone from "../assets/dottedPhone.png";

import pinkCircleOne from "../assets/pinkCircle1.png";
import pinkCircleTwo from "../assets/pinkCircle2.png";
import pinkCircleThree from "../assets/pinkCircle3.png";

import banner from "../assets/banner.png";
import bannerMini from "../assets/bannerMini.png";

const Aboutus = () => {
  return (
    <>
      <div className="aboutus-container">
        {/* <img src={dottedPhone} alt="dottedPhone" /> */}

        <div className="pinkCircleOne">
          <p>
            امروزه، خریـــد گل و هدیـــه دادن آن، بــه امری مهم و رایج تبدیل
            شــده اســـت و از جـــملــه کارهایـــی بر شـمرده مــی شود که نشانه
            محبت به فرد دیگری است.
          </p>
          <img src={pinkCircleOne} alt="pinkCircleOne" />
        </div>

        <div className="pinkCircleTwo">
          <p>
            در همـین راســـــتا و گرایـــش روز افـــزون افــراد بـــه
            اسـتـفـــاده از ایـنترنــت، گـــلدونه اقــدام بــــه ارائـــــه
            خـدمات در زمــینه فروش اینترنتی گل کرده است. این فــروشگــاه خــدمات
            خــــود را از طریق وبسایت و اپلیکیشن خود ، ارائه می‌کند.
          </p>
          <img src={pinkCircleTwo} alt="pinkCircleTwo" />
        </div>

        <div className="pinkCircleThree">
          <p>
            <span>گلدونه</span> ، با گستره ای از محصـــولات متنــــوع و بــــا کیــفیـت
            بــــرای تمام مناســبت ها، سعی در جـلـب رضایــت کامل شما دارد. تخصـص
            ما ارسال گل های تازه با طراحی خاص و کیفیت بالا در کوتـاه ترین زمان
            می‌باشد.
          </p>
          <img src={pinkCircleThree} alt="pinkCircleThree" />
        </div>
      </div>
      <div className="banner">
        <img src={bannerMini} alt="bannerMini" />
        <img src={banner} alt="banner" />
      </div>
    </>
  );
};

export default Aboutus;
