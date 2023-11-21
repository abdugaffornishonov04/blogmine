import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HeaderListResponsive = ({ showHeaderResList }) => {
  return (
    <ul
      className={
        showHeaderResList
          ? "header-list-responsive"
          : "header-list-responsive-none"
      }
    >
      <li>
        <Link className="header-page-links" to="/">
          Home Page
        </Link>
      </li>
      <li>
        <Link className="header-page-links" to="allusers">
          All Users
        </Link>
      </li>
      <li>
        <Link className="header-page-links" to="allblogs">
          All Blogs
        </Link>
      </li>
    </ul>
  );
};

HeaderListResponsive.propTypes = {
  showHeaderResList: PropTypes.bool.isRequired, // adjust the prop type as needed
};

export default HeaderListResponsive;
