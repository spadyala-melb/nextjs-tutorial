import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="about image"
          fill={true}
          className={styles.image}
        />
        <div className={styles.topContainerText}>
          <h3>Digital Story Tellers</h3>
          <p>Handcrafting award winning digital experience</p>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.bottomLeft}>
          <h3>Who Are We ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            voluptatum dolore id nemo omnis consequuntur obcaecati dolorem vitae
            architecto ab.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            consectetur ipsam nostrum doloribus optio reiciendis ex modi
            praesentium dolore eos vero placeat, molestiae sapiente assumenda
            dignissimos, beatae veniam repudiandae voluptates sed sequi
            expedita! Fuga voluptates ab hic ducimus quam, itaque error omnis
            ratione incid brunt corrupti perspiciatis modi cupiditate, tempore
            vitae.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            nemo perspiciatis eos dolorem adipisci a aspernatur provident eaque
            quae assumenda!
          </p>
        </div>
        <div className={styles.bottomRight}>
          <h3>What We Do ?</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            cupiditate, modi dignissimos suscipit explicabo, magni rem molestias
            maxime laboriosam molestiae consequuntur voluptate dolor?
            Architecto, commodi ex nihil tempore laboriosam similique ipsa vel
            itaque natus eum laudantium, autem officiis debitis rerum! Corrupti
            illo quos fugiat doloribus et sed, eligendi facilis aspernatur.
          </p>
          <ul>
            <li>Creative Illustrations</li>
            <li>Dynamic Websites</li>
            <li>Fast and handy Mobile Apps</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
