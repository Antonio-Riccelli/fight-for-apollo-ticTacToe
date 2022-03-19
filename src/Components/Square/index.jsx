import {useState} from "react";
import styles from "./index.module.css";

export default function Square({face, setFace, id, boardArray, setBoardArray, turn, setTurn, clicked, handleSquareClick, background, faceSet}) {

// const [clicked, setClicked] = useState(false); // indicates whether square has been clicked
// const [background, setBackground] = useState(""); // Stores background face/image link
// const [faceSet, setFaceSet] = useState(""); // Indicates what picture we should fill the square with


    // const handleSquareClick = (e) => {
    //    const elementId = e.target.id
    //     if (clicked) {
    //         return
    //     }

    //     if (!face || face === "stallone") {
    //         setBackground("https://i.ibb.co/F8jDQKP/stallone.png");
    //         setFaceSet("stallone")
    //         setFace("drago") // TELLS THE APP WHAT FACE WE
    //         const newArray = boardArray.map((e, ind) => {
    //             if (String(ind) === String(elementId)) {
    //                 return "stallone"
    //             } else {
    //                 return e
    //             }
    //         }  )
    //         setBoardArray(newArray);
    //         console.log(boardArray);
    //         setTurn("computer")
           
    //     } else if (face === "drago") {
    //         setBackground("https://i.ibb.co/pXntp2K/drago.jpg");
    //         setFaceSet("drago")
    //         setFace("stallone")
    //         const newArray = boardArray.map((e, ind) => {
    //             if (String(ind) === String(elementId)) {
    //                 return "drago"
    //             } else {
    //                 return e
    //             }
    //         }  )
    //         setBoardArray(newArray);
    //         console.log(boardArray);
    //         setTurn("player")
    //     }
    //     setClicked(true)
    // }
       
   
    return (
        <div className={styles.square} onClick={handleSquareClick} style={{backgroundImage: `url(${background})`, 
        backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}} value={faceSet} id={id} clicked={clicked ? "true" : "false"} >
        </div>
    )
    }