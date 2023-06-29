import React from "react";
import styles from "./portfolio.module.css";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Our Works</h1>
      </div>
      <div className={styles.galleryContainer}>
        <div className={styles.text}>Choose Gallery</div>
        <div className={styles.gallery}>
          <Link href="/portfolio/illustrations">
            <div className={styles.galleryItem}>
              <Image
                src="/illustration.png"
                alt=""
                fill={true}
                className={styles.image}
              />
              <p className={styles.imgText}>Illustrations</p>
            </div>
          </Link>
          <Link href="/portfolio/websites">
            <div className={styles.galleryItem}>
              <Image
                src="/websites.jpg"
                alt=""
                fill={true}
                className={styles.image}
              />
              <p className={styles.imgText}>Websites</p>
            </div>
          </Link>
          <Link href="/portfolio/applications">
            <div className={styles.galleryItem}>
              <Image
                src="/apps.jpg"
                alt=""
                fill={true}
                className={styles.image}
              />
              <p className={styles.imgText}>Applications</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
