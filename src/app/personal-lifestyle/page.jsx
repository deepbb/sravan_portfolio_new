import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
const details = [
  {
    name: "Life Style",
    imgUrl: "/personal-professional/asset1.jpg",
  },
  {
    name: "Hobbies",
    imgUrl: "/personal-professional/asset2.jpg",
  },
  {
    name: "Quotes",
    imgUrl: "/personal-professional/asset3.jpg",
  },
  {
    name: "Personal Information",
    imgUrl: "/personal-professional/asset4.jpg",
  },
  {
    name: "Gallery",
    imgUrl: "/personal-professional/asset5.jpg",
  },
  {
    name: "Belief",
    imgUrl: "/personal-professional/asset6.jpg",
  },
  {
    name: "Inspirations",
    imgUrl: "/personal-professional/asset7.jpg",
  },
];
function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.detailsContainer}>
          <div className={styles.divOne}>
            <Image
              src="/personal-professional/asset0.png"
              height={65}
              width={130}
            />
            <p>Know More Personally</p>
          </div>
          {details.map((detail) => {
            return (
              <div key={detail.name}>
                <div
                  style={{
                    maxWidth: "fit-content",
                    //   backgroundColor: "red",
                    padding: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius: "20px",
                    boxShadow: "0px 0px 20px #00000029",
                  }}
                >
                  <Image
                    src={detail.imgUrl}
                    height={200}
                    width={200}
                    style={{ borderRadius: "20px" }}
                  />
                  <p style={{ fontSize: "20px" }}>{detail.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.containerTwo}>
        <p className={styles.head}>My Personal Philosophy</p>
        <div className={styles.infoContainer} style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              maxWidth: "400px",
              color: "white",
              top: "7%",
              left: "27%",
            }}
          >
            <h3 style={{ margin: 0 }}>Purpose</h3>
            <p style={{ margin: 0 }}>
              My philosophy is rooted in the belief that success is achieved
              through hard work, determination, and a willingness to take risks.
            </p>
            <p>
              I strive to make a positive impact on the world and give back to
              society.
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              maxWidth: "500px",
              color: "white",
              textAlign: "center",
              top: "40%",
              left: "32%",
            }}
          >
            <h3 style={{ margin: 0 }}>Attitude</h3>
            <p style={{ margin: 0 }}>
              I embrace failure as a natural part of the process and use it as
              an opportunity to learn, adapt, and evolve.
            </p>
            <p>
              I understand the value of perseverance and the ability to bounce
              back from setbacks.
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              maxWidth: "500px",
              color: "white",
              textAlign: "center",
              top: "75%",
              left: "44%",
            }}
          >
            <h3 style={{ margin: 0 }}>Approach</h3>
            <p style={{ margin: 0 }}>
              I remain focused, flexible, and constantly learning.
            </p>
            <p>I pursue my passions and live life to the fullest.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
