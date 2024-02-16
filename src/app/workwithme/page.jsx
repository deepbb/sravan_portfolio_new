import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
export default async function WorkwithMe() {
  return (
    <div className={styles.container}>
      <h1 className={styles.headText}>
        "Let's Collaborate and Achieve Success Together!"
      </h1>
      <div className={styles.cardsContainer}></div>
    </div>
  );
}
