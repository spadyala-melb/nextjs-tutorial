import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerText}>
        &copy; 2023 Padyalas. All rights reserved.
      </div>
      <div className={styles.socialIcons}>
        <Image src="/1.png" alt="facebook image" width="15" height="15" />
        <Image src="/2.png" alt="instagram image" width="15" height="15" />
        <Image src="/3.png" alt="twitter image" width="15" height="15" />
        <Image src="/4.png" alt="youtube image" width="15" height="15" />
      </div>
    </div>
  );
};

export default Footer;
