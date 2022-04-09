import styles from "./index.module.css";

export default function Score({score}) {

    return (
        <section className={styles.container}>
        <h2>SCORE</h2>
        <div className={styles.scoreWrapper}>
            <div className={styles.score}>
            <h3>ROCKY</h3>
            <p>{score.player}</p>
            </div>

            <div className={styles.score}>
            <h3>IVAN</h3>
            <p>{score.computer}</p>
                </div>
        </div>
        </section>
    )
}