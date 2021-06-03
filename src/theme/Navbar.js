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
      setIsLandingPage(false);
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
  const [isLandingPage, setIsLandingPage] = useState(true);
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
  const nativeBaseV2Color = !isDarkTheme ? 'text-gray-800' : 'text-gray-100';
  const nativeBaseV2ColorMobile = !isDarkTheme
    ? 'text-gray-200'
    : 'text-gray-100';
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
      // style={{ paddingLeft: '2rem' }}
    >
      <div className={`navbar__inner  ${isLandingPage ? 'lg:px-4' : ''}`}>
        <div
          className={`flex px-2 justify-around mx-auto md:px-4 lg:px-0 w-full  ${
            isLandingPage ? 'max-w-6xl' : ''
          }`}
        >
          <div className="navbar__items ">
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
              if (item.label === 'Looking for v2.0')
                return (
                  <div
                    key={i}
                    className={`hidden xl:block text-base ${nativeBaseV2Color}`}
                  >
                    Looking for{' '}
                    <a
                      href="https://v2.nativebase.io/"
                      target="_blank"
                      className="leading-5 text-secondary-50"
                    >
                      v2.0
                    </a>
                    <span>?</span>
                  </div>
                );
              else return <NavbarItem {...item} key={i} />;
            })}
          </div>
          <div className="navbar__items navbar__items--right max-w-3xl">
            <SearchBar
              handleSearchBarToggle={setIsSearchBarExpanded}
              isSearchBarExpanded={isSearchBarExpanded}
            />
            {rightItems.map((item, i) => {
              switch (item.label) {
                case 'GitHub':
                  return (
                    <a
                      target="_blank"
                      key={i}
                      href={item.to}
                      className="hidden px-0 mr-4 lg:px-3 lg:mr-0 md:flex navbar__item navbar__link"
                    >
                      <GitHub fill={isDarkTheme ? '#EAEAEA' : '#777e86'} />
                    </a>
                  );
                case 'Docs':
                  return (
                    <a
                      href={item.to}
                      key={i}
                      className={`${
                        !isDarkTheme ? 'text-gray-500' : 'text-white'
                      } px-0 border border-solid ${
                        !isDarkTheme ? 'border-gray-200' : 'border-gray-600'
                      }  hover:bg-gray-400  font-semibold py-1 px-5 rounded no-underline hidden md:inline-block`}
                    >
                      Docs
                    </a>
                  );
                case 'HireUs':
                  return (
                    <a
                      href={item.to}
                      key={i}
                      className={`border-0 ${
                        !isDarkTheme ? 'text-gray-500' : 'text-white'
                      }
                       px-0 border border-solid ${
                         !isDarkTheme ? 'border-gray-200' : 'border-gray-600'
                       } font-semibold py-1 rounded no-underline hidden md:inline-block px-2 ml-4`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="h-2 w-2 md:h-5 md:w-5 flex-no-shrink fill-current -mb-1 mr-2"
                        viewBox="0 0 41.5 41.265"
                      >
                        <image
                          id="Image_25"
                          data-name="Image 25"
                          width="41.5"
                          height="41.265"
                          xlinkHref="data:image/png;base64,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"
                        />
                      </svg>
                      <span>Hire Us</span>
                    </a>
                  );
                case 'Theme':
                  return (
                    !disableColorModeSwitch && (
                      <button
                        key={i}
                        onClick={onToggleChange}
                        className="bg-transparent px-0 mr-3 lg:px-3 border-0 hidden md:flex navbar__item navbar__link"
                      >
                        {isDarkTheme ? (
                          <Sun
                            key={i}
                            fill={isDarkTheme ? '#EAEAEA' : '#777e86'}
                          />
                        ) : (
                          <Moon
                            key={i}
                            fill={isDarkTheme ? '#EAEAEA' : '#777e86'}
                          />
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
                      key={i}
                      target="_blank"
                      href={item.to}
                      className="border-0 hidden px-0 mr-4 lg:mr-0 lg:px-3 md:flex navbar__item navbar__link"
                    >
                      <Discord
                        key={i}
                        fill={isDarkTheme ? '#EAEAEA' : '#777e86'}
                      />
                    </a>
                  );
                case 'Market':
                  return <NavbarItem key={i} {...item} key={i} />;
                default:
                  return <NavbarItem key={i} {...item} key={i} />;
              }
            })}
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
                {items.slice(0).map((item, i) => {
                  if (item.label === 'Looking for v2.0')
                    return (
                      <div
                        key={i}
                        className={`text-base px-4 py-1`}
                        style={{ color: !isDarkTheme ? '#606770' : '#DADDE1' }}
                      >
                        Looking for{' '}
                        <a
                          href="https://v2.nativebase.io/"
                          target="_blank"
                          className="leading-5 text-secondary-50"
                        >
                          v2.0
                        </a>
                        <span>?</span>
                      </div>
                    );
                  return (
                    <NavbarItem
                      mobile
                      {...item}
                      onClick={hideSidebar}
                      key={i}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
