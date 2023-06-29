import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h1>Lets Keep In Touch</h1>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.bottomLeft}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <div className={styles.bottomRight}>
          <form className={styles.form}>
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <textarea placeholder="message" cols="30" rows="15"></textarea>
            <button className={styles.btn}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
