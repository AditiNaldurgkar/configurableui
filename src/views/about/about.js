import "./about.css";
import img from "./shop2.jpg"
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ReviewList from "../../components/reviewcards/reviewcards";
import { MAPSRC } from "../../config/data";
function About() {
  return (
    <div className="abt-main">
      <Header/>
      <h1 className="title">About Us</h1>
      <p className="heading">Our Location:</p>
      <iframe
        className="map-iframe"
        title="Googlemap"
        src={MAPSRC}
      ></iframe>
      <img src={img} className="shopimg"></img>
      <ReviewList/>
      <b className="lastline">Do visit our store !!!</b>
      <Footer/>
    </div>
  );
}

export default About;
