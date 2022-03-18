import {useState, useEffect} from "react";
import styles from  "./index.module.css";
import Square from "../Square";
import Modal from "../Modal/index.jsx"


export default function Board(){
    const [game, setGame] = useState("off");
    const [face, setFace] = useState("");
    const [boardArray, setBoardArray] = useState([0,1,2,3,4,5,6,7,8]);
    const [winner, setWinner] = useState("");
    const [show, setShow] = useState(true);

    const showModal = () => {
        setShow(true);
        console.log(show)
      }
    
      const hideModal = () => {
        setShow(false);
        console.log(show)
      }
    

    const determineWinner = () => {
        // Squares 0 - 1 - 2 result 
        if (
            (boardArray[0] === "stallone" && boardArray[1] === "stallone" && boardArray[2] === "stallone") ||
            (boardArray[0] === "drago" && boardArray[1] === "drago" && boardArray[2] === "drago")
            ) {
                console.log(`${boardArray[0]} wins!`)
                setWinner(boardArray[0]);
            } else if (

                // Squares 0 - 3 - 6 result 
                (boardArray[0] === "stallone" && boardArray[3] === "stallone" && boardArray[6] === "stallone") ||
                (boardArray[0] === "drago" && boardArray[3] === "drago" && boardArray[6] === "drago")
            ) {
                console.log(`${boardArray[0]} wins!`)
                setWinner(boardArray[0]);
            } else if (

                 // Squares 0 - 4 - 8 result  
                (boardArray[0] === "stallone" && boardArray[4] === "stallone" && boardArray[8] === "stallone") ||
                (boardArray[0] === "drago" && boardArray[4] === "drago" && boardArray[8] === "drago")
            ) {
                console.log(`${boardArray[0]} wins!`)
                setWinner(boardArray[0]);
            } else if (

                 // Squares 3 - 4 - 5 result  
                (boardArray[3] === "stallone" && boardArray[4] === "stallone" && boardArray[5] === "stallone") ||
                (boardArray[3] === "drago" && boardArray[4] === "drago" && boardArray[5] === "drago")
            ) {
                console.log(`${boardArray[3]} wins!`)
                setWinner(boardArray[3]);
            } else if (

                 // Squares 6 - 7 - 8 result  
                (boardArray[6] === "stallone" && boardArray[7] === "stallone" && boardArray[8] === "stallone") ||
                (boardArray[6] === "drago" && boardArray[7] === "drago" && boardArray[8] === "drago")
            ) {
                console.log(`${boardArray[6]} wins!`)
                setWinner(boardArray[6]);
            } else if (

                  // Squares 1 - 4 - 7 result  
                (boardArray[1] === "stallone" && boardArray[4] === "stallone" && boardArray[7] === "stallone") ||
                (boardArray[1] === "drago" && boardArray[4] === "drago" && boardArray[7] === "drago")
            ) {
                console.log(`${boardArray[1]} wins!`)
                setWinner(boardArray[1]);
            } else if (
                
                   // Squares 2 - 5 - 8 result
                (boardArray[2] === "stallone" && boardArray[5] === "stallone" && boardArray[8] === "stallone") ||
                (boardArray[2] === "drago" && boardArray[5] === "drago" && boardArray[8] === "drago")
            ) {
                console.log(`${boardArray[2]} wins!`)
                setWinner(boardArray[2]);
            } else if (

                   // Squares 6 - 4 - 2 result
                (boardArray[6] === "stallone" && boardArray[4] === "stallone" && boardArray[2] === "stallone") ||
                (boardArray[6] === "drago" && boardArray[4] === "drago" && boardArray[2] === "drago")
            ) {
                console.log(`${boardArray[6]} wins!`)
                setWinner(boardArray[6]);
            }
    }

    useEffect(() => {
        determineWinner();
    }, [boardArray]);
    
    console.log(winner);

    return (
        <>
        <section id="board" className={styles.board}>
           {
               new Array(9).fill(0).map((e, index) => {
                   return (
                       <Square face={face} setFace={setFace} id={index} key={`index${index}`} boardArray={boardArray} setBoardArray={setBoardArray} />
                   )
               })
           } 
        </section>
        <Modal handleClose={hideModal} show={show} />
        </>
    )
}