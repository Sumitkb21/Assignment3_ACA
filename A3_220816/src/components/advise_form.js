import React from "react";
import Navbar from "./navbar";

export default function Advise_form(){
    return(
        <div>
            <div className="typewriter">
  <div className="Heading" style={{ color: "#ff7300" }}>
    <pre> QUERIES &amp; SUGGESTIONS </pre>
  </div>
</div>
<Navbar/>
<>
  <p
    style={{
      textAlign: "center",
      fontSize: 35,
      fontFamily:
        '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif',
      color: "darkseagreen"
    }}
  >
    For any queries/suggestions please Fill the following details:
  </p>
  <pre
    style={{
      textAlign: "center",
      color: "#ff7300",
      fontFamily:
        '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
      fontSize: 25
    }}
  >
    {"        "}Your Full Name:{"        "}
    <input
      style={{
        fontSize: 25,
        fontFamily: '"Courier New", Courier, monospace',
        color: "beige",
        backgroundColor: "#000000"
      }}
      type="text"
    />
    {"\n"}
    {"\n"}
    {"        "}Email ID:{"                  "}
    <input
      style={{
        fontSize: 25,
        fontFamily: '"Courier New", Courier, monospace',
        color: "beige",
        backgroundColor: "#000000"
      }}
      type="text"
    />
    {"\n"}
    {"\n"}
    {"        "}Contact Number:{"     "}
    <input
      style={{
        fontSize: 25,
        fontFamily: '"Courier New", Courier, monospace',
        color: "beige",
        backgroundColor: "#000000"
      }}
      type="text"
    />
    {"\n"}
    {"\n"}
    {"        "}
  </pre>
  <pre
    style={{
      color: "#ff7300",
      fontFamily:
        '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
      fontSize: 25
    }}
  >
    {"            "}Doubt/Suggestion:{"           "}
    <input
      style={{
        height: 50,
        width: 1000,
        fontSize: 25,
        fontFamily: '"Courier New", Courier, monospace',
        color: "beige",
        backgroundColor: "#000000"
      }}
      type="text"
    />
    {"\n"}
    {"        "}
  </pre>
  <input
    className="Imagecentre"
    type="button"
    style={{
      fontSize: 30,
      textAlign: "center",
      height: 70,
      width: 220,
      backgroundColor: "darkseagreen",
      color: "black",
      fontFamily:
        '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'
    }}
    defaultValue="SUBMIT"
  />
  <br />
  <br />
  <div>
    <div style={{ float: "left" }}>
      <pre style={{ fontSize: 200 }}>😒{"  "}</pre>
    </div>
    <div style={{ float: "left" }}>
      <img className="Imagecentre" src="GIF.gif" width={500} height={420} />
    </div>
    <div style={{ float: "left" }}>
      <pre style={{ fontSize: 200 }}>{"  "}😤</pre>
    </div>
  </div>
</>
        </div>
    )
}