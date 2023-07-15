import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <React.Fragment>
        <>
  <ul className="navbartext">
    <li>
      <NavLink style={{ color: "white" }} to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink style={{ color: "white" }} to="/education">
        Education
      </NavLink>
    </li>
    <li>
      <NavLink style={{ color: "white" }} to="/achievements">
        Achievements
      </NavLink>
    </li>
    <li>
      <NavLink style={{ color: "white" }} to="/hobbies">
        Hobbies
      </NavLink>
    </li>
    <li>
      <NavLink style={{ color: "white" }} to="/contacts">
        Contacts
      </NavLink>
    </li>
    <li>
      <NavLink
        className="adviseform"
        style={{ color: "#ffffff" }}
        to="/advise"
      >
        Advise
      </NavLink>
    </li>
  </ul>
  <pre>
    {"\n"}
    {"\n"}
    {"\n"}
    {"\n"}
    {"\n"}
    {"        "}
    <hr className="line" style={{ color: "white" }} />
    {"\n"}
    {"    "}
  </pre>
</>

        </React.Fragment>
    )
}