import { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import Square from "../Square";
import Modal from "../Modal/index.jsx"

// https://i.ibb.co/xMjyqBn/victory.jpg
// https://i.ibb.co/3NdY9KG/loss.jpg


export default function Board() {
    const [game, setGame] = useState(false);
    const [turn, setTurn] = useState("");
    const [face, setFace] = useState("");
    const [boardArray, setBoardArray] = useState([
        { index: 0, background: "", faceSet: "", clicked: false },
        { index: 1, background: "", faceSet: "", clicked: false },
        { index: 2, background: "", faceSet: "", clicked: false },
        { index: 3, background: "", faceSet: "", clicked: false },
        { index: 4, background: "", faceSet: "", clicked: false },
        { index: 5, background: "", faceSet: "", clicked: false },
        { index: 6, background: "", faceSet: "", clicked: false },
        { index: 7, background: "", faceSet: "", clicked: false },
        { index: 8, background: "", faceSet: "", clicked: false }
    ]);
    const [winner, setWinner] = useState("");
    const [show, setShow] = useState(true);

    const handleSquareClick = (e, int) => {
      
        if (e.target.getAttribute("clicked") === "true") {
            return
        }
       
        if (!face || face === "stallone") {
            // NEW OBJECT TO UPDATE THE ARRAY OF SQUARES WITH
            const updatedObj = { "index": e.target.id, "background": "https://i.ibb.co/F8jDQKP/stallone.png", "faceSet": "stallone", "clicked": true }
            // TELLS THE APP WHAT THE NEXT FACE TO FILL THE SQUARE WITH IS GOING TO BE
            setFace("drago")
            // UPDATED ARRAY TO SET THE STATE WITH
            const updatedBoardArray = boardArray.map(el => {
                if (String(el.index) === String(e.target.id)) {
                    return updatedObj;
                } else {
                    return el;
                }
            })
            // UPDATING THE STATE
            setBoardArray(updatedBoardArray);
            // console.log(boardArray);
            // CHANGING TURN TO COMPUTER'S
            setTurn("computer")

        } else if (face === "drago") {
            // NEW OBJECT TO UPDATE THE ARRAY OF SQUARES WITH
            const updatedObj = { "index": e.target.id, "background": "https://i.ibb.co/pXntp2K/drago.jpg", "faceSet": "drago", "clicked": true }
            // TELLS THE APP WHAT THE NEXT FACE TO FILL THE SQUARE WITH IS GOING TO BE
            setFace("stallone")
            // UPDATED ARRAY TO SET THE STATE WITH
            const updatedBoardArray = boardArray.map(el => {
                if (String(el.index) === String(e.target.id)) {
                    return updatedObj;
                } else {
                    return el;
                }
            })
            setBoardArray(updatedBoardArray);
            // CHANGING TURN TO COMPUTER'S
            setTurn("player")
        }

    }


    const showModal = () => {
        setShow(true);
        console.log(show)
    }

    const hideModal = () => {
        setShow(false);
        console.log(show)
        if (!game) {
            setGame(true);
            setTurn("player");
        }
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    const computerTurn = () => {
        // GET FREE SQUARES
        const freeSquares = boardArray.filter(square => !square.clicked);
        if (!freeSquares.length) {
            return
        }
        console.log("Free squares: ", freeSquares);
        // CREATE RANDOM INTEGER
        const randomInteger = getRandomIntInclusive(freeSquares[0].index, freeSquares[freeSquares.length - 1].index)
        // PICK AN AVAILABLE SQUARE FROM THE FREESQUARES ARRAY
        let pickedSquare = freeSquares[randomInteger] ? freeSquares[randomInteger] : "Couldn't find";
        // IF INTEGER IS NOT INCLUDED IN FREESQUARES ARRAY, KEEP GENERATING INTEGER UNTIL IT IS
        console.log("Picked square: ", pickedSquare);
          // NEW OBJECT TO UPDATE THE ARRAY OF SQUARES WITH
          const updatedObj = { "index": pickedSquare.index, "background": "https://i.ibb.co/pXntp2K/drago.jpg", "faceSet": "drago", "clicked": true }
          console.log("Updated object", updatedObj);
          // TELLS THE APP WHAT THE NEXT FACE TO FILL THE SQUARE WITH IS GOING TO BE
          setFace("stallone")
          // UPDATED ARRAY TO SET THE STATE WITH
          const updatedBoardArray = boardArray.map(el => {
              if (String(el.index) === String(updatedObj.index)) {
                  return updatedObj;
              } else {
                  return el;
              }
          })
          console.log("updatedBoard",updatedBoardArray)
          setBoardArray(updatedBoardArray);
          // CHANGING TURN TO COMPUTER'S
          setTurn("player")
          console.log(boardArray)
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

    useEffect(() => {
        if (game && turn === "computer") {
            const computerResult = setTimeout(() => {
                computerTurn();
            }, 1000);
            return () => clearTimeout(computerResult);
    }
    }, [turn]);


    return (
        <>
            <section id="board" className={styles.board}>
                {
                    boardArray.map(e => {
                        return (
                            <Square face={face} setFace={setFace} id={e.index} key={e.index} boardArray={boardArray} setBoardArray={setBoardArray} turn={turn} setTurn={setTurn} clicked={e.clicked} handleSquareClick={handleSquareClick} background={e.background} faceSet={e.faceSet} />
                        )
                    })
                }
            </section>
            <Modal handleClose={hideModal} show={show} game={game} winner={winner} />
        </>
    )
}