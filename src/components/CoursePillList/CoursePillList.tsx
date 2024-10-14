import { useEffect } from 'react';
import CoursePill from '../CoursePill/CoursePill';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../../features/courses/courseSlice';
import { RootState, AppDispatch } from '../../store/store';

const CoursePillList = () => {
  const dispatch: AppDispatch = useDispatch();
  const { courses, loading, error } = useSelector((state: RootState) => state.coursesState);

  useEffect(() => {
    if (courses.length === 0) {
        dispatch(fetchCourses());
    }
}, [dispatch, courses.length]);

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="course-pill-list" style={{ display: 'flex', gap: '10px', overflowX: 'scroll' }}>
      {courses.map((course) => (
        <CoursePill key={course.id} title={course.title} isEnrolled={course.isEnrolled} />
      ))}
    </div>
  );
};

export default CoursePillList;