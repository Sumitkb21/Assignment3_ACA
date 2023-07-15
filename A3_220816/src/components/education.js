import React from "react";
import Navbar from "./navbar";

export default function Education(){
    return(
        <div>
            
            <div className="typewriter">
  <div className="Heading" style={{ color: "#ff7300" }}>
    <pre> EDUCATION </pre>
  </div>
</div>
<Navbar/>;
<>
  <pre
    style={{
      textAlign: "center",
      fontSize: 30,
      fontFamily: '"Times New Roman", Times, serif',
      color: "white"
    }}
  >
    {"        "}STUDIED AT THE FOLLOWING PLACES:{"\n"}
    {"\n"}
    {"        "}1. SCHOOL:{"\n"}
    {"\n"}
    {"        "}TGES{"   "}S.N.KANSAGRA SCHOOL (RAJKOT):{"\n"}
    {"        "}(LKG to CLASS 8th){"\n"}
    {"\n"}
    {"        "}
    <img className="Imagecentre" src="1.png" width="1000px" />
    {"\n"}
    {"\n"}
    {"        "}
    <iframe
      className="Imagecentre"
      src="banner.mp4"
      height="500px"
      width="1000px"
    />
    {"\n"}
    {"\n"}
    {"        "}2. EXTRA CLASSES / COACHING :{"\n"}
    {"\n"}
    {"        "}ALLEN CAREER INSTITUTE (RAJKOT):{"\n"}
    {"        "}(CLASS 6-12th){"\n"}
    {"\n"}
    {"        "}
    <img className="Imagecentre" src="allenrjt.jpeg" width="1000px" />
    {"\n"}
    {"    "}
  </pre>
  <pre
    style={{
      textAlign: "center",
      fontSize: 30,
      fontFamily: '"Times New Roman", Times, serif',
      color: "rgb(0, 0, 0)",
      backgroundColor: "#ffffff"
    }}
  >
    {"        "}
    <br />
    {"\n"}
    {"        "}3. CURRENTLY STUDYING AT :{"\n"}
    {"\n"}
    {"        "}
    <p
      style={{
        textAlign: "center",
        fontSize: 40,
        fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
        color: "rgb(0, 0, 0)"
      }}
    >
      INDIA's MOST PRESTIGIOUS and PROFOUND INSTITUTE:{"\n"}
      {"            "}
    </p>
    <pre
      style={{
        textAlign: "center",
        fontSize: 60,
        fontFamily:
          '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif',
        color: "#ff7300"
      }}
    >
      {"  "}INDIAN INSTITUTE OF TECHNOLOGY, KANPUR{"\n"}
      {"    "}(Btech, Computer Science Engineering){" "}
    </pre>
    <img
      className="LOGO"
      src="Logo.png"
      height="500px"
      style={{ alignItems: "center" }}
    />
    <p />
    <br/><br/><br/><br/><br/>
  </pre>
</>
        </div>
    )
}