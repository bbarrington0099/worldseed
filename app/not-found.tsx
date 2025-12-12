import Link from "next/link";
import styles from "./not-found.module.scss";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.mistOverlay} />

            <div className={styles.content}>
                <h1 className={styles.errorCode}>404</h1>
                <h2 className={styles.title}>Lost in the Mists</h2>
                <p className={styles.description}>
                    The path you seek has faded into the fog.
                    Perhaps a wrong turn at the crossroads, or ancient magic obscuring your way.
                </p>

                <div className={styles.compass}>
                    <div className={styles.compassRose}>
                        <span className={styles.compassN}>N</span>
                        <span className={styles.compassE}>E</span>
                        <span className={styles.compassS}>S</span>
                        <span className={styles.compassW}>W</span>
                        <div className={styles.compassNeedle} />
                    </div>
                </div>

                <nav className={styles.navigation}>
                    <p className={styles.navPrompt}>Let us guide you back:</p>
                    <div className={styles.navLinks}>
                        <Link href="/" className={styles.navLink}>
                            <span className={styles.icon}>🏠</span>
                            <span>Return Home</span>
                        </Link>
                        <Link href="/world" className={styles.navLink}>
                            <span className={styles.icon}>🗺️</span>
                            <span>Explore the World</span>
                        </Link>
                        <Link href="/guilds" className={styles.navLink}>
                            <span className={styles.icon}>⚔️</span>
                            <span>Visit the Guilds</span>
                        </Link>
                        <Link href="/npc-generator" className={styles.navLink}>
                            <span className={styles.icon}>🎲</span>
                            <span>Generate an NPC</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}

