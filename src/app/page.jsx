import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Better design for your digital products.</h1>
        <p>
          Turning your idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button className={styles.btn}>See our works</button>
      </div>
      <div className={styles.heroImage}>
        {/* <Image src="/hero.png" alt="hero image" width={450} height={450} /> */}
        <div className={styles.imgContainer}>
          <Image
            src="/hero.png"
            alt="hero image"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
