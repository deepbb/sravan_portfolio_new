import React from "react";

import styles from "./page.module.css";
import Hero from "../../components/AboutMe/Hero";
import LetsConnect from "@/components/AboutMe/LetsConnect";
import MyInspirations from "../../components/AboutMe/MyInspirations";
import Philosophies from "../../components/AboutMe/Philosophies";
function AboutMe() {
  return (
    <>
      <Hero />
      <Philosophies />
      <LetsConnect />
      <MyInspirations />
    </>
  );
}

export default AboutMe;
