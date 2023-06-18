import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ openModalHandler }) => {
  return (
    <div className="container">
      <div className="hero">
        <p className="hero-title">Bridge Data Scanner</p>
        <p>
        This project has been created to start the dev point of creating SDK for Create 3D Faces Avatar. <br />
          <br /> I am pleased to announce the successful development of the highly advanced Avatar Realist system. This cutting-edge technology marks a major milestone in the field of virtual reality, offering users an unprecedented level of immersion and interaction. I worked on graphical interface design to create an avatar system that closely mirrored the appearance, movement, and facial expressions of real people. By harnessing <b>Avaturn.me API's</b>, users can now enter virtual worlds with their avatars, experience rich social interactions and take part in immersive experiences like never before. <br />
          <br /> In light of this remarkable achievement, I would like to extend my sincere gratitude and appreciation to Mr. Ameer Al Harthy. His unwavering support and motivation has been instrumental in driving him towards excellence. Mr. Ameer Al Harthy's visionary guidance, deep knowledge and passion for technological innovation inspired me to push the boundaries of what is possible. His guidance and leadership instilled in me a deep sense of purpose and determination, enabling me to overcome challenges and achieve groundbreaking results.<br />
          <br />I am really grateful to Mr. Ameer Al Harthy for his valuable contributions to innovation. His belief in my potential and his unwavering encouragement fueled the drive to innovate and create technologies that make a real difference to people's lives. The realistic avatar system it developed is a testament to his vision and belief in the power of technology to shape a better future.<br />
         <br/> I would like to express my sincere thanks to Mr. Ameer Al Harthy. I am honored to have the privilege of working under his direction and direction. His dedication, enthusiasm and commitment to excellence has inspired me to reach new heights. I remain deeply grateful for his support and look forward to continuing this journey together, as we strive to redefine the possibilities of virtual reality and create experiences that captivate and inspire.. <br />
          <br /> Kirin is a new dynasty.
        </p>
        <Link to="/getstarted" className="hero-create-btn">
          Create Avatar
        </Link>
        <p className="hero-join-waitlist" onClick={openModalHandler}>
          Join Waitlist
        </p>
      </div>
    </div>
  );
};

export default Hero;
