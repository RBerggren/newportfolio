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

        <button> Contact </button>
      </div>
    </div>
  );
};

export default Navbar;
