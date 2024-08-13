import "./index.css";

export default function Modal({handleClose, show, game, winner, modalBackground}) {
const showHideClassName = show ? `modal-display-block` : `modal-display-none`;
console.log("modalBackground", modalBackground)
 return (
     <div className={showHideClassName}>
     <div className="modal-main" style={{backgroundImage: `url(${modalBackground})`, 
        backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}} >
         </div>
         {game && !winner ? "" : <button className="fightButton" onClick={handleClose}>FIGHT?</button>}
     </div>
 )   
}