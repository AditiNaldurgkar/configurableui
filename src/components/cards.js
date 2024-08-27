import "./cards.css"
function Display({title,price,url}){
   
    return <div className="card">
        <img  className="cardimg" src={url}/>
        <p>{title}</p>
        <p>{price}</p>
    </div>
}
export  default Display;