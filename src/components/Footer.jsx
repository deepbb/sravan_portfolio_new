import React from "react";
import "./Footer.css";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  const footerLinks = [
    {
      name: "facebook",
      image: "/footer-images/facebook.png",
      href: "",
    },
    {
      name: "x",
      image: "/footer-images/x.png",
      href: "",
    },
    {
      name: "instagram",
      image: "/footer-images/instagram.png",
      href: "",
    },
    {
      name: "linkedin",
      image: "/footer-images/linkedin.png",
      href: "",
    },
    {
      name: "email",
      image: "/footer-images/email.png",
      href: "",
    },
  ];
  return (
    <div
      style={{
        background: "#000",
        width: "100%",
        paddingBlock: "5px",
      }}
    >
      <div className="footer-wrapper">
        <span className="footer-disclaimer">
          © 2023 ASK. All Rights Reserved.
        </span>
        <div style={{ display: "flex", gap: "10px" }}>
          {footerLinks.map((link) => {
            return (
              <Link href={link.href} key={link.name}>
                <Image
                  src={link.image}
                  width={32}
                  height={32}
                  alt={link.name}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
