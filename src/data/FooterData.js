import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
  {
    name: "Facebook",
    icon: iconStyle(FaFacebook),
  },
  {
    name: "Instagram",
    icon: iconStyle(FaInstagram),
  },
  {
    name: "YouTube",
    icon: iconStyle(FaYoutube),
  },
];

export const footerData = [
  {
    title: "Main",
    links: ["FAQs", "Support", "About us"],
  },
  {
    title: "Product",
    links: ["Login", "Team"],
  },
  //   {
  //     title: "Press",
  //     links: ["Logos", "Events", "Stories", "Office"],
  //   },
];
