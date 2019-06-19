import React from "react";
import PropTypes from 'prop-types';
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Menu = props => (
  <ul className="app__menu test">
    {props.children}
  </ul>
);

export const MenuItem = ({ text, path, className, onClick }) => (
  <li>
    <Link
      to={path}
      className={className}
      onClick={onClick}
    >{text}</Link>
  </li>
);

export const LjIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.941,34.24C23.797,47.097,36.52,59.819,49.25,72.551
      c4.946-10.602,12.749-18.402,23.357-23.35c-12.734-12.734-25.459-25.459-38.232-38.23C47.06,4.332,70.25,3.879,86.787,20.768
      c16.847,17.204,17.686,44.49,1.933,62.94c-15.611,18.285-42.869,21.59-62.516,7.463C6.053,76.684,2.741,51.459,10.941,34.24z
       M75.545,60.745c-6.476,3.439-11.302,8.271-14.757,14.752c6.151,1.208,12.16,2.387,18.356,3.604
      C77.932,72.911,76.752,66.899,75.545,60.745z M23.881,0.29c-0.249-0.243-0.958-0.284-1.31-0.117
      C12.489,4.977,5.043,12.438,0.183,22.495c-0.318,0.659-0.222,1.054,0.285,1.55c2.419,2.371,4.812,4.768,7.189,7.18
      c0.983,0.996,1.907,2.051,3.015,3.247c5.117-10.923,12.91-18.724,23.684-23.768C30.757,7.107,27.344,3.673,23.881,0.29z"/>
  </svg>
);

Menu.propTypes = {
  children: PropTypes.array.isRequired
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Menu;
