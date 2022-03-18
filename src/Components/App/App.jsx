
import styles from './App.module.css';
import Header from "../Header";
import Board from "../Board";
import Modal from "../Modal/index.jsx"
import {useState} from "react";


function App() {


 
  return (
    <div className={styles.App}>
     <Header />
     <Board />
    </div>
  );
}

export default App;
