import React from "react";

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  lessons: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, lessons }) => {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Lessons: {lessons}</p>
    </div>
  );
};

export default CourseCard;