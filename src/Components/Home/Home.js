import React from "react";
import landingimg1 from "../../assets/assets/images/landing-image-1.png";
import apple_app from "../../assets/assets/images/apple-store.png";
import google_app from "../../assets/assets/images/google-play.png";
import facebook from "../../assets/assets/images/facebook.png";
import twitter from "../../assets/assets/images/twitter.png";
import instagram from "../../assets/assets/images/instagram.png";
import tiktok from "../../assets/assets/images/tiktok.png";
import youtube from "../../assets/assets/images/youtube.png";
import landingimg2 from "../../assets/assets/images/landing-image-2.png";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="section1">
        <div className="text-style">
          <h4>Coming soon</h4>
          <h1>Bringing </h1>
          <h1> Muslims Together</h1>
          <div>
            <a href="/" target={"_blank"}>
              <img src={apple_app} alt="/" />
            </a>
            <a href="/" target={"_blank"}>
              <img src={google_app} alt="/" />
            </a>
          </div>
        </div>
        <div className="landing-img">
          <img src={landingimg1} alt="/" />
        </div>
      </div>
      <div className="social-container">
        <a href="/" target={"_blank"}>
          <img src={facebook} alt="facebook" />
        </a>
        <a href="/" target={"_blank"}>
          <img src={twitter} alt="facebook" />
        </a>
        <a href="/" target={"_blank"}>
          <img src={instagram} alt="facebook" />
        </a>
        <a href="/" target={"_blank"}>
          <img src={tiktok} alt="facebook" />
        </a>
        <a href="/" target={"_blank"}>
          <img src={youtube} alt="facebook" />
        </a>
      </div>

      <div className="section1">
        <div className="landing-img2">
          <img src={landingimg2} alt="/" />
        </div>
        <div className="text-style2">
          <h4>Coming soon</h4>
          <h1>Got Notified </h1>
          <h1> When We Launch</h1>
          <div className="home_notify_form">
            <input type="text"></input>
            <button> Notify Me</button>
          </div>
          <span className="home_spam-msg">*Don't Worry, We won't spam you</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
