import {useState} from "react";
import styles from "./index.module.css";
import Stallone from "../../images/stallone.png";
import Drago from "../../images/drago.jpg";

export default function Square({face, setFace}) {
const [state, setState] = useState("");
const [clicked, setClicked] = useState(false);
const [background, setBackground] = useState("");


    const handleSquareClick = (e) => {
        if (clicked) {
            return
        }

        if (!face || face === "stallone") {
            setBackground("https://i.ibb.co/F8jDQKP/stallone.png");
            setFace("drago")
            
           
        } else if (face === "drago") {
            setBackground("https://i.ibb.co/pXntp2K/drago.jpg");
            setFace("stallone")
        }
        setClicked(true)
    }
       
    // style={{backgroundImage: `url(${<Stallone />})`}
    return (
        <div className={styles.square} onClick={handleSquareClick} style={{backgroundImage: `url(${background})`, 
        backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}}>
     
        </div>
    )
    }