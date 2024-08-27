import "./cards.css"
function Display({title,price,url}){
   
    return <div className="card">
        <img  className="cardimg" src={url}/>
        <p className="name">{title}</p>
        <hr/>
        <p className="price"> Price : ₹{price}</p>
    </div>
}
export  default Display;