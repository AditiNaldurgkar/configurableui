import "./footer.css"
import call from "./call.png";
import mail from "./new.png"
function Footer(){
return <div className="footer">
    © [YEAR] [ COMPANY]. All rights reserved.<br/>
    
    <a href="mailto:hometown@gmail.com"> <img src={mail}/> </a>
    
    <a href="tel:+917745008817"><img src={call}/></a>

</div>
}
export default Footer;