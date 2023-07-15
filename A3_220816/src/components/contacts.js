import React from "react";
import Navbar from "./navbar";

export default function Contacts(){
    return(
        <div>
            <div className="typewriter">
  <div className="Heading" style={{ color: "#ff7300" }}>
    <pre> CONTACT INFORMATION </pre>
  </div>
</div>
<Navbar/>
<>
  <pre
    style={{
      fontSize: 30,
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      color: "#ff7300"
    }}
  >
    {" "}
    {"\n"}
    {"        "}Please feel free to contact Me or reach out via any of my
    following profiles:{"\n"}
    {"    "}
  </pre>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <pre style={{ fontSize: 30, color: "white", fontStyle: "italic" }}>
    {"            "}
    <a
      href="https://www.linkedin.com/in/prem-kansagra-05909b274/"
      className="fa fa-linkedin"
    />
    {"  "}
    <a
      href="https://www.linkedin.com/in/prem-kansagra-05909b274/"
      style={{ color: "#ffffff" }}
    >
      Linkedin
    </a>
    {"\n"}
    {"            "}
    <a
      href="https://www.instagram.com/prem_kansagra/"
      className="fa fa-instagram"
    />
    {"  "}
    <a
      href="https://www.instagram.com/prem_kansagra/"
      style={{ color: "#ffffff" }}
    >
      Instagram
    </a>
    {"\n"}
    {"            "}
    <a href="https://pin.it/30ePFqX" className="fa fa-pinterest" />
    {"  "}
    <a href="https://pin.it/30ePFqX" style={{ color: "#ffffff" }}>
      Pinterest
    </a>
    {"\n"}
    {"            "}
    <a href="mailto: prem.kansagra1234@gmail.com" className="fa fa-google" />
    {"  "}
    <a href="mailto: prem.kansagra1234@gmail.com" style={{ color: "#ffffff" }}>
      Gmail
    </a>
    {"\n"}
    {"        "}
  </pre>
</>
        </div>
    )
}