import React from "react";
import memeimg from "../navbar/png-transparent-meme-soundboard-rage-comic-android-internet-meme-android-text-logo-meme.png";
import "./navbar.css";

function navbar() {
  return (
    <div className="parent-class">
      <div className="text">Meme Generator</div>
      <img src={memeimg} className="image"></img>
    </div>
  );
}

export default navbar;
