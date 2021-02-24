import React, { useCallback, useState, useEffect } from "react";
import clsx from "clsx";
import SearchBar from "@theme/SearchBar";
import Toggle from "@theme/Toggle";
import useThemeContext from "@theme/hooks/useThemeContext";
import { useThemeConfig } from "@docusaurus/theme-common";
import useHideableNavbar from "@theme/hooks/useHideableNavbar";
import useLockBodyScroll from "@theme/hooks/useLockBodyScroll";
import useWindowSize, { windowSizes } from "@theme/hooks/useWindowSize";
import NavbarItem from "@theme/NavbarItem";
import Logo from "@theme/Logo";
import IconMenu from "@theme/IconMenu";
import Moon from "../img/Moon";
import Sun from "../img/Sun";
import GitHub from "../img/GitHub";
import RightArrow from "../img/RightArrow";
import styles from "./styles.module.css"; // retrocompatible with v1

const DefaultNavItemPosition = "left"; // If split links by left/right
// if position is unspecified, fallback to right (as v1)

function splitNavItemsByPosition(items) {
  const leftItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === "left"
  );
  const rightItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === "right"
  );
  return {
    leftItems,
    rightItems,
  };
}

function Navbar() {
  const {
    navbar: { items, hideOnScroll, style },
    colorMode: { disableSwitch: disableColorModeSwitch },
  } = useThemeConfig();
  const centerItems = [
    {
      to: "docs/nativebase",
      // activeBasePath: "docs",
      label: "Docs",
      position: "center",
    },
    { to: "docs/faq", label: "Market", position: "center" },
    {
      to: "https://geekyants.com/",
      label: "Hire Us",
      position: "center",
    },
  ];
  const [sidebarShown, setSidebarShown] = useState(false);
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
  useLockBodyScroll(sidebarShown);
  const showSidebar = useCallback(() => {
    setSidebarShown(true);
  }, [setSidebarShown]);
  const hideSidebar = useCallback(() => {
    setSidebarShown(false);
  }, [setSidebarShown]);
  const onToggleChange = useCallback(
    () => (!isDarkTheme ? setDarkTheme() : setLightTheme()),
    [isDarkTheme, setLightTheme, setDarkTheme]
  );
  const windowSize = useWindowSize();
  useEffect(() => {
    if (windowSize === windowSizes.desktop) {
      setSidebarShown(false);
    }
  }, [windowSize]);
  const { leftItems, rightItems } = splitNavItemsByPosition(items);
  console.log("items - ", items);
  console.log("leftItems - ", leftItems);
  console.log("centerItems - ", centerItems);
  console.log("rightItems - ", rightItems);
  return (
    <nav
      id="tailwind"
      ref={navbarRef}
      className={clsx("navbar", "navbar--fixed-top", {
        "navbar--dark": style === "dark",
        "navbar--primary": style === "primary",
        "navbar-sidebar--show": sidebarShown,
        [styles.navbarHideable]: hideOnScroll,
        [styles.navbarHidden]: !isNavbarVisible,
      })}
    >
      <div className="navbar__inner">
        <div className="navbar__items">
          {items != null && items.length !== 0 && (
            <div
              aria-label="Navigation bar toggle"
              className="navbar__toggle"
              role="button"
              tabIndex={0}
              onClick={showSidebar}
              onKeyDown={showSidebar}
            >
              <IconMenu />
            </div>
          )}
          <Logo
            className="navbar__brand"
            imageClassName="navbar__logo"
            titleClassName={clsx("navbar__title", {
              [styles.hideLogoText]: isSearchBarExpanded,
            })}
          />

          <SearchBar
            handleSearchBarToggle={setIsSearchBarExpanded}
            isSearchBarExpanded={isSearchBarExpanded}
          />
          {leftItems.map((item, i) => {
            console.log("item  ------  ", item);

            return <NavbarItem {...item} key={i} />;
          })}
        </div>
        <div className="navbar__items justify-center">
          {centerItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
        </div>
        <div className="navbar__items navbar__items--right">
          <a
            // onClick={onToggleChange}
            href="https://github.com/GeekyAnts/nativebase"
            className="bg-transparent ml-3 mt-1 border-0"
          >
            <GitHub />
          </a>
          {rightItems.map((item, i) => (
            <NavbarItem {...item} key={i} className="ml-3" />
          ))}
          {!disableColorModeSwitch && (
            <button
              onClick={onToggleChange}
              className="bg-transparent ml-3 p-0 border-0"
            >
              {isDarkTheme ? <Sun /> : <Moon />}
            </button>
            // <Toggle
            //   className={styles.displayOnlyInLargeViewport}
            //   aria-label="Dark mode toggle"
            //   checked={isDarkTheme}
            //   onChange={onToggleChange}
            // />
          )}
          <button
            onClick={onToggleChange}
            className="bg-gray-900 py-3 px-4 border-0 text-white ml-3 rounded"
          >
            Get Started <RightArrow className="ml-2" />
          </button>
        </div>
      </div>
      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        onClick={hideSidebar}
      />
      <div className="navbar-sidebar">
        <div className="navbar-sidebar__brand">
          <Logo
            className="navbar__brand"
            imageClassName="navbar__logo"
            titleClassName="navbar__title"
            onClick={hideSidebar}
          />

          {!disableColorModeSwitch && (
            <button
              onClick={onToggleChange}
              className="bg-transparent ml-3 p-0 border-0"
            >
              {isDarkTheme ? <Sun /> : <Moon />}
            </button>
            // <Toggle
            //   className={styles.displayOnlyInLargeViewport}
            //   aria-label="Dark mode toggle"
            //   checked={isDarkTheme}
            //   onChange={onToggleChange}
            // />
          )}
        </div>
        <div className="navbar-sidebar__items">
          <div className="menu">
            <ul className="menu__list">
              {centerItems.map((item, i) => (
                <NavbarItem mobile {...item} onClick={hideSidebar} key={i} />
              ))}
              {items.map((item, i) => (
                <NavbarItem mobile {...item} onClick={hideSidebar} key={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
