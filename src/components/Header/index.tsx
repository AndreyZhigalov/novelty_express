import React from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { setShowForm } from '../../Redux/slices/contactFormSlice';
import {
  setSearchValue,
  setShowMenu,
  setShowSearch,
  screenSizeCheck,
} from '../../Redux/slices/headerSlice';
import useScreenSize from '../../hooks/useScreenSize';

import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.svg';
import menuIcon from '../../assets/img/icons/menu.svg';
import searchIcon from '../../assets/img/icons/search.svg';
import closeMenuIcon from '../../assets/img/icons/close_blue.svg';

import './header.scss';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const { searchValue, showMenu, showSearch } = useAppSelector((state) => state.headerInputsSlice);
  const screenSize = useScreenSize();

  const onChangeInput = () => {
    let text = searchInputRef.current?.value;
    dispatch(setSearchValue(text as string));
  };

  React.useEffect(() => {
    dispatch(screenSizeCheck(screenSize.width));
  }, [screenSize.width]);

  const hideMenuOnClickLink = () => {
    if (screenSize.width <= 1100) {
      dispatch(setShowMenu());
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const onCLickLogo = () => {
    if (screenSize.width <= 1100) {
      dispatch(setShowMenu(false));
      dispatch(setShowSearch(false));
      window.scrollTo(0, 0);
    } else {     
      window.scrollTo(0, 0);
    }
  };

  return (
    <header className="header">
      {screenSize?.width < 1100 && (
        <img
          src={showMenu ? closeMenuIcon : menuIcon}
          alt="menu Icon"
          onClick={() => dispatch(setShowMenu())}
        />
      )}
      <Link to={''} onClick={onCLickLogo}>
        <img src={logo} alt="Novelty Express Logo" className="logo" />
      </Link>
      {!showSearch && screenSize.width < 1100 && (
        <img
          src={searchIcon}
          alt="external search icon"
          onClick={() => dispatch(setShowSearch(true))}
        />
      )}
      {showMenu && (
        <nav className="navbar">
          <div className="navbar__links">
            <Link to={'about-us'} onClick={hideMenuOnClickLink}>
              ?? ??????
            </Link>
            {!showSearch && (
              <>
                <Link to={'our-offer'} onClick={hideMenuOnClickLink}>
                  ?????? ???? ????????????????????
                </Link>
                <Link to={'stock'} onClick={hideMenuOnClickLink}>
                  ??????????
                </Link>
                <Link to={'contacts'} onClick={hideMenuOnClickLink}>
                  ????????????????
                </Link>
              </>
            )}
            {showSearch && (
              <div className="search__block">
                <img src={searchIcon} alt="search icon" onClick={() => dispatch(setShowSearch())} />
                <input
                  type="text"
                  ref={searchInputRef}
                  value={searchValue}
                  onChange={onChangeInput}
                  onKeyDown={(event) => {if(event.code === 'Enter' || event.code === "Escape") dispatch(setShowSearch())}}
                  className={showSearch ? 'search-input focused' : 'search-input'}
                />
                <img
                  src={closeMenuIcon}
                  alt="search_close_icon"
                  onClick={() => dispatch(setSearchValue(''))}
                />
                <article className="search-result">
                  <p>
                    <mark></mark>
                  </p>
                </article>
              </div>
            )}
          </div>
          {!showSearch && screenSize.width > 1200 && (
            <img
              src={searchIcon}
              alt="external search icon"
              onClick={() => dispatch(setShowSearch())}
            />
          )}

          <div className="navbar__contacts">
            <p>+7 495 118 40 48</p>
            <button className="navbar__signIn-Button">???????????? ??????????????</button>
            <button className="navbar__form-button" onClick={() => dispatch(setShowForm())}>
              ???????????????? ????????????
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
