import React from "react";

const Thirdpage = () => {
  return (
    <div
      id="secondpage"
      className="w-full  overflow-hidden  new-amsterdam-regular text-white"
    >
      {/* CREATIVE BRILLIANCE
  veiwership of 10MIllion+ 
  200+ PROJECTS
  8 TECHNOLOGIES MASTERED
  currently looking for work */}
      <div id="secondblock">
        <h1>WHAT I DO ?</h1>
        

        <div className="grandparent flex justify-between items-center">
          <div className="">
            <h2 className="text-6xl">CINEMATOGRAPHY</h2>
            <p className="text-2xl w-60">
              
My passion for cinematography lies in crafting compelling visual narratives, capturing raw emotions, and weaving artistry into each frame to tell unforgettable stories through film.
            </p>
          </div>

          <video
            className="videoitis to-blue-600 "
            src="/cinematography/thirdchild (1).mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>

        <div className="grandparent flex justify-between items-center">
          <video
            className="videoitis to-blue-600 "
            src="/cinematography/firstchild (1).mp4"
            autoPlay
            loop
            muted
          ></video>
          <div className="">
            <h2 className="text-6xl">FILM CRAFT</h2>
            <p className="text-2xl  text-right">
            ignites my passion through storytelling, where blending visuals and sound creates immersive experiences, evokes emotions, and brings unique narratives to life on screen.
            </p>
          </div>
        </div>

        {/* <div className="grandparent flex justify-evenly items-center">
<video className="videoitis to-blue-600 " src="/cinematography/fourthchild (1).mp4" autoPlay loop muted ></video>
<div className="widtextparent">

<h2>
    <div>M</div>
    <div>O</div>
    <div>B</div>
    <div>I</div>
    <div>L</div>
    <div>E</div>
</h2>

  <h2>
  <div>V</div>
  <div>I</div>
  <div>E</div>
  <div>W</div>

  </h2>

</div>
<video className="videoitis to-blue-600 " src="/cinematography/fourthchild (1).mp4" autoPlay loop muted ></video>
<div className="">
        <h2 className="text-6xl">FILM MAKING</h2>
        <p className="text-xl w-60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima iure similique culpa ipsa aliquid non quasi suscipit aperiam deleniti et!</p>
       </div>
</div> */}
      </div>
    </div>
  );
};

export default Thirdpage;
