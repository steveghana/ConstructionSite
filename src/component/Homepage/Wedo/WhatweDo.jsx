import React from "react";
import gsap from "gsap";
import Spinner from "../spinner/Spinner";
import { ourwork } from "../data";
import "./whatwedo.scss";
function WhatweDo({ setdisplayPop, setcontentToshow, setimage }) {
  const [isloading, setisloading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setisloading(false);
    }, 1500);
    const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
    timeline
      .from([".date", ".whatwedo_header", ".header_desc"], {
        x: "-60%",
        ease: "power2.in",
        stagger: 0.4,
        opacity: 0,
      })
      .from(
        ".whatwedo_descrip_label",
        {
          y: "-35",
          stagger: 0.1,
          opacity: 0,
        }
        // "+=1"
      );
  });

  const contentToShow = (e) => {
    const { desc, num, imgName } = ourwork.find(
      (item) => item.desc === e.target.innerText
    );
    setimage(imgName);
    setcontentToshow({ header: desc, num });
    setdisplayPop(true);
  };
  if (isloading) return <Spinner />;
  return (
    <div className="whatwedo_container">
      <div className="whatwedo_descrip">
        {ourwork.map(({ desc, num }, i) => (
          <div
            className="whatwedo_descrip_label"
            key={i}
            onClick={contentToShow}
          >
            <div className="label">{num}</div>
            <div className="whatwedo_descr">{desc}</div>
          </div>
        ))}
      </div>
      <div className="whatwedo_header-date">
        <div className="date">since 2010</div>
        <div className="whatwedo_header">
          What <br /> We Do
        </div>
        <div className="header_desc">All of our works</div>
      </div>
    </div>
  );
}

export default WhatweDo;
