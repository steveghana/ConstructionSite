import React, { useState, useEffect } from "react";
import { TrendingFlat, ChevronRight } from "@material-ui/icons";
import Rebook from "./NMD_R1_Shoes_Red_FV9017_01_standardgfff.png";
import gsap from "gsap";
import Sabolo from "./NMD_R1_V2_Shoes_Yellow_H02654_01_standardbvb.png";
import Puma from "./Swift_Run_X_Shoes_Pink_FY2148_01_standardhgg.png";
import { productData } from "./dummyData";
function ContentSlide() {
  const [sliderData, setSliderData] = useState(productData);
  const [counter, setcounter] = useState(0);
  useEffect(() => {
    setSliderData(productData[counter]);
    const tracker = document.querySelector(".tracker");
    // const timeline = gsap.timeline();
    gsap.to(".dynamic_img", {
      delay: ".5",
      opacity: 1,
      rotate: 160,
      ease: "circ",
      width: "800px",
      height: "800px",
      duration: 1,
      // yoyoEase: true,
    });
    gsap.to(".product_img_back", {
      delay: ".5",
      opacity: 1,
      scaleX: "1",
      scaleY: "1",
      duration: 1,
    });
    // gsap.to(
    //   [".slide_header", ".slide_description", ".slide_btn", ".product_name"],
    //   {
    //     delay: ".5",
    //     opacity: 1,
    //     duration: 1,
    //   }
    // );
  }, [counter]);
  const clickedBtn = () => {
    // const timeline = gsap.timeline({ defaults: { duration: 1 } });
    gsap.from(".slide_header", {
      delay: ".5",
      y: "-50%",
      opacity: 0,
      duration: 1,
    });
    gsap.from(".slide_description", {
      delay: ".5",
      opacity: 0,
      x: "-50%",
      duration: 1,
    });
    gsap.from(".slide_btn", {
      delay: ".5",
      opacity: 0,
      y: "50%",
      duration: 1,
    });
    gsap.from(".product_name", {
      delay: ".5",
      opacity: 0,
      duration: 1,
    });
    gsap.from(".dynamic_img", {
      delay: ".5",
      duration: 1,
      opacity: 0,
      rotate: 400,
      ease: "elastic",
      width: "0px",
      height: "0px",
    });
    gsap.from(".product_img_back", {
      delay: ".5",
      opacity: 0,
      scaleX: "0",
      scaleY: "0",
      duration: 1,
    });
    if (counter === 2) {
      setcounter(0);
      return;
    }
    console.log(counter);
    setcounter(counter + 1);
  };
  return (
    <div className="contentSlide_wrapper">
      <div className="content_container">
        <div className="slide_tracker">
          <div className="tracker"></div>
        </div>
        <div className="slide_content">
          <div className="slide_header">
            {counter === 2 ? sliderData.sub : sliderData.header}
          </div>
          <div className="slide_description">
            {counter === 2 ? sliderData.header : sliderData.sub}
          </div>
          <div className="slide_btn">
            <span>Shop now</span>
            <TrendingFlat fontSize="large" />
          </div>
        </div>
        <div className="product_image_container">
          <div
            onClick={clickedBtn}
            style={{ zIndex: "59" }}
            className="slider_btn"
          >
            <ChevronRight fontSize="large" />
          </div>
          <div className="product_name">{sliderData.name}</div>
          <div className="product_img">
            <div className="product_img_back"></div>
            <img className="dynamic_img" src={Rebook} alt="Shoe" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContentSlide;
