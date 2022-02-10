import React from "react";
import {
  WhatsApp,
  Facebook,
  Twitter,
  Instagram,
  Mail,
} from "@material-ui/icons";
function Social() {
  return (
    <div style={{ color: "#073a52" }} className="social_icons">
      <Twitter />
      <Facebook />
      <Instagram />
      <WhatsApp />
      <Mail />
    </div>
  );
}
export default Social;
