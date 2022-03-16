
import styles from './App.module.css';
import Header from "../Header";
import Board from "../Board";
import {useState} from "react";


function App() {
const [game, setGame] = useState(false);

const [imgUrl, setImageUrl] = useState()

  return (
    <div className={styles.App}>
     <Header />
     <Board />
    </div>
  );
}

export default App;
