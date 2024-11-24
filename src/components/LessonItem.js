import React, { useState } from 'react';

function LessonItem({ image, name, description }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the state on click
  };

  return (
    <div 
      className={`lessonItem ${isClicked ? 'clicked' : ''}`} 
      onClick={handleClick}
    >
      <div 
        style={{ backgroundImage: `url(${image})` }} 
        className="lessonItem-image"
      ></div>
      <div className="lessonItem-content">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default LessonItem;
