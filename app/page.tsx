import styles from "./page.module.scss";

export default function HomePage() {
    return (
        <main className={styles.main}>
            <div className={styles.hero}>
                <h1 className={styles.title}>Alabastria</h1>
                <p className={styles.subtitle}>
                    Explore the lands of Alabastria and discover your character&apos;s destiny
                </p>
                <div className={styles.cta}>
                    <p className={styles.setupMessage}>
                        🏗️ Application is being set up. Run the database migrations and seed to get started.
                    </p>
                </div>
            </div>
        </main>
    );
}

