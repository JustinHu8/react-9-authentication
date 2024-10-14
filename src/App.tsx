import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CourseListPage from './pages/CourseListPage'
import ContactPage from './pages/ContactPage'
// import { useCourses } from './hooks/useCourses'
// import CourseCard from './components/CourseCard/CourseCard'

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CourseListPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
  // const { courses, loading, error } = useCourses();

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  // return (
  //   <div className="course-list">
  //     {courses.map(course => (
  //       <CourseCard key={course.id} {...course} />
  //     ))}
  //   </div>
  // );
}

export default App
