import "./about.css";
import img from "./shop2.jpg"
import Header from "../../components/header/header";


function About() {
  return (
    <div className="abt-main">
      <Header/>
      <h1 className="title">About Us</h1>
      <p className="heading">Our Location:</p>
      <iframe
        className="map-iframe"
        title="Googlemap"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14885.430003395652!2d79.0788107!3d21.1381665!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c09182878f5b%3A0xa61e7391433285d8!2sHomeTown!5e0!3m2!1sen!2sin!4v1724867560475!5m2!1sen!2sin" 
      ></iframe>
      <img src={img} className="shopimg"></img>
    </div>
  );
}

export default About;
