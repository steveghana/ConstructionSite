import React, { useState } from "react";
import "./home.scss";
import Nav from "./Nav/Nav";
import Footer from "./FooterNav/Footer";
import WhatweDo from "./Wedo/WhatweDo";
import Popup from "./Popup/Popup";
import Content from "./Content/content";
import {
  Bridge,
  Stadium,
  Road,
  Tunnel,
  Building,
  Airports,
  RawMaterials,
  Hydro,
  Homepage,
} from "./ImageExport";

function Home() {
  const [triggerNavEl, setTriggerNavEl] = useState(false);
  const [displayPop, setdisplayPop] = useState(false);
  const [contentToshow, setcontentToshow] = useState({});
  const [image, setimage] = useState("");
  const setBgimage =
    image === "Tunnel"
      ? Tunnel
      : image === "Stadium"
      ? Stadium
      : image === "Road"
      ? Road
      : image === "Building"
      ? Building
      : image === "Airports"
      ? Airports
      : image === "RawMaterials"
      ? RawMaterials
      : image === "Hydro"
      ? Hydro
      : image === "Hydro"
      ? Bridge
      : Homepage;
  return (
    <div
      className="home_screen_container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${setBgimage})`,
      }}
    >
      <Nav
        setTriggerNavEl={setTriggerNavEl}
        setdisplayPop={setdisplayPop}
        setimage={setimage}
      />
      {!displayPop && !triggerNavEl ? (
        <Content />
      ) : !displayPop ? (
        <WhatweDo
          setdisplayPop={setdisplayPop}
          setcontentToshow={setcontentToshow}
          setimage={setimage}
        />
      ) : null}
      {contentToshow && displayPop && (
        <Popup
          contentToshow={contentToshow}
          setcontentToshow={setcontentToshow}
          setimage={setimage}
          setdisplayPop={setdisplayPop}
        />
      )}
      <Footer />
    </div>
  );
}
export default Home;
