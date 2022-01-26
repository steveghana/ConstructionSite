import React from "react";
import gsap from "gsap";
import { ExpandMore, ChevronRight } from "@material-ui/icons";
import "./content.scss";
import Spinner from "../spinner/Spinner";
import { useEffect, useState } from "react";
function Content() {
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisloading(false);
    }, 1500);
    let timeline = gsap.timeline();
    timeline
      .from(".home_content_box_descrip", {
        opacity: 0,
        duration: 0.7,
        x: "100%",
        stagger: 0.2,
        ease: "power3.in",
        delay: 1,
      })
      .from(".home_content_box_yellow_banner", {
        x: "-4%",
        width: "0vw",
        duration: 0.5,
        ease: "power3.in",
        opacity: 0,
      })
      .to(".home_content_box_yellow_banner", {
        width: "20vw",
        // duration: 0.5,
        // ease: "power3.in",
      })
      .from(
        ".home_content_bg-reflect",
        {
          x: "-20%",
          stagger: 0.2,
          duration: 0.5,
          ease: "power3.in",
          opacity: 0,
        }
        // "+=1"
      )
      .from([".num, .banner_text", ".date", ".client"], {
        y: "-20%",
        ease: "power3.in",
        duration: 0.7,
        opacity: 0,
        stagger: 0.2,
      })
      .from(".white_bg", {
        x: "20px",
        duration: 1,
        ease: "power3.in",
        opacity: 0,
      });
  });
  if (isloading) return <Spinner />;
  return (
    <div className="home_content">
      <div className="home_content_bg-reflect"></div>
      <div className="home_content_box">
        <div className="home_content_box_left-vert-line"></div>
        <div className="home_content_box_descrip">
          <div className="home_content_box_descrip_number">02</div>
          <div className="home_content_box_descrip_header">
            Human <br />
            Bridge
          </div>
          <div className="home_content_box_descrip_about_pr">
            <ExpandMore fontSize="large" />
            About Project
          </div>
        </div>
        <div className="home_content_box_date-client">
          <div className="date">2014-2015</div>
          <div className="client">
            <div className="client_label">Client</div>
            <div className="client_name">Russia Railways (RUD)</div>
          </div>
        </div>
        <div className="home_content_box_yellow_banner">
          <div className="num">03</div>
          <div className="banner_text">
            <div>
              Concert <br /> Hall
            </div>
            <ChevronRight fontSize="large" />
          </div>
        </div>
      </div>
      <div className="white_bg"></div>
    </div>
  );
}

export default Content;
