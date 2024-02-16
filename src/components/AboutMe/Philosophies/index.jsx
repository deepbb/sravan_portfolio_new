import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
function Philosophies() {
  return (
    <div className={styles.container}>
      {/* one */}
      <div className={styles.innerContainer}>
        <div className={styles.info}>
          <p className={styles.head}>Professional Philosophy</p>
          <p className={styles.text}>
            My career is a testament to my belief in continuous learning and
            evolving. I thrive on challenges and embrace change as an
            opportunity for growth. My leadership style is anchored in
            collaboration and empowerment, aiming to build teams that are as
            diverse in their ideas as they are united in their goals.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            src="/about-me-page/sravanOne.png"
            height={280}
            width={280}
            unoptimized
          />
        </div>
      </div>
      {/* two */}
      <div className={`${styles.innerContainer} ${styles.wrap}`}>
        <div className={styles.img}>
          <Image
            src="/about-me-page/sravanTwo.png"
            height={280}
            width={280}
            unoptimized
          />
        </div>
        <div className={styles.info}>
          <p className={styles.head}>Personal Approach</p>
          <p className={styles.text}>
            Beyond the boardroom, I am a firm believer in the power of personal
            connections. Building relationships, understanding diverse
            perspectives, and engaging in meaningful conversations are at the
            heart of my personal and professional life. I value honesty,
            integrity, and transparency, and I bring these qualities into every
            interaction.
          </p>
        </div>
      </div>
      {/* three */}
      <div className={styles.innerContainer}>
        <div className={styles.info}>
          <p className={styles.head}>Networking and Collaboration</p>
          <p className={styles.text}>
            I am always on the lookout for opportunities to connect with
            like-minded individuals and professionals. Whether you're an
            aspiring entrepreneur, a seasoned executive, or someone with a
            unique idea, I believe in the power of collaboration to bring about
            transformative change. Let's connect, share ideas, and explore the
            potential of working together.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            src="/about-me-page/bulb.png"
            height={280}
            width={280}
            unoptimized
          />
        </div>
      </div>
      {/* four */}
      <div className={`${styles.innerContainer} ${styles.wrap}`}>
        <div className={styles.img}>
          <Image
            src="/about-me-page/bulb.png"
            height={280}
            width={280}
            unoptimized
          />
        </div>
        <div className={styles.info}>
          <p className={styles.head}>Vision for the Future</p>
          <p className={styles.text}>
            Looking ahead, my goal is to continue pushing the boundaries of
            what's possible, both in technology and in business. I am excited
            about the future and the opportunities it holds, not just for me but
            for all of us in this rapidly evolving digital world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Philosophies;
