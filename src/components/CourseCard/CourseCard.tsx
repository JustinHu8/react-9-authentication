import React from "react";
import { useDispatch } from 'react-redux';
import { toggleEnrollment } from '../../features/courses/courseSlice';
import { Course } from "../../types/course";

const CourseCard: React.FC<Course> = ({ id, title, description, lessons, isEnrolled }) => {
  const dispatch = useDispatch();

  const handleEnrollToggle = () => {
    dispatch(toggleEnrollment(id)); // Dispatch the action with course ID
  };

  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Lessons: {lessons}</p>
      <button onClick={handleEnrollToggle}>
        {isEnrolled ? 'Unenroll' : 'Enroll Now'}
      </button>
    </div>
  );
};

export default CourseCard;