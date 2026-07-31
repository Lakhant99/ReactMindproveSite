import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/new-logo-mindprove_full.png";
import "./Header.css";

function Header() {
  return (
    <div className="mainmenu-area stricky">
      <div className="container">
        <div className="row">
          
          {/* Logo */}
          <div className="col-md-5">
            <div className="main-logo">
              <Link to="/">
                <img
                  src={logo}
                  className="logo-white-mindprov"
                  alt="MindProve Technologies Pvt Ltd"
                />
             </Link>
            </div>
          </div>

          {/* Menu */}
          <div className="col-md-5 menu-column">
            <nav className="main-menu">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>

              <div className="navbar-collapse collapse clearfix">
                <ul className="navigation clearfix">
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li>
                    <Link to="/about">About</Link>
                  </li>

                  <li>
                    <Link to="/services">Services</Link>
                  </li>

                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul> 
              </div>
            </nav>
          </div>

          {/* Button */}
          <div className="col-md-2">
            <div className="right-area">
              <div className="link_btn float_right">
                <button className="thm-btn">
                  GET A Quote
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Header;