import Image from "next/image";
import styles from "./page.module.css";
import Intro from "@/components/Intro";
import NewIntro from "@/components/NewIntro/Intro";
// import InstaFeeds from '@/components/InstaFeeds'
import Insta from "@/pages/insta";
// import InstaPersonal from '@/components/InstaPersonal'
// import YoutubeFeeds from '@/components/YoutubeFeeds'
import TagLine from "@/components/TagLine";

import React, { lazy, Suspense } from "react";
import Footer from "@/components/Footer";

const InstaFeeds = lazy(() => import("../components/InstaFeeds"));
const InstaPersonal = lazy(() => import("../components/InstaPersonal"));
const YoutubeFeeds = lazy(() => import("../components/YoutubeFeeds"));

export default function Home() {
  const socialConnectIcons = [
    "whatsapp",
    "instagram",
    "facebook",
    "linkedin",
    "telegram",
    "x",
    "youtube",
  ];

  return (
    <>
      {/* <Intro /> */}
      <NewIntro />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          // maxWidth: "1000px",
          marginTop: "20px",
          marginInline: "auto",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            paddingInline: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            className={styles.meetImg}
            src="/home-page/sravan.png"
            width={250}
            height={250}
            unoptimized
          />
          <div className={styles.Intro} style={{ fontSize: "16px" }}>
            <p>
              <b>Meet</b>
            </p>
            <p>
              <b>
                <span style={{ color: "#ff6900" }}>Sravan Kumar Anagdi</span> -
                Innovator and Leader in the Tech World
              </b>
            </p>
            <p style={{ marginTop: "20px" }}>
              👨‍💼 Welcome to the visionary world of Sravan Kumar Anagadi, the
              esteemed <b>Founder and CEO</b> of Angadi World Technologies, a
              trailblazer in digital transformation and software solutions. Join
              us in a journey of tech innovation and entrepreneurial spirit!
            </p>
          </div>
        </div>
        <div
          className="card"
          style={{
            padding: "10px",
            minWidth: "250px",
            textAlign: "center",
            alignSelf: "self-start",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 0px 6px inset, rgba(0, 0, 0, 0.16) 0px 0px 6px",
            borderRadius: "20px",
            marginBlock: "20px",
            marginRight: "20px",
          }}
        >
          <p>
            <b>
              <u>ENGAGE WITH ME ON</u>
            </b>
          </p>
          <b>
            <ul
              style={{ listStyle: "none", padding: 0, lineHeight: "26px" }}
              className={styles.engageWithMe}
            >
              <li>Entrepreneurship</li>
              <li>digital Transformation</li>
              <li>Technology Solutions</li>
              <li>Business Consultation</li>
              <li>Sales & Marketing Strategy</li>
              <li>Startup Consulting</li>
              <li>Business Advisory</li>
            </ul>
          </b>
        </div>
      </div>
      <div className={styles.collabarationTextContainer}>
        <h2>💼 Collaborate with Us for Growth and Innovation</h2>
        <p>
          Looking to revolutionize your business with cutting-edge digital
          solutions? DM Sravan Kumar Angadi for collaborations and business
          inquiries. Let's shape the future together with innovative technology
          and global expansion!
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "relative",
        }}
      >
        <Image
          className={styles.letsConnectImg}
          src="/home-page/letsConnect.png"
          width={100}
          height={100}
          unoptimized
        />
        <Image
          className={styles.letsConnectImgText}
          src="/home-page/letsConnectText.png"
          width={50}
          height={50}
          unoptimized
        />
      </div>
      <div className={styles.socialConnectContainer}>
        {socialConnectIcons.map((connection) => {
          return (
            <Image
              key={connection}
              src={`/home-page/socialConnect/${connection}.png`}
              width={50}
              height={50}
            />
          );
        })}
      </div>
      <div className={styles.scrollText}>
        <marquee>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </marquee>
      </div>

      {/* <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 50 }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <InstaFeeds />
          <InstaPersonal />
          <YoutubeFeeds />
        </Suspense>
      </div> */}
    </>
  );
}
