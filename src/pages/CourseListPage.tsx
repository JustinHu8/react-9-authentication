import { useEffect } from 'react';
import CourseCard from '../components/CourseCard/CourseCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../actions/courseActions';
import { RootState } from '../types/index';
import { AppDispatch } from '../store/store';


const CourseListPage = () => {
    const dispatch: AppDispatch = useDispatch();
    const { courses, loading, error } = useSelector((state: RootState) => state.coursesState);
  
    useEffect(() => {
      dispatch(fetchCourses());
    }, [dispatch]);
  
    if (loading) return <p>Loading courses...</p>;
    if (error) return <p>Error: {error}</p>;
  

    return (
        <div className="course-list">
        {courses.map(course => (
            <CourseCard key={course.id} {...course} />
        ))}
        </div>
    );
}
export default CourseListPage;