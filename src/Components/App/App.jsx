
import styles from './App.module.css';
import Header from "../Header";
import Board from "../Board";
import Modal from "../Modal/index.jsx"
import {useState} from "react";


function App() {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
    console.log(show)
  }

  const hideModal = () => {
    setShow(false);
    console.log(show)
  }

  return (
    <div className={styles.App}>
     <Header />
     <Board>
     <Modal handleClose={hideModal} show={show} />
     </Board>
    </div>
  );
}

export default App;
