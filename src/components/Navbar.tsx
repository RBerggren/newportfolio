import React from "react";
import "./Navbar.scss";

const rootClassName = "navbar";

const Navbar = () => {
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}--container`}>
        <div className={`${rootClassName}--links`}>
          <img className={`${rootClassName}--logo`} src="./img/logo.png" />
          <ul className={`${rootClassName}--list`}>
            <li className={`${rootClassName}--listItem`}>Home</li>
            <li className={`${rootClassName}--listItem`}>Works</li>
            <li className={`${rootClassName}--listItem`}>About</li>
            <li className={`${rootClassName}--listItem`}>Contact</li>
          </ul>
        </div>

        <div className={`${rootClassName}--icons`}>
          <img className={`${rootClassName}--icon`} src="./img/search.png" />
          <button> Hire me now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
