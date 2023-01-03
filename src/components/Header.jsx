import React from "react";
import "../css/header.css";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

import bg from "../assets/bg.png";
import bg2 from "../assets/bg2.png";
import flowerBasket from "../assets/flowerBasket.png";

import cactus from "../assets/cactus.png";
import flowerTerarium from "../assets/flowerTerarium.png";
import flowerApartment from "../assets/flowerApartment.png";

import flowerHardfound from "../assets/flowerHardfound.png";
import flowerCup from "../assets/flowerCup.png";
import flowerBouquet from "../assets/flowerBouquet.png";

import flowerBox from "../assets/flowerBox.png";
import flowerStand from "../assets/flowerStand.png";
import flowerPlant from "../assets/flowerPlant.png";



const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <figure>
          <img src={bg} alt="bg" />
          <img src={bg2} alt="bg2" />
        </figure>

        <article>
          <p>
            <span>گلدونه</span> ، فروش و سفارش آنلاین انواع گل و گیاه
          </p>
          <p>
            سفارش آنلاین انواع دسته گل با بهترین و زیباترین گل‌های هر فصل؛ ارسال
            فوری درب منزل شما در شهر تهران
          </p>
          <button>ثبت سفارش</button>
        </article>
      </div>

      <section>
        <ArrowRight2 size="24" color="#C98572" />
        <div className="slider">
          <div>
            <span></span>
            <img src={flowerBasket} alt="flowerBasket" />
            <p>سبد گل</p>
          </div>

          <div>
            <span></span>
            <img src={cactus} alt="cactus" />
            <p>کاکتوس</p>
          </div>

          <div>
            <span></span>
            <img src={flowerTerarium} alt="flowerTerarium" />
            <p>تراریوم</p>
          </div>

          <div>
            <span></span>
            <img src={flowerApartment} alt="flowerApartment" />
            <p>گل آپارتمانی</p>
          </div>

          <div>
            <span></span>
            <img src={flowerHardfound} alt="flowerHardfound" />
            <p>گیاهان کمیاب</p>
          </div>

          <div>
            <span></span>
            <img src={flowerCup} alt="flowerCup" />
            <p>جام گل</p>
          </div>

          <div>
            <span></span>
            <img src={flowerBouquet} alt="flowerBouquet" />
            <p>دسته گل</p>
          </div>

          <div>
            <span></span>
            <img src={flowerBox} alt="flowerBox" />
            <p>جعبه گل</p>
          </div>

          <div>
            <span></span>
            <img src={flowerStand} alt="flowerStand" />
            <p>تاج گل</p>
          </div>

          <div>
            <span></span>
            <img src={flowerPlant} alt="flowerPlant" />
            <p>گیاهان زینتی</p>
          </div>
        </div>
        <ArrowLeft2 size="24" color="#C98572" />
      </section>

   
    </div>
  );
};

export default Header;
