import React from 'react';
import { Course } from '../../types/course';

interface CourseTileProps extends Course {
  handleEnrollToggle: () => void;
}

const CourseTile: React.FC<CourseTileProps> = ({ title, description, lessons, isEnrolled, handleEnrollToggle }) => {
  return (
    <div className="course-tile">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Lessons: {lessons}</p>
      <button onClick={handleEnrollToggle}>
        {isEnrolled ? 'Unenroll' : 'Enroll Now'}
      </button>
    </div>
  );
};

export default CourseTile;