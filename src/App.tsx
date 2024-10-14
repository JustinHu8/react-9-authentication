import React, { useState, useEffect } from 'react'
import './App.css'
import CourseCard from './components/CourseCard'
interface Course {
  id: number;
}

function App() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/JustinHu8/courseCardMock/courseCards")
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <>
      <div className="course-list">
        {courses.map(course => (
          <CourseCard title={''} description={''} lessons={0} key={course.id} {...course} />
        ))}
      </div>
    </>
  )
}

export default App
