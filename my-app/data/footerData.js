import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";

export const footerData = [
  {
    name: "the farm",
    link: "/the-farm",
    submenu: [
      {
        name: "fall attractions",
        link: "/the-farm/fall-attractions",
      },
      {
        name: "summer activities",
        link: "/the-farm/summer-activities",
      },
      {
        name: "seasonal goods",
        link: "/the-farm/seasonal-goods",
      },
      {
        name: "events",
        link: "/the-farm/events",
      },
      {
        name: "school bookings",
        link: "/the-farm/school-bookings",
      },
    ],
  },
  {
    name: "about us",
    link: "/about-us",
    submenu: [
      {
        name: "our farm",
        link: "/about-us#our-farm",
      },
      {
        name: "meet the farmers",
        link: "/about-us#meet-the-farmers",
      },
      {
        name: "history",
        link: "/about-us#history",
      },
    ],
  },
  {
    name: "contact us",
    link: "/contact-us",
    submenu: [
      {
        name: "support",
        link: "/faq",
      },
      {
        name: "careers",
        link: "/careers",
      },
    ],
  },
  {
    name: "follow us",
    link: "/contact-us",
    submenu: [
      {
        name: "facebook",
        link: "https://www.facebook.com/McMillanFarms.CornMaze.and.PumpkinPatch",
        icon: <BsFacebook />,
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/mcmillanfarms/",
        icon: <BsInstagram />,
      },
      {
        name: "tik tok",
        link: "https://www.tiktok.com/@mcmillanfarms",
        icon: <BsTiktok />,
      },
    ],
  },
];
