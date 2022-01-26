import React, { useContext, useEffect, useRef } from "react";
import "./nav.scss";
import { EcoTwoTone } from "@material-ui/icons";
function Nav({ setTriggerNavEl, setdisplayPop, setimage }) {
  // useEffect(()=>{
  //   console.log()
  // })

  const nav = useRef(null);
  const [borderEnabled, setBorderEnabled] = React.useState(false);
  const triggerNav = (e) => {
    [...nav.current.querySelectorAll(".nav_list_item")].forEach((item) => {
      item.style.borderBottom = "none";
    });
    setdisplayPop(false);
    e.target.style.borderBottom = "3px solid #fec303";
    if (e.target.innerText === "WE DO") {
      setTriggerNavEl(true);
      setimage("Tunnel");
    } else {
      setTriggerNavEl(false);
      setimage("");
    }
  };
  return (
    <nav ref={nav} className="home_screen_nav-wrapper">
      <ul className="nav_list_container">
        <li className="nav_list_item nav_logo">
          <div className="logo">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="logo_name_wrapper">
            <div className="company_name primary">ELITE</div>
            <div className="company_name">YOLGA</div>
            <div className="company_name">STROI</div>
          </div>
        </li>
        <li className="nav_list_item" onClick={triggerNav}>
          PROJECTS
        </li>
        <li className="nav_list_item" onClick={triggerNav}>
          WE DO
        </li>
        <li className="nav_list_item" onClick={triggerNav}>
          SOCIAL PROJECTS
        </li>
        {/* <li className="nav_list_item"> */}
        <div className="search_icon"></div>
        {/* </li> */}
        <li className="nav_list_item" onClick={triggerNav}>
          WHO WE ARE
        </li>
        <li className="nav_list_item" onClick={triggerNav}>
          CAREER
        </li>
        <li className="nav_list_item" onClick={triggerNav}>
          CONTACT
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
