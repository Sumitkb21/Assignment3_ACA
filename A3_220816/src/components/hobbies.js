import React from "react";
import Navbar from "./navbar";

export default function Hobbies(){
    return(
        <div>
            <div className="typewriter">
  <div className="Heading" style={{ color: "#ff7300" }}>
    <pre> HOBBIES &amp; INTERESTS </pre>
  </div>
</div>
<Navbar/>
<>
  <p
    style={{
      fontSize: 30,
      textAlign: "center",
      margin: "10%",
      color: "turquoise"
    }}
  >
    1. <u>Basketball:</u>
    It has been a significant part of my life, and I have taken it to the state
    level. The adrenaline rush of stepping onto the court, dribbling the ball,
    and executing precise shots is an experience like no other. I have dedicated
    countless hours to honing my skills, practicing drills, and competing in
    intense matches. As a state-level player, I have had the privilege of
    representing my region in various tournaments. The thrill of being part of a
    team, strategizing, and collaborating to achieve victory is incredibly
    rewarding. Basketball has taught me the importance of teamwork, discipline,
    and perseverance. It has also helped me develop my physical fitness,
    coordination, and mental focus.
  </p>
  <div id="wrapper">
    <div id="home1">
      <video
        width={700}
        frameBorder={5}
        height={800}
        poster="images/video.jpg"
        controls="controls"
        preload="none"
      >
        <source type="video/mp4" src="V1.mp4" />
      </video>
    </div>
    <div id="home2">
      <video
        width={700}
        frameBorder={5}
        height={800}
        controls="controls"
        preload="none"
      >
        <source type="video/mp4" src="V2.mp4" />
      </video>
    </div>
  </div>
  <p
    style={{
      fontSize: 30,
      textAlign: "center",
      margin: "10%",
      color: "turquoise"
    }}
  >
    2. <u>Dance:</u>
    From a young age, dance has been my creative outlet and a source of joy. I
    have participated in numerous dance performances, but two events hold
    special significance for me. The first is the Fresher's night at my college,
    where I had the opportunity to showcase my skills and make lasting memories
    with my peers. The second is Galaxy, a renowned cultural festival at IIT
    Kanpur, where I performed in front of a large audience and received positive
    feedback. Dance allows me to express myself, communicate emotions, and
    connect with others. The rhythmic movements, graceful gestures, and
    synchronization with music create a captivating and mesmerizing experience.
    It also requires discipline, dedication, and constant practice to refine
    techniques and master different dance styles. Dance has taught me the value
    of self-expression, creativity, and the power of body language.
  </p>
  <div id="wrapper">
    <div id="home1">
      <video
        width={700}
        frameBorder={5}
        height={800}
        poster="images/video.jpg"
        controls="controls"
        preload="none"
      >
        <source type="video/mp4" src="V3.mp4" />
      </video>
    </div>
    <div id="home2">
      <video
        width={700}
        frameBorder={5}
        height={800}
        poster="images/video.jpg"
        controls="controls"
        preload="none"
      >
        <source type="video/mp4" src="V4.mp4" />
      </video>
    </div>
  </div>
  <p
    style={{
      fontSize: 30,
      textAlign: "center",
      margin: "10%",
      color: "turquoise"
    }}
  >
    3. <u>Cricket:</u>
    Like many Indians, I share a deep passion for cricket. It is more than just
    a sport; it is a national obsession and a unifying force. Whether playing
    with friends on dusty streets or watching intense matches on television,
    cricket has become an integral part of my life. Playing cricket allows me to
    experience the thrill of hitting boundaries, taking wickets, and diving for
    catches. It brings out my competitive spirit, tests my decision-making
    skills, and fosters camaraderie among teammates. Cricket has taught me the
    importance of teamwork, strategic thinking, and handling pressure situations
    with grace.
  </p>
  <iframe
    className="Imagecentre"
    frameBorder={10}
    width={1350}
    height={758}
    src="https://www.youtube.com/embed/ZT2ilX9MC1w"
    title="Last time in NZ: Super overs galore! | IND Vs NZ | Prime Video India"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen=""
  />
  <p
    style={{
      fontSize: 30,
      textAlign: "center",
      margin: "10%",
      color: "turquoise"
    }}
  >
    4. <u>Watching Movies and Anime:</u>
    In my leisure time, I indulge in the world of movies and anime. I enjoy
    immersing myself in captivating stories, vibrant characters, and stunning
    visuals. Movies offer a diverse range of genres and narratives that
    entertain, inspire, and provoke thought. Whether it's a thought-provoking
    drama, an action-packed adventure, or a heartwarming comedy, I find myself
    engrossed in the storytelling. Anime, with its distinct art style and
    engaging storytelling, provides a unique and immersive experience. It takes
    me on fantastical journeys, introduces me to richly developed characters,
    and explores profound themes. I appreciate the creativity, attention to
    detail, and emotional depth that anime often offers. Through movies and
    anime, I gain a broader perspective on different cultures, explore
    imaginative worlds, and discover new ideas. It is a form of entertainment
    that allows me to relax, escape reality for a while, and appreciate the art
    of storytelling. Overall, these hobbies not only bring joy and excitement to
    my life but also contribute to my personal growth, skill development, and
    cultural exploration. They are an integral part of who I am and continue to
    shape my experiences and interests.
  </p>
</>
        </div>
    )
}