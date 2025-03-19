"use client"; // Ensure your environment supports this syntax
import React, { useState } from "react";
import { detail } from "./Main"; // Ensure detail is correctly defined
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

function ComTranslate({ englishContent, persionContent }: detail) {
  // Function to speak the English content
  const speakEnglishContent = () => {
    const utterance = new SpeechSynthesisUtterance(englishContent);
    speechSynthesis.speak(utterance);
  };

  const [hidden, setHidden] = useState(false);

  const click = () => {
    setHidden((prev) => !prev);
  };

  return (
    <div>
      <p>
        <FontAwesomeIcon
          icon={faGlobe}
          onClick={click}
          className="cursor-pointer mr-1"
        />
        <FontAwesomeIcon
          icon={faVolumeUp}
          onClick={speakEnglishContent}
          className="cursor-pointer mr-1"
        />
        {englishContent}
      </p>
      {hidden && <p className="persian-content">{persionContent}</p>}{" "}
      {/* It should be persianContent, not persionContent */}
    </div>
  );
}

export default ComTranslate;
