import React from "react";
import SignIn from "./SignIn";
import logo from "./assets/logo.svg";

function Header() {
  return (
    <div className="outer-header">
      <div className="inner-header">
        <div className="left-inner-head">
          <a>
            <img src={logo} alt="Beneficence"></img>
          </a>
        </div>
        <div className="right-inner-head">
          <div className="">
            <div className="header-opt">Start fundraising</div>
            <div className="header-opt">Explore</div>
            <div className="header-opt">Learn</div>
            <div className="header-opt">About</div>
            <div className="header-opt">
              <SignIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
