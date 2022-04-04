import { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import Square from "../Square";
import Modal from "../Modal/index.jsx"

// https://i.ibb.co/xMjyqBn/victory.jpg
// https://i.ibb.co/3NdY9KG/loss.jpg


export default function Board() {
    const startingBoard = [
        { index: 0, background: "", faceSet: "", clicked: false, clickedBy: "" },
        { index: 1, background: "", faceSet: "", clicked: false, clickedBy: ""  },
        { index: 2, background: "", faceSet: "", clicked: false , clickedBy: ""  },
        { index: 3, background: "", faceSet: "", clicked: false , clickedBy: ""  },
        { index: 4, background: "", faceSet: "", clicked: false , clickedBy: ""  },
        { index: 5, background: "", faceSet: "", clicked: false, clickedBy: ""   },
        { index: 6, background: "", faceSet: "", clicked: false, clickedBy: ""   },
        { index: 7, background: "", faceSet: "", clicked: false, clickedBy: ""   },
        { index: 8, background: "", faceSet: "", clicked: false , clickedBy: ""  }
    ]
    const [game, setGame] = useState(false);
    const [turn, setTurn] = useState("");
    const [face, setFace] = useState("");
    const [boardArray, setBoardArray] = useState([
        { index: 0, background: "", faceSet: "", clicked: false , clickedBy: ""  },
        { index: 1, background: "", faceSet: "", clicked: false , clickedBy: ""  },
        { index: 2, background: "", faceSet: "", clicked: false, clickedBy: ""   },
        { index: 3, background: "", faceSet: "", clicked: false , clickedBy: ""  },
        { index: 4, background: "", faceSet: "", clicked: false , clickedBy: ""  },
        { index: 5, background: "", faceSet: "", clicked: false , clickedBy: ""  },
        { index: 6, background: "", faceSet: "", clicked: false , clickedBy: ""  },
        { index: 7, background: "", faceSet: "", clicked: false, clickedBy: ""   },
        { index: 8, background: "", faceSet: "", clicked: false , clickedBy: ""  }
    ]);
    const [winner, setWinner] = useState("");
    const [show, setShow] = useState(true);
    const [modalBackground, setModalBackground] = useState("https://i.ibb.co/TLzhT4v/Screenshot-2022-03-19-140916.jpg");
    const [clickable, setClickable] = useState(true);
    const boardClass = clickable ? `${styles.board}` : `${styles["board-no-pointer-events"]}`;
    // console.log("Boardclass", boardClass);

    // FUNCTION THAT HANDLES WHAT HAPPENS WHEN A SQUARE IS CLICKED
    const handleSquareClick = (e, int) => {
      
        if (e.target.getAttribute("clicked") === "true") {
            return
        }
       
        if (!face || face === "stallone") {
            setClickable(false);
            // NEW OBJECT TO UPDATE THE ARRAY OF SQUARES WITH
            const updatedObj = { "index": e.target.id, "background": "https://i.ibb.co/F8jDQKP/stallone.png", "faceSet": "stallone", "clicked": true, clickedBy: "player" }
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
            // CHANGING TURN TO COMPUTER'S IF WINNER IS NOT EMPTY
            if (!winner) {
            setTurn("computer")
        }

        } else if (face === "drago") {
         
            // NEW OBJECT TO UPDATE THE ARRAY OF SQUARES WITH
            const updatedObj = { "index": e.target.id, "background": "https://i.ibb.co/pXntp2K/drago.jpg", "faceSet": "drago", "clicked": true, clickedBy: "computer" }
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
            if (!winner) {
            setTurn("player")
        }
        
        }

    }


    const showModal = () => {
        setShow(true);
        // console.log(show)
    }

    const hideModal = () => {
        setShow(false);
        console.log(show)
        if (!game) {
            setGame(true);
            setTurn("player");
            setWinner("");
            setFace("");
            setBoardArray(startingBoard);
            setModalBackground("https://i.ibb.co/TLzhT4v/Screenshot-2022-03-19-140916.jpg");
            setClickable(true);
        }
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    const computerTurn = () => {
        if (winner) {
            return;
        }

        // Attempting a different approach: get all squares that have been clicked by the player 
        const playerSquares = boardArray.filter(square => square.clickedBy === 'player');
        // get free squares
        const freeSquares = boardArray.filter(square => !square.clicked );
        console.log("Free squares: ", freeSquares);
        // get all the playerSquares indexes
        const playerIndexes = playerSquares.map(obj => +obj.index);
        const freeSquaresIndexes = freeSquares.map(obj => obj.index);
        console.log("playerIndexes", playerIndexes);
        console.log("freeSquaresIndexes", freeSquaresIndexes);

        // GET FREE SQUARES
        // console.log("Board array", boardArray);
        // const freeSquares = boardArray.filter(square => !square.clicked && !square.clickedBy === "computer");
        // console.log("freeSquares", freeSquares);
        // GET ALL FREESQUARES INDICES 
        // const indices = freeSquares.map(obj => obj.index);
       

        if (!playerSquares.length) {
            return
        }
        setClickable(false)
        
        // CREATE RANDOM INTEGER AND CHECK PLAYER'S CHOICES + AVAILABLE SQUARES TO TRY AND DEFEAT THEM
        let randomInteger;
        if (playerIndexes.includes(0) && playerIndexes.includes(3) && !playerIndexes.includes(6) && freeSquaresIndexes.includes(6)) {
            console.log("Having considered player's choices, I will pick", 6)
            randomInteger = freeSquares.findIndex(obj => obj.index === 6)
            console.log("Based on current playerIndexes", playerIndexes, "The new random integer found is", randomInteger);
        } else if (playerIndexes.includes(0) && playerIndexes.includes(1) && !playerIndexes.includes(2) && freeSquaresIndexes.includes(2)) {
            console.log("Having considered player's choices, I will pick", 2)
            randomInteger = freeSquares.findIndex(obj => obj.index === 2);
            console.log("Based on current playerIndexes", playerIndexes, "The new random integer found is", randomInteger);
        } else if (playerIndexes.includes(0) && playerIndexes.includes(4) && !playerIndexes.includes(8) && freeSquaresIndexes.includes(8)) {
            console.log("Having considered player's choices, I will pick", 8)
            randomInteger = freeSquares.findIndex(obj => obj.index === 8);
            console.log("Based on current playerIndexes", playerIndexes, "The new random integer found is", randomInteger);
        } else if (playerIndexes.includes(3) && playerIndexes.includes(4) && !playerIndexes.includes(5) && freeSquaresIndexes.includes(5)) {
            console.log("Having considered player's choices, I will pick", 5)
            randomInteger = freeSquares.findIndex(obj => obj.index === 5);
            console.log("Based on current playerIndexes", playerIndexes, "The new random integer found is", randomInteger);
        } else if (playerIndexes.includes(3) && playerIndexes.includes(6) && !playerIndexes.includes(0) && freeSquaresIndexes.includes(0)) {
            console.log("Having considered player's choices, I will pick", 0)
            randomInteger = freeSquares.findIndex(obj => obj.index === 0);
            console.log("Based on current playerIndexes", playerIndexes, "The new random integer found is", randomInteger);
        } else if (playerIndexes.includes(6) && playerIndexes.includes(7) && !playerIndexes.includes(8) && freeSquaresIndexes.includes(8)) {
            console.log("Having considered player's choices, I will pick", 8)
            randomInteger = freeSquares.findIndex(obj => obj.index === 8);
            console.log("Based on current playerIndexes", playerIndexes, "The new random integer found is", randomInteger);
        } else if (playerIndexes.includes(1) && playerIndexes.includes(4) && !playerIndexes.includes(7) && freeSquaresIndexes.includes(7)) {
            console.log("Having considered player's choices, I will pick", 7)
            randomInteger = freeSquares.findIndex(obj => obj.index === 7);
            console.log("Based on current playerIndexes", playerIndexes, "The new random integer found is", randomInteger);
        } else if (playerIndexes.includes(2) && playerIndexes.includes(5) && !playerIndexes.includes(8) && freeSquaresIndexes.includes(8)) {
            console.log("Having considered player's choices, I will pick", 8)
            randomInteger = freeSquares.findIndex(obj => obj.index === 8);
            console.log("Based on current playerIndexes", playerIndexes, "The new random integer found is", randomInteger);
        } else if (playerIndexes.includes(1) && playerIndexes.includes(2) && !playerIndexes.includes(0) && freeSquaresIndexes.includes(0)) {
            console.log("Having considered player's choices, I will pick", 0)
            randomInteger = freeSquares.findIndex(obj => obj.index === 0);
            console.log("Based on current playerIndexes", playerIndexes, "The new random integer found is", randomInteger);
        } else if (playerIndexes.includes(2) && playerIndexes.includes(4) && !playerIndexes.includes(6) && freeSquaresIndexes.includes(6)) {
            console.log("Having considered player's choices, I will pick", 6)
            randomInteger = freeSquares.findIndex(obj => obj.index === 6);
            console.log("Based on current playerIndexes", playerIndexes, "The new random integer found is", randomInteger);
        } else if (playerIndexes.includes(4) && playerIndexes.includes(5) && !playerIndexes.includes(3) && freeSquaresIndexes.includes(3)) {
            console.log("Having considered player's choices, I will pick", 3)
            randomInteger = freeSquares.findIndex(obj => obj.index === 3);
            console.log("Based on current playerIndexes", playerIndexes, "The new random integer found is", randomInteger);
        } else if (playerIndexes.includes(4) && playerIndexes.includes(8) && !playerIndexes.includes(0) && freeSquaresIndexes.includes(0)) {
            console.log("Having considered player's choices, I will pick", 0)
            randomInteger = freeSquares.findIndex(obj => obj.index === 0);
            console.log("Based on current playerIndexes", playerIndexes, "The new random integer found is", randomInteger);
        } else if (playerIndexes.includes(4) && playerIndexes.includes(7) && !playerIndexes.includes(1) && freeSquaresIndexes.includes(1)) {
            console.log("Having considered player's choices, I will pick", 1)
            randomInteger = freeSquares.findIndex(obj => obj.index === 1);
            console.log("Based on current playerIndexes", playerIndexes, "The new random integer found is", randomInteger);
        } else if (playerIndexes.includes(5) && playerIndexes.includes(8) && !playerIndexes.includes(2) && freeSquaresIndexes.includes(2)) {
            console.log("Having considered player's choices, I will pick", 2)
            randomInteger = freeSquares.findIndex(obj => obj.index === 2);
            console.log("Based on current playerIndexes", playerIndexes, "The new random integer found is", randomInteger);
        } else if (playerIndexes.includes(6) && playerIndexes.includes(4) && !playerIndexes.includes(2) && freeSquaresIndexes.includes(2)) {
            console.log("Having considered player's choices, I will pick", 2)
            randomInteger = freeSquares.findIndex(obj => obj.index === 2);
            console.log("Based on current playerIndexes", playerIndexes, "The new random integer found is", randomInteger);
        } else if (playerIndexes.includes(7) && playerIndexes.includes(8) && !playerIndexes.includes(6) && freeSquaresIndexes.includes(6)) {
            console.log("Having considered player's choices, I will pick", 6)
            randomInteger = freeSquares.findIndex(obj => obj.index === 6);
            console.log("Based on current playerIndexes", playerIndexes, "The new random integer found is", randomInteger);
        } else {
            randomInteger = getRandomIntInclusive(0, freeSquares.length - 1);
        }


        // PICK AN AVAILABLE SQUARE FROM THE FREESQUARES ARRAY
        let pickedSquare = freeSquares[randomInteger] ? freeSquares[randomInteger] : null;
        // if (!pickedSquare) {
        //     while (!pickedSquare) {

        //     }
        // }
        // IF INTEGER IS NOT INCLUDED IN FREESQUARES ARRAY, KEEP GENERATING INTEGER UNTIL IT IS
        console.log("Picked square: ", pickedSquare);
          // NEW OBJECT TO UPDATE THE ARRAY OF SQUARES WITH
          const updatedObj = { "index": pickedSquare.index, "background": "https://i.ibb.co/pXntp2K/drago.jpg", "faceSet": "drago", "clicked": true, clickedBy: "computer" }
        //   console.log("Updated object", updatedObj);
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
        //   console.log("updatedBoard",updatedBoardArray)
          setBoardArray(updatedBoardArray);
          // CHANGING TURN TO COMPUTER'S
          setTurn("player")
          setClickable(true)
        //   console.log(boardArray)
    }

    const determineWinner = () => {
       
        // Squares 0 - 1 - 2 result 
        if (
            (boardArray[0].faceSet === "stallone" && boardArray[1].faceSet === "stallone" && boardArray[2].faceSet === "stallone") ||
            (boardArray[0].faceSet === "drago" && boardArray[1].faceSet === "drago" && boardArray[2].faceSet === "drago")
        ) {
            setGame(false);
            setTurn("");
            setWinner(boardArray[0].faceSet);
            // console.log(winner, "wins");
            if (boardArray[0].faceSet === "stallone") {
                setModalBackground("https://i.ibb.co/558dhSQ/victory.jpg");
            } else {
                setModalBackground("https://i.ibb.co/Phjzvk3/loss.jpg");
            }
            console.log("updated modal", modalBackground);
           
            showModal();
        } else if (

            // Squares 0 - 3 - 6 result 
            (boardArray[0].faceSet === "stallone" && boardArray[3].faceSet === "stallone" && boardArray[6].faceSet === "stallone") ||
            (boardArray[0].faceSet === "drago" && boardArray[3].faceSet === "drago" && boardArray[6].faceSet === "drago")
        ) {
            setGame(false);
            setTurn("");
            // console.log(`${boardArray[0].faceSet} wins!`)
            setWinner(boardArray[0].faceSet);
            if (boardArray[0].faceSet === "stallone") {
                setModalBackground("https://i.ibb.co/558dhSQ/victory.jpg");
            } else {
                setModalBackground("https://i.ibb.co/Phjzvk3/loss.jpg");
            }
            
            showModal();
        } else if (

            // Squares 0 - 4 - 8 result  
            (boardArray[0].faceSet === "stallone" && boardArray[4].faceSet === "stallone" && boardArray[8].faceSet === "stallone") ||
            (boardArray[0].faceSet === "drago" && boardArray[4].faceSet === "drago" && boardArray[8].faceSet === "drago")
        ) {
            setGame(false);
            setTurn("");
            // console.log(`${boardArray[0].faceSet} wins!`)
            setWinner(boardArray[0].faceSet);
            if (boardArray[0].faceSet === "stallone") {
                setModalBackground("https://i.ibb.co/558dhSQ/victory.jpg");
            } else {
                setModalBackground("https://i.ibb.co/Phjzvk3/loss.jpg");
            }
           
            showModal();
        } else if (

            // Squares 3 - 4 - 5 result  
            (boardArray[3].faceSet === "stallone" && boardArray[4].faceSet === "stallone" && boardArray[5].faceSet === "stallone") ||
            (boardArray[3].faceSet === "drago" && boardArray[4].faceSet === "drago" && boardArray[5].faceSet === "drago")
        ) {
            setGame(false);
            setTurn("");
            // console.log(`${boardArray[3].faceSet} wins!`)
            setWinner(boardArray[3].faceSet);
            if (boardArray[3].faceSet === "stallone") {
                setModalBackground("https://i.ibb.co/558dhSQ/victory.jpg");
            } else {
                setModalBackground("https://i.ibb.co/Phjzvk3/loss.jpg");
            }
            
            showModal();
        } else if (

            // Squares 6 - 7 - 8 result  
            (boardArray[6].faceSet === "stallone" && boardArray[7].faceSet === "stallone" && boardArray[8].faceSet === "stallone") ||
            (boardArray[6].faceSet === "drago" && boardArray[7].faceSet === "drago" && boardArray[8].faceSet === "drago")
        ) {
            setGame(false);
            setTurn("");
            // console.log(`${boardArray[6].faceSet} wins!`)
            setWinner(boardArray[6].faceSet);
            if (boardArray[6].faceSet === "stallone") {
                setModalBackground("https://i.ibb.co/558dhSQ/victory.jpg");
            } else {
                setModalBackground("https://i.ibb.co/Phjzvk3/loss.jpg");
            }
            
            showModal();
        } else if (

            // Squares 1 - 4 - 7 result  
            (boardArray[1].faceSet === "stallone" && boardArray[4].faceSet === "stallone" && boardArray[7].faceSet === "stallone") ||
            (boardArray[1].faceSet === "drago" && boardArray[4].faceSet === "drago" && boardArray[7].faceSet === "drago")
        ) {
            setGame(false);
            setTurn("");
            // console.log(`${boardArray[1].faceSet} wins!`)
            setWinner(boardArray[1].faceSet);
            if (boardArray[1].faceSet === "stallone") {
                setModalBackground("https://i.ibb.co/558dhSQ/victory.jpg");
            } else {
                setModalBackground("https://i.ibb.co/Phjzvk3/loss.jpg");
            }
           
            showModal();
        } else if (

            // Squares 2 - 5 - 8 result
            (boardArray[2].faceSet === "stallone" && boardArray[5].faceSet === "stallone" && boardArray[8].faceSet === "stallone") ||
            (boardArray[2].faceSet === "drago" && boardArray[5].faceSet === "drago" && boardArray[8].faceSet === "drago")
        ) {
            setGame(false);
            setTurn("");
            // console.log(`${boardArray[2].faceSet} wins!`)
            setWinner(boardArray[2].faceSet);
            if (boardArray[2].faceSet === "stallone") {
                setModalBackground("https://i.ibb.co/558dhSQ/victory.jpg");
            } else {
                setModalBackground("https://i.ibb.co/Phjzvk3/loss.jpg");
            }
            
            showModal();
        } else if (

            // Squares 6 - 4 - 2 result
            (boardArray[6].faceSet === "stallone" && boardArray[4].faceSet === "stallone" && boardArray[2].faceSet === "stallone") ||
            (boardArray[6].faceSet === "drago" && boardArray[4].faceSet === "drago" && boardArray[2].faceSet === "drago")
        ) {
            setGame(false);
            setTurn("");
            // console.log(`${boardArray[6].faceSet} wins!`)
            setWinner(boardArray[6].faceSet);
            if (boardArray[6].faceSet === "stallone") {
                setModalBackground("https://i.ibb.co/558dhSQ/victory.jpg");
            } else {
                setModalBackground("https://i.ibb.co/Phjzvk3/loss.jpg");
            }
            showModal();
        } else if (boardArray.every(square => square.clicked)) {
            setGame(false);
            setTurn("");
            // console.log("it's a draw");
            setWinner("draw");
           
            setModalBackground("https://i.ibb.co/Hq8CLBm/draw.jpg");
            showModal();
        }
    }

    useEffect(() => {
        determineWinner();
    }, [boardArray]);

    useEffect(() => {
        if (game && turn === "computer" && !winner) {
            const computerResult = setTimeout(() => {
                computerTurn();
            }, 1000);
            return () => clearTimeout(computerResult);
    }
    }, [turn]);

 

    return (
        <>
            <section id="board" className={boardClass}>
                {
                    boardArray.map(e => {
                        return (
                            <Square face={face} setFace={setFace} id={e.index} key={e.index} boardArray={boardArray} setBoardArray={setBoardArray} turn={turn} setTurn={setTurn} clicked={e.clicked} handleSquareClick={handleSquareClick} background={e.background} faceSet={e.faceSet} />
                        )
                    })
                }
            </section>
            <Modal handleClose={hideModal} show={show} game={game} winner={winner} modalBackground={modalBackground}/>
        </>
    )
}