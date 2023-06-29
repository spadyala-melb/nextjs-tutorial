import React from "react";
import styles from "./category.module.css";
import { items } from "./data";
import Image from "next/image";

const Category = ({ params }) => {
  // console.log("params: ", params.id);
  const id = params.id;
  const data = items[`${id}`];
  // console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.importTitle}>Our Works</div>
      <div className={styles.title}>{id}</div>
      <div className={styles.categoriesList}>
        {data?.map((item) => (
          <div className={styles.categoryItem} key={item.id}>
            <div className={styles.itemText}>
              {item.title}
              <p>{item.desc}</p>
              <button className={styles.btn}>See More</button>
            </div>
            <div className={styles.itemImage}>
              <Image
                src={item.image}
                alt=""
                fill={true}
                className={styles.imgage}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
