import { useEffect } from 'react';
import CoursePill from '../CoursePill/CoursePill';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../../actions/courseActions';
import { RootState } from '../../types/index';
import { AppDispatch } from '../../store/store';

const CoursePillList = () => {
  const dispatch: AppDispatch = useDispatch();
  const { courses, loading, error } = useSelector((state: RootState) => state.coursesState);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="course-pill-list" style={{ display: 'flex', gap: '10px', overflowX: 'scroll' }}>
      {courses.map((course) => (
        <CoursePill key={course.id} title={course.title} />
      ))}
    </div>
  );
};

export default CoursePillList;