import React from "react";
import styles from "./index.module.css";
function Hero() {
  return (
    <>
      <div className={`${styles.hero} poppins`}>
        <p className={styles.abtMe}>About Me</p>
        <p className={styles.welcome}>
          Welcome to the Innovative World of Sravan Kumar Anagdi!
        </p>
        <p className={styles.greeting}>
          Greetings! I'm Sravan Kumar Anagdi, the visionary{" "}
          <b>Founder and CEO</b> of
        </p>
        <p className={styles.names}>
          <b>Angadi World Technologies, IBETS, and QR Angadi.</b>
        </p>
        <p className={styles.info}>
          My passion lies in leveraging technology to innovate and inspire. With
          a blend of entrepreneurial spirit and a commitment to excellence, I am
          dedicated to making a significant impact in the tech world.
        </p>
      </div>
    </>
  );
}

export default Hero;
