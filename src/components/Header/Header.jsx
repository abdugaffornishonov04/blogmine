import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderListResponsive from "../parts/HeaderListResponsive";

const Header = () => {
  const [showHeaderOptionsAppear, setShowHeaderOptionsAppear] = useState(false);
  const [showHeaderResList, setshowHeaderResList] = useState(false);

  const showHeaderOptions = () => {
    setShowHeaderOptionsAppear((isTrue) => !isTrue);
  };

  const showResHeaderList = () => {
    setshowHeaderResList((isTrue) => !isTrue);
  };

  return (
    <header className="header">
      <a href="/" className="header-logo">
        Abdugaffor{"'"}s BLOG
      </a>
      <nav>
        <div className="header-hamburger-on-responsive">
          <button onClick={showResHeaderList}>
            <img src="/public/header-hamburger.png" alt="hamburger-menu" />
          </button>
        </div>
        <ul className="header-list">
          <li>
            <Link className="header-page-links" to="/">
              Home Page
            </Link>
          </li>
          <li>
            <Link className="header-page-links" to="allusers">
              All Blogs
            </Link>
          </li>
          <li>
            <Link className="header-page-links" to="allblogs">
              Categories
            </Link>
          </li>
        </ul>
      </nav>
      <HeaderListResponsive showHeaderResList={showHeaderResList} />
      <div className="header-options-wrapper">
        <button onClick={showHeaderOptions} className="options-btn">
          Options
        </button>
        <div
          className={
            showHeaderOptionsAppear
              ? "options-other-btns-appear"
              : "options-other-btns"
          }
        >
          <Link className="header-login">Log in</Link>
          <Link className="header-sign-up">Sign up</Link>
          <button className="header-dark-light">UZ/ENG</button>
        </div>
      </div>
    </header>
  );
};

export default Header;