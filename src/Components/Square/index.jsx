import {useState} from "react";
import styles from "./index.module.css";

export default function Square({face, setFace, id, boardArray, setBoardArray}) {

const [clicked, setClicked] = useState(false);
const [background, setBackground] = useState("");
const [faceSet, setFaceSet] = useState("");


    const handleSquareClick = (e) => {
       const elementId = e.target.id
        if (clicked) {
            return
        }

        if (!face || face === "stallone") {
            setBackground("https://i.ibb.co/F8jDQKP/stallone.png");
            setFaceSet("stallone")
            setFace("drago")
            const newArray = boardArray.map((e, ind) => {
                if (String(ind) === String(elementId)) {
                    return "stallone"
                } else {
                    return e
                }
            }  )
            setBoardArray(newArray);
            console.log(boardArray);
           
        } else if (face === "drago") {
            setBackground("https://i.ibb.co/pXntp2K/drago.jpg");
            setFaceSet("drago")
            setFace("stallone")
            const newArray = boardArray.map((e, ind) => {
                if (String(ind) === String(elementId)) {
                    return "drago"
                } else {
                    return e
                }
            }  )
            setBoardArray(newArray);
            console.log(boardArray);
        }
        setClicked(true)
    }
       
    // style={{backgroundImage: `url(${<Stallone />})`}
    return (
        <div className={styles.square} onClick={handleSquareClick} style={{backgroundImage: `url(${background})`, 
        backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}} value={faceSet} id={id}>
            {id}
            <p><b>{faceSet}</b></p>
        </div>
    )
    }