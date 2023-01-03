import { useEffect } from "react";
import "../css/textSec.css";
import DarkGreen from "../assets/DarkGreen.svg";

const TextSec = () => {
  // useEffect(() => {
  // fetch("https://servernode-794y.vercel.app/63b2842c88958bb44edac1fc",{
  //   method: "DELETE",
  //    })

  // fetch("https://servernode-794y.vercel.app/", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     _id: '123456789',
  //     name: 'mfghir',
  //     price: 200,
  //     isPublish: false,
  //     __v: 0
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })

  // fetch(`https://servernode-794y.vercel.app/63b173713cff69b52d5e730e`, {
  //   method: "PUT",
  //   body: JSON.stringify({price: 1000}),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, []);

  // https://servernode-794y.vercel.app/
  // https://www.codingdeft.com/posts/react-fetch-get-post-put-delete/
  //   https://stackoverflow.com/questions/40284338/javascript-fetch-delete-and-put-requests

  return (
    <div className="textSec-container">
      <div className="title">
        <h3>
          خاص بودن تنها یک ویژگی در گلدونه نیست، نتیجه یک انتخاب{" "}
          <span>آگاهانه</span> است…
        </h3>

        <span className="cir1"></span>
        <span className="cir2"></span>
      </div>

      <div className="text text1">
        <p>
          در گلدونه با استفاده از گل های تازه و با کیفیت برای شــما انواع دستــه
          گـل، سـبد گل، تـاج گــل، بــاکــس گـل های طبیعـی و بســته هـای مختلفـی
          را با گل آماده می کنیم که می توانید در مراسـم هـای مختـلف و برای
          هدیــه دادن به عزیزانتان استفاده کنید.
        </p>

        <div className="sqrs">
          <img src={DarkGreen} alt="DarkGreen" />
          <img src={DarkGreen} alt="DarkGreen" />
          <span className="sqr1"></span>
          <span className="sqr2"></span>
        </div>
      </div>

      <div className="text text2">
        <p>
          خریــد گل ایــن روزهــا تـب تـنـد و هـمه گیری دارد. غـــرق شـــدن در
          دنـیای کار و زندگی شــهری باعــث شده تا افراد وقت کمتری را با اطرافیان
          و عزیزانشان بگذرانند امــا بــا رونـق کســب کــارهــای اینترنتی می
          تـوان در مناسبـت هایی مـثل روز مادر، روز پدر، ولنتاین، تولد، شب یـلدا،
          ســالگرد ازدواج و … بـا ارسـال گـل به آنها تبریک بگویید.
        </p>

        <div className="sqrs">
          <img src={DarkGreen} alt="DarkGreen" />
          <img src={DarkGreen} alt="DarkGreen" />
          <span className="sqr1"></span>
          <span className="sqr2"></span>
        </div>
      </div>
    </div>
  );
};

export default TextSec;
