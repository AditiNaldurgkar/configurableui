import "./reviewcards.css"
import img3 from "./3-stars.png" 
import img4 from "./4stars.png"
import img5 from "./five-stars.png"
import { REVIEWCARD } from "../../config/data"
  
  function Review({ name, stars, text }) {
    let imgSrc;
    switch (stars) {
      case 3:
        imgSrc = img3; 
        break;
      case 4:
        imgSrc = img4; 
        break;
      case 5:
        imgSrc = img5; 
        break;
    }
  
    return (
      <div className="review-card">
        <img src={imgSrc} alt={`${stars} stars`}  className="rimg"/>
        <div className="name">Name: {name}</div>
        <div className="text">{text}</div>
      </div>
    );
  }
  
  function ReviewList() {
    return (
      <div className="rcardconainer">
        {REVIEWCARD.map((review, index) => (
          <Review 
            stars={review.stars}
            name={review.name}
            text={review.text}
          />
        ))}
      </div>
    );
  }
  export default ReviewList;