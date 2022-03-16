import {useState, useEffect} from "react";
import styles from  "./index.module.css";
import Square from "../Square";
import stallone from "../../images/stallone.png";
import drago from "../../images/drago.jpg";

export default function Board(){
    const [face, setFace] = useState("");


    return (
        <section id="board" className={styles.board}>
           {
               new Array(9).fill(0).map((e, index) => {
                   return (
                       <Square face={face} setFace={setFace} stallone={stallone} drago={drago} />
                   )
               })
           } 
        </section>
    )
}