import "./about.css";
import img from "./shop2.jpg"

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p className="heading">Our Location:</p>
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119092.83910424224!2d78.94320723737638!3d21.126466878575624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0e56abceac9%3A0x74f9e348ae0ab111!2sCafé%20Coffee%20Day!5e0!3m2!1sen!2sin!4v1724865984949!5m2!1sen!2sin"
        title="Googlemap"
      ></iframe>
      <img src={img} className="shopimg"></img>
    </div>
  );
}

export default About;
