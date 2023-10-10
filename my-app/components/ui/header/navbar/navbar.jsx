import Image from "next/image";
import { menuItems } from "@/data/menuItems";
import { menuItemsRight } from "@/data/menuItemsRight";
import { BsBag } from "react-icons/bs";
import navbarStyles from "./navbar.module.css";
import utilStyles from "@/styles/utils.module.css";
import layoutStyles from "../../layout/layout.module.css";
import Link from "next/link";
import logo from "@/assets/logo/logo_large.png";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mobileMenu } from "@/data/mobileMenu";
import { socialLinks } from "@/data/socialLinks";
import AnnoucementBar from "../announcementBar/announcementBar";
import Bag from "@/components/icons/bag";
import UserNav from "@/components/cart/userNav/userNav";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [hours, setHours] = useState();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [today, setToday] = useState(
    new Date().toLocaleDateString("en-us", { month: "long", day: "numeric" })
  );

  useEffect(() => {
    const setTodaysHours = () => {
      let hours;
      switch (new Date().getDay()) {
        case 0:
          hours = "10am To 5pm";
          break;
        case 1:
          hours = "10am To 5pm";
          break;
        case 2:
          hours = "10am To 5pm";
          break;
        case 3:
          hours = "10am To 5pm";
          break;
        case 4:
          hours = "10am To 6pm";
          break;
        case 5:
          hours = "10am To 6pm";
          break;
        case 6:
          hours = "10am To 6pm";
      }
      setHours(hours);
    };
    setTodaysHours();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = (e) => {
    let heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const handleLeave = (e) => {
    e.preventDefault();
    setShow(false);
  };
  return (
    <header
      className={`${navbarStyles.pageHeader} ${
        isVisible ? navbarStyles.padding : navbarStyles.noPadding
      }`}
    >
      <AnnoucementBar
        annoucement={"We are now open! Today's hours are"}
        annoucement2={"Want to book ahead?"}
        hours={hours}
        today={today}
        linkText={"Get tickets here!"}
        link={"https://www.showpass.com/o/mcmillan-farms/"}
      />
      <nav className={navbarStyles.navigation}>
        {/* mobile menu */}
        <div id={navbarStyles.menuToggle}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id={navbarStyles.menu}>
            <li className={utilStyles.borderBottomGrey}>
              <h3>McMillan Farms</h3>
            </li>
            {mobileMenu.map((menuItem, index) => {
              return (
                <li key={index}>
                  <Link
                    href={menuItem.link}
                    className={`${layoutStyles.link} ${utilStyles.capitalize} ${
                      pathname == menuItem.link
                        ? layoutStyles.active
                        : layoutStyles.link
                    }`}
                  >
                    {menuItem.name}
                  </Link>
                </li>
              );
            })}
            <li className={navbarStyles.borderTop}>Open now! {hours}</li>
            <li className={navbarStyles.borderBottom}>
              <Link
                href={"https://www.showpass.com/o/mcmillan-farms/"}
                className={layoutStyles.button}
              >
                Book Tickets now!
              </Link>
            </li>
            <li>
              <ul id={navbarStyles.social}>
                {socialLinks.map((menuItem, index) => {
                  return (
                    <li key={index}>
                      <Link href={menuItem.link} className={layoutStyles.link}>
                        {menuItem.icon}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
        <ul className={navbarStyles.menuItem}>
          {menuItems.map((menuItem, index) => {
            return (
              <li key={index} onMouseEnter={menuItem.subMenu && handleClick}>
                <Link
                  href={menuItem.link}
                  className={`${utilStyles.capitalize} ${
                    pathname == menuItem.link
                      ? layoutStyles.active
                      : layoutStyles.link
                  }`}
                >
                  {menuItem.name}
                </Link>
                {menuItem.subMenu && (
                  <ul
                    className={
                      show == false
                        ? navbarStyles.subMenuItemHide
                        : navbarStyles.subMenuItemShow
                    }
                    onMouseLeave={handleLeave}
                  >
                    {menuItem.subMenu.map((subMenuItem, index) => {
                      return (
                        <li key={index}>
                          <Link
                            href={subMenuItem.link}
                            className={`${utilStyles.capitalize} ${
                              pathname == subMenuItem.link
                                ? layoutStyles.active
                                : layoutStyles.link
                            }`}
                          >
                            {subMenuItem.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <Link href={"/"}>
          <Image
            src={logo}
            height={250}
            className={utilStyles.borderCircle}
            alt={"McMillan Farms logo"}
          />
        </Link>
        <ul className={navbarStyles.menuItem}>
          {menuItemsRight.map((menuItem, index) => {
            return (
              <li key={index}>
                <Link
                  href={menuItem.link}
                  className={`${utilStyles.capitalize} ${
                    pathname == menuItem.link
                      ? layoutStyles.active
                      : layoutStyles.link
                  }`}
                >
                  {menuItem.name}
                </Link>
              </li>
            );
          })}
          <li>
            {/* <Link
              href={"/cart"}
              className={`${utilStyles.capitalize} ${
                pathname == "/cart" ? layoutStyles.active : layoutStyles.link
              }`}
            >
              <Bag />
            </Link> */}
            <UserNav />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
