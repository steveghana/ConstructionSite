import React from "react";
import Nav from "./Nav/Nav";
import ContentSlide from "./ContentSlide/ContentSlide";
// import "./Home.scss";
import Social from "./SocialIcons/Social";
function Home() {
  return (
    <div className="home_container">
      <Nav />
      <ContentSlide />
      <Social />
    </div>
  );
}

export default Home;
