import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
const inspirations = [
  {
    name: "Bryant Mcgill",
    imgUrl: "bryant",
    quote:
      "“One of the most sincere forms of respect is actually listening to what another has to say”",
  },
  {
    name: "Jenni Young Mcgill",
    imgUrl: "jenni",
    quote:
      "“Every single event in your life, especially the difficult lessons, have made you smarter, stronger, and wiser than you were yesterday. Be thankful!”",
  },
  {
    name: "Grant Cardone",
    imgUrl: "grant",
    quote: "“Never quit and you are guaranteed to find your greatness”",
  },
];
function MyInspirations() {
  return (
    <div className={styles.container}>
      <p className={styles.sectionHead}>My Inspirations</p>
      <div className={styles.myinspirations}>
        {inspirations.map((inspiration, index) => {
          return (
            <div className={styles.inspirationCard} key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Image
                  src={`/about-me-page/${inspiration.imgUrl}.png`}
                  height={280}
                  width={280}
                  style={{
                    width: "100%",
                  }}
                  unoptimized
                />
                <p className={styles.name}>{inspiration.name}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifySelf: "flex-start",
                  textAlign: "center",
                }}
              >
                <p>{inspiration.quote}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyInspirations;
