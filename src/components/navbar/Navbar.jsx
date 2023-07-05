import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">Padyala&apos;s</Link>
      </div>
      <div>
        <ThemeToggle />
      </div>
      <div className={styles.navLinks}>
        {links.map((link) => (
          <Link className={styles.navLink} href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
