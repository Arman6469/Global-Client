import React from "react";
import "./style.css";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logogit from "../images/logogit.png"
import mard_icon from "../images/mard-icon-01.png";
import search_button from "../images/search-01.png"



export default function Header() {
  return (
    <div>
      <div className="navbar container-fluid">
        <Link to="/" className="homelink">
          {" "}
          <img src={logogit} alt="logogit" className="logogit" />
        </Link>
        <div className="navtools">
          <ul className="navul">
            <li className="navitem">
              <a href="#works" className="link" id="navlinks">
                Դասընթացներ
              </a>
            </li>
            <div className="dropdown">
              <button
                className="navitem btn btn-secondary dropdown-toggle service"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Ծառայություններ
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="pomidor.html">
                  Կայքերի մշակում
                </a>
                <a className="dropdown-item" href="pomidor.html">
                  Խաղերի ստեղծում
                </a>
                <a className="dropdown-item" href="pomidor.html">
                  Արհեստական ինտելեկտ
                </a>
              </div>
            </div>
            <li className="navitem">
              <a href="#abou" className="link" id="navlinks">
                Մեր մասին
              </a>
            </li>
            <li className="navitem">
              <a href="pomidor.html" className="link" id="navlinks">
                <img
                  src={mard_icon}
                  alt="mard-icon-01"
                  className="nav-button"
                />
              </a>
            </li>
            <li className="navitem">
              <a href="pomidor.html" className="link" id="navlinks">
                <img
                  src={search_button}
                  alt="mard-icon-01"
                  className="nav-button"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
