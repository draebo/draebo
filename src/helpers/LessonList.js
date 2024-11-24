import React from "react";
import floorplan from "../assets/floorplan.jpg";
import roofframing from "../assets/roofframing.jpg";
import elevations from "../assets/elevationexample.jpg";
import sectionalelevation from "../assets/sectionalelevation.jpg";

export const LessonList = [
  {
    name: "Floor Plan",
    image: floorplan,
    description: `To create a floor plan, begin by constructing the walls using the line tool, ensuring you adhere to the specific dimensions and measurements provided. Once the outside walls are drawn, use the offset tool to move them outward by 150 units to define the outer boundaries of the structure. Next, offset the internal walls 50 units on both sides to establish the required space between rooms, and remove the original source lines to maintain clarity. Afterward, create door and window blocks to represent these essential features, positioning them accurately in the layout. Insert the doors and windows in the designated areas to match the floor plan's design. Finally, label each room with text, ensuring the text height is set to 8 units for proper readability and consistency.`,
  },
  {
    name: "Roof Framing",
    image: roofframing,
    description: `To create a roof framing plan, start by drawing the outline of the walls using hidden details to represent the building’s structure. Then, use the Polyline tool to trace the perimeter of the roof, ensuring it follows the outline of the walls. Measure 600 units from the walls all around the house to define the placement of the fascia board. Next, insert a ridge board along the length of the building to serve as the central support for the roof. For hip roofs, add hip rafters at a 45-degree angle to the ridge, ensuring they connect to the corners. Insert common rafters, spaced 600 units apart from rafter to rafter, to complete the framing. Label each roof member to clearly identify its role in the structure. Finally, place the title and scale information at the bottom of the drawing for reference and clarity.`,
  },
  {
    name: "Elevations",
    image: elevations,
    description: `To draw the elevations, begin by extending all major lines from the floor plan downward, including the roof, walls, doors, windows, and other openings. Next, establish a baseline for the elevation and measure the building's height from the ground to the top of the roof, using the following dimensions: 400 units to represent the distance from the ground level to the floor level, 800 units from the floor level to the bottom of the windows, 1200 units from the bottom of the windows to the top of the windows and doors, 1000 units from the top of the windows and doors to the bottom of the fascia board, 225 units for the size of the fascia board, and 2000 units from the bottom of the fascia to the top of the roof. These measurements will ensure that the elevation is accurately proportioned according to the building's design.`,
  },
  {
    name: "Sectional Elevation",
    image: sectionalelevation,
    description: `When creating a sectional elevation, several key components must be considered to ensure the structural integrity and functionality of the building. Starting from the ground up, include a 12mm floor screed, which is typically laid over the subfloor for leveling purposes. Beneath the screed, add the B.R.C (steel) for reinforcement, followed by a 100mm concrete slab that serves as the foundation for the floor. Below the slab, include a D.P.M. (damp proof membrane) to prevent moisture from rising, and a 75mm sand blinding to level and protect the membrane. The foundation should sit on a 150mm layer of hardcore for stability, leading up to a 200mm foundation wall, which is essential for supporting the structure. Underneath the wall, use a 225 x 600 concrete footing to distribute the load evenly.

For the upper components, a 150mm window lintel provides support above openings, while a 50 x 150 wall plate supports the roof structure. The soffit and fascia board are crucial for the eaves, ensuring both aesthetic appeal and protection against the elements. On the roof, the t1-11 plywood provides the sheathing, covered by tar paper for waterproofing, followed by asphalt shingles for roofing. Finally, the asphalt cap protects the ridge of the roof, completing the sectional elevation and ensuring both function and durability.`,
  },
];

function LessonItem({ name, image, description }) {
  const descriptionLines = description.split('\n'); // Split the description into lines

  return (
    <div className="lessonItem">
      <div
        className="lessonImage"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="lessonItem-content">
        <h1>{name}</h1>
        <ul>
          {descriptionLines.map((line, index) => (
            <li key={index}>{line.trim()}</li> // Add list items for each line
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Lessons() {
  return (
    <div className="lessons">
      <h1 className="lessonTitle">Lessons</h1>
      <div className="lessonList">
        {LessonList.map((lesson, index) => (
          <LessonItem
            key={index}
            name={lesson.name}
            image={lesson.image}
            description={lesson.description}
          />
        ))}
      </div>
    </div>
  );
}
