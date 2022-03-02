
import styles from './App.module.css';
import Header from "../Header";
import Board from "../Board";

function App() {
  return (
    <div className={styles.App}>
     <Header />
     <Board />
    </div>
  );
}

export default App;
