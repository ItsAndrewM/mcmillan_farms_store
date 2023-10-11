import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";

export const footerData = [
  {
    name: "Shop",
    link: "/collections",
    submenu: [],
  },
  {
    name: "contact us",
    link: "/contact-us",
    submenu: [],
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
