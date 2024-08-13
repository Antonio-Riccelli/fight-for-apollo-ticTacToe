import styles from "./index.module.css";

export default function Square({face, setFace, id, boardArray, setBoardArray, turn, setTurn, clicked, handleSquareClick, background, faceSet}) {

    return (
        <div className={styles.square} onClick={handleSquareClick} style={{backgroundImage: `url(${background})`, 
        backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}} value={faceSet} id={id} clicked={clicked ? "true" : "false"} >
        </div>
    )
    }