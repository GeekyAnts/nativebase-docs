import React, { useCallback, useState, useEffect } from 'react';
import clsx from 'clsx';
import SearchBar from '@theme/SearchBar';
import useThemeContext from '@theme/hooks/useThemeContext';
import { useThemeConfig } from '@docusaurus/theme-common';
import useHideableNavbar from '@theme/hooks/useHideableNavbar';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import useWindowSize, { windowSizes } from '@theme/hooks/useWindowSize';
import NavbarItem from '@theme/NavbarItem';
import Logo from '@theme/Logo';
import IconMenu from '@theme/IconMenu';
import Moon from '../img/Moon';
import Sun from '../img/Sun';
import GitHub from '../img/GitHub';
import Discord from '../img/Discord';
import RightArrow from '../img/RightArrow';
import styles from './styles.module.css'; // retrocompatible with v1

const DefaultNavItemPosition = 'left'; // If split links by left/right
// if position is unspecified, fallback to right (as v1)

function splitNavItemsByPosition(items) {
  const leftItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === 'left'
  );
  const rightItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === 'right'
  );
  return {
    leftItems,
    rightItems,
  };
}

function Navbar() {
  React.useEffect(() => {
    if (window.location.href.indexOf('/docs/') !== -1) {
      document.getElementsByClassName('main-wrapper')[0].className +=
        ' main-wrapper-docs';
    }
  }, []);
  const {
    navbar: { items, hideOnScroll, style },
    colorMode: { disableSwitch: disableColorModeSwitch },
  } = useThemeConfig();
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
  return (
    <nav
      id="tailwind"
      ref={navbarRef}
      className={clsx('navbar', 'navbar--fixed-top', {
        'navbar--dark': style === 'dark',
        'navbar--primary': style === 'primary',
        'navbar-sidebar--show': sidebarShown,
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
            titleClassName={clsx('navbar__title', {
              [styles.hideLogoText]: isSearchBarExpanded,
            })}
          />

          {leftItems.map((item, i) => {
            return <NavbarItem {...item} key={i} />;
          })}
        </div>
        <div className="navbar__items navbar__items--right">
          {rightItems.map((item, i) => {
            switch (item.label) {
              case 'GitHub':
                return (
                  <a
                    target="_blank"
                    href={item.to}
                    className="hidden md:flex navbar__item navbar__link"
                  >
                    <GitHub fill={isDarkTheme ? '#EAEAEA' : '#4C4C4C'} />
                  </a>
                );
              // case 'Docs':
              //   return (
              //     <a
              //       href={item.to}
              //       className={`text-white bg-primary-400 py-2 px-4 border-0 ml-4 rounded hidden md:inline-block navbar__item navbar__link`}
              //     >
              //       Get Started
              //       <RightArrow fill={'#fff'} className="ml-2" />
              //     </a>
              //   );
              case 'Theme':
                return (
                  !disableColorModeSwitch && (
                    <button
                      onClick={onToggleChange}
                      className="bg-transparent border-0 hidden md:flex navbar__item navbar__link"
                    >
                      {isDarkTheme ? (
                        <Sun fill={isDarkTheme ? '#EAEAEA' : '#4C4C4C'} />
                      ) : (
                        <Moon fill={isDarkTheme ? '#EAEAEA' : '#4C4C4C'} />
                      )}
                    </button>
                    // <Toggle
                    //   className={styles.displayOnlyInLargeViewport}
                    //   aria-label="Dark mode toggle"
                    //   checked={isDarkTheme}
                    //   onChange={onToggleChange}
                    // />
                  )
                );
              case 'Discord':
                return (
                  <a
                    target="_blank"
                    href={item.to}
                    className="border-0 hidden md:flex navbar__item navbar__link"
                  >
                    <Discord fill={isDarkTheme ? '#EAEAEA' : '#4C4C4C'} />
                  </a>
                );
              case 'Market':
                return <NavbarItem {...item} key={i} />;
              default:
                return <NavbarItem {...item} key={i} />;
            }
          })}
          <SearchBar
            handleSearchBarToggle={setIsSearchBarExpanded}
            isSearchBarExpanded={isSearchBarExpanded}
          />
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
              {items
                .slice(0)
                .reverse()
                .map((item, i) => (
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
