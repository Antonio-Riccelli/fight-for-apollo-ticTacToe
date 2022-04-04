
import styles from './App.module.css';
import Header from "../Header";
import Board from "../Board";
import Score from "../Score/index.jsx"
import {useState} from "react";


function App() {
const [score, setScore] = useState({"player": 0, "computer": 0});

 
  return (
    <div className={styles.App}>
    <Score score={score} />
     <Header />
     
     <Board setScore={setScore} score={score}/>
    </div>
  );
}

export default App;
