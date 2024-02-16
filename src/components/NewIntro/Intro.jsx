import styles from "./Intro.module.css";

import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
function NewIntro() {
  return (
    <div className={styles.NewIntroContainer}>
      {/* image container */}
      <div className={styles.imageContainer}>
        <Image
          src="/home-page/sravan.png"
          width={350}
          height={350}
          style={{ borderRadius: "50%" }}
          unoptimized
          alt="CEO Image"
        />
      </div>
      {/* content container */}
      <div className={styles.contentContainer}>
        <div style={{ textAlign: "right" }}>
          <h1 className="name" style={{ color: "black", marginBlock: 0 }}>
            Angadi Sravan Kumar
          </h1>
          <h2 style={{ fontFamily: "sans-serif", marginBlock: "10px" }}>
            I'm an Entrepreneur
          </h2>
          <p>
            <b>Inspiring to chase your dream</b> with a passion to build an
            empire!
          </p>
          <h2 style={{ color: "#F48020" }}>
            Join to Explore the world of business & leadership with me!
          </h2>
          <div className={styles.buttonContainer}>
            <button className={styles["know-more-button"]}>Know More</button>
            <button className={styles["work-with-me-button"]}>
              Work with me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewIntro;
