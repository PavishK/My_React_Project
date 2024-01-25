import React from "react";
import { Outlet, Link } from "react-router-dom";
import './css/MainLayout.css';
import './css/Service.css'

/*import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";*/

export default function Layout() {
  return (
    <div>
      <nav >
        <ul className="nav-bar">
          <li>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
 
  );
}