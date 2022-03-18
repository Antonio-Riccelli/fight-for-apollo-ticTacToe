import {useState} from "react";
import "./index.css";

export default function Modal({handleClose, show, children}) {
const showHideClassName = show ? `modal-display-block` : `modal-display-none`;
const [background, setBackground] = useState("https://i.ibb.co/Fzypp9j/start.jpg");


 return (
     <div className={showHideClassName} onClick={handleClose}>
     <div className="modal-main" style={{backgroundImage: `url(${background})`, 
        backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}} onClick={handleClose}>
         </div>
     </div>
 )   
}