import './App.css'
import { useCourses } from './hooks/useCourses'
import CourseCard from './components/CourseCard/CourseCard'

const App = () => {
  const { courses, loading, error } = useCourses();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="course-list">
      {courses.map(course => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
}

export default App
