import React from "react";
import { Course } from "../../types/course";

const CourseCard: React.FC<Course> = ({ title, description, lessons }) => {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Lessons: {lessons}</p>
    </div>
  );
};

export default CourseCard;