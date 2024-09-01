import "./reviewcards.css"
import img3 from "./3-stars.png" 
import img4 from "./4stars.png"
import img5 from "./five-stars.png"
const reviewCard = [
    { name: "Radhika P", stars: 4, text: "Good quality of services" },
    { name: "John D", stars: 5, text: "Nice and good quality furniture" },
    { name: "Sarah W", stars: 3, text: "Beautiful designs" },
    { name: "Maya D", stars: 4, text: "Comfortable and affordable decor" }
  ];
  
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
        {reviewCard.map((review, index) => (
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