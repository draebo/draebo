import React from 'react';
import { LessonList } from "../helpers/LessonList";
import LessonItem from "../components/LessonItem";
import "../styles/Lessons.css"
function Lessons() {
  return (
    <div className="lessons">
      <h1 className="lessonTitle">Building Drawings</h1>
      <div className="lessonList">
        {LessonList.map((lessonItem, key) => (
          <LessonItem
            key={key}
            image={lessonItem.image} 
            name={lessonItem.name} 
            description={lessonItem.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Lessons;
