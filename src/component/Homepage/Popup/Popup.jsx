import React, { useRef } from "react";
import { memo } from "react";
import Spinner from "../spinner/Spinner";
import gsap from "gsap";
import { ourwork } from "../data";
import "./pop.scss";
import { useState } from "react";
const Popup = memo(
  ({ contentToshow, setimage, setcontentToshow, setdisplayPop }) => {
    const { header, num } = contentToshow;
    const popcontainer = useRef(null);
    const [isloading, setisloading] = useState(true);
    React.useEffect(() => {
      setTimeout(() => {
        setisloading(false);
      }, 1500);
      const timeline = gsap.timeline();
      timeline
        .from(
          [".pop_description_content_header", ".pop_description_content_text"],
          {
            y: "-20px",
            duration: 1,
            opacity: 0,
            ease: "power4.in",
            stagger: 0.4,
          }
        )
        .from(".pop_num", {
          y: "-35",
          stagger: 0.1,
          opacity: 0,
          duration: 0.5,
        })
        .from(".pop_description_num", {
          x: "-35",
          opacity: 0,
          duration: 1,
        });
    });
    React.useEffect(() => {
      if (isloading) return;
      let elwithBorder = [
        ...popcontainer.current.querySelectorAll(".pop_num"),
      ].find((el) => el.innerText === num);
      elwithBorder.style.borderBottom = "2px solid #fec303";
      elwithBorder.style.color = "#fec303";
    }, [header, num, isloading]);

    const contentToShow = (e) => {
      [...popcontainer.current.querySelectorAll(".pop_num")].forEach((el) => {
        el.style.borderBottom = "none";
        el.style.color = "white";
      });
      const { desc, num, imgName } = ourwork.find(
        (item) => item.num === e.target.innerText
      );
      setimage(imgName);
      setcontentToshow({ header: desc, num });
      setdisplayPop(true);
    };
    if (isloading) return <Spinner />;
    return (
      <div ref={popcontainer} className="pop_container">
        <div className="pop_description">
          <div className="pop_description_num">{num}</div>
          <div className="custom_scroll_bar">
            <div className="scrollbar_thumb"></div>
          </div>
          <div className="pop_description_content flipped">
            <div className="pop_description_content_header">{header}</div>

            <div className="pop_description_content_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              aspernatur tempora amet illum ipsa id facilis fugit praesentium
              error voluptatem quidem deleniti consectetur quas doloribus
              laborum impedit necessitatibus architecto optio commodi quam
              ratione, eos quod? <br /> Itaque pariatur voluptas, corporis sint
              incidunt, quas voluptatem odio hic culpa aut cupiditate vero.
              Expedita, accusantium? Rem nam, aperiam corporis corrupti quisquam
              repellat vitae non incidunt obcaecati! Officia, laboriosam!
              Repudiandae enim maxime ad autem sapiente voluptate minus commodi
              provident facilis asperiores recusandae quae optio iure ipsum
              molestiae perferendis delectus ut consequuntur magnam facere,
              cumque eum vitae qui! Blanditiis id ad laborum. Nihil officia
              molestias cupiditate!
            </div>
            <div className="pop_description_content_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              aspernatur tempora amet illum ipsa id facilis fugit praesentium
              error voluptatem quidem deleniti consectetur quas doloribus
              laborum impedit necessitatibus architecto optio commodi quam
              ratione, eos quod? <br /> Itaque pariatur voluptas, corporis sint
              incidunt, quas voluptatem odio hic culpa aut cupiditate vero.
              Expedita, accusantium? Rem nam, aperiam corporis corrupti quisquam
              repellat vitae non incidunt obcaecati! Officia, laboriosam!
              Repudiandae enim maxime ad autem sapiente voluptate minus commodi
              provident facilis asperiores recusandae quae optio iure ipsum
              molestiae perferendis delectus ut consequuntur magnam facere,
              cumque eum vitae qui! Blanditiis id ad laborum. Nihil officia
              molestias cupiditate!
            </div>
          </div>
        </div>
        <div className="pop_nums">
          <div onClick={contentToShow} className="pop_num">
            01
          </div>
          <div onClick={contentToShow} className="pop_num">
            02
          </div>
          <div onClick={contentToShow} className="pop_num">
            03
          </div>
          <div onClick={contentToShow} className="pop_num">
            04
          </div>
          <div onClick={contentToShow} className="pop_num">
            05
          </div>
          <div onClick={contentToShow} className="pop_num">
            06
          </div>
          <div onClick={contentToShow} className="pop_num">
            07
          </div>
          <div onClick={contentToShow} className="pop_num">
            08
          </div>
          <div onClick={contentToShow} className="pop_num">
            09
          </div>
        </div>
      </div>
    );
  }
);
export default Popup;
