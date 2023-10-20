import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";

export const footerData = [
  {
    name: "Shop",
    link: "/collections",
    submenu: [
      {
        name: "Apparel",
        link: "/collections/apparel",
      },
      {
        name: "Headwear",
        link: "/collections/headwear",
      },
    ],
  },
  {
    name: "Support",
    link: "/contact-us",
    submenu: [
      {
        name: "Refund Policy",
        link: "/policies/refund-policy",
      },
      {
        name: "Shipping Policy",
        link: "/policies/shipping-policy",
      },
      {
        name: "Privacy Policy",
        link: "/policies/privacy-policy",
      },
      {
        name: "Terms and Conditions",
        link: "/policies/terms-and-conditions",
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
