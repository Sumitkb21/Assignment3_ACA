import React from "react";
import Navbar from "./navbar";

export default function Home(){
    return(
        <div>
            
            <>
            <div className="typewriter">
  <div className="Heading" style={{ color: "#ff7300" }}>
    <pre> HI THERE! WELCOME TO MY WEBPAGE </pre>
  </div>
</div>
<Navbar/>;
  <h1
    className="header"
    style={{ color: "beige", fontStyle: "italic", fontSize: 40 }}
  >
    <u>
      <pre> ABOUT Me:</pre>
    </u>
  </h1>
  <br />
  <br />
  <br />
  <div>
    <div style={{ float: "left" }}>
      <img src="1.jpg" height="400px" />
    </div>
    <div style={{ float: "inline-start" }}>
      <pre
        style={{
          fontSize: 25,
          fontFamily: '"Times New Roman", Times, serif',
          color: "bisque",
          textAlign: "center"
        }}
      >
        {"\n"}
        {"        "}Greetings! Allow me to paint a vivid picture of who I am. I
        am an adventurous soul,{"\n"}
        {"        "}constantly seeking new experiences and embracing the wonders
        of life. With an insatiable{"\n"}
        {"        "}curiosity, I thrive on exploring the realms of knowledge,
        whether it be in the vast expanse{"\n"}
        {"        "}of literature, the captivating world of art, or the marvels
        of science. As a passionate{"\n"}
        {"        "}dreamer and avid storyteller, I find solace in the realms of
        creativity, where imagination{"\n"}
        {"        "}knows no bounds. Deeply compassionate, I believe in the
        power of empathy and strive to {"\n"}
        {"        "}make a positive impact on the lives of those around me.
        Armed with a resilient spirit and{"\n"}
        {"        "}unwavering determination, I am ready to embark on new
        journeys, overcome challenges, {"\n"}
        {"        "}and create a life filled with purpose. In essence, I am a
        tapestry woven with countless{"\n"}
        {"        "}threads of curiosity, passion, empathy, and resilience,
        eager to unravel the mysteries of{"\n"}
        {"        "}the world and leave an indelible mark on its canvas.
      </pre>
    </div>
  </div>
  <pre className="header" style={{ color: "white" }} />
</>

        </div>
    )
}