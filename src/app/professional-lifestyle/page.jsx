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
            <p>Know More Professionally</p>
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
        <p className={styles.head}>My Professional Philosophy</p>
        <div className={styles.infoContainer} style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              maxWidth: "250px",
              color: "white",
              top: "34%",
              left: "11.5%",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "24px", marginBottom: "0px" }}>
              Innovation
            </h3>
            <p style={{ color: "black", fontSize: "14px" }}>
              I must be innovative to remain ahead of the competition and
              continuously improve our offerings.
            </p>
            <p style={{ margin: 0, color: "black", fontSize: "14px" }}>
              We aren’t afraid to attempt new things, even if they don’t always
              work out.
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              maxWidth: "250px",
              color: "white",
              top: "28%",
              left: "41%",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "24px", marginBottom: "0px" }}>
              Perseverance
            </h3>
            <p style={{ color: "black", fontSize: "14px" }}>
              Entrepreneurship is not simple, and setbacks are unavoidable. I
              view failure as an opportunity to learn and develop, and we never
              give up on our dreams.
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              maxWidth: "250px",
              color: "white",
              top: "28%",
              left: "70%",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "24px", marginBottom: "0px" }}>Approach</h3>
            <p style={{ color: "black", fontSize: "14px" }}>
              The business landscape is constantly changing, and I must remain
              current on the latest trends and technologies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
