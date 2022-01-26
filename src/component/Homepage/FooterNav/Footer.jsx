import React from "react";
import { ArrowDropDown, Twitter } from "@material-ui/icons";
import "./footer.scss";
function Footer() {
  return (
    <div className="footer_nav">
      <div className="footer_nav_date_selector">
        <p>2015</p>
        <ArrowDropDown />
      </div>
      <div className="footer_nav_social-icons">
        <div>g</div>
        <Twitter />
        <div>f</div>
        <div className="wk">
          W <span>K</span>
        </div>
      </div>
      <div className="company_name">
        RU <p>EN</p>
      </div>
      <div className="footer_nav_list">ENGINEERING FUTURE</div>
      <div className="footer_nav_list">FOR INVESTORS</div>
    </div>
  );
}
export default Footer;
