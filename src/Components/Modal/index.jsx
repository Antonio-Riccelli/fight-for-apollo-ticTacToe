import {useState} from "react";
import "./index.css";

export default function Modal({handleClose, show, game, winner}) {
const showHideClassName = show ? `modal-display-block` : `modal-display-none`;
const [background, setBackground] = useState("https://i.ibb.co/TLzhT4v/Screenshot-2022-03-19-140916.jpg");


 return (
     <div className={showHideClassName}>
     <div className="modal-main" style={{backgroundImage: `url(${background})`, 
        backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}} >
         </div>
         {game && !winner ? "" : <button className="fightButton" onClick={handleClose}>FIGHT?</button>}
     </div>
 )   
}



/*
- If we're not playing yet, show initial modal;
- if we are playing and winner is stallone, show win modal
- if we are playing and winner is drago, show loss modal
*/