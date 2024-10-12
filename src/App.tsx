import './App.css'
import CourseCard from './components/CourseCard'

function App() {

  const courseObj = {
    title: 'React Basics',
    description: 'This is a Jiangren React Basics Course as part of .NET fullstack semester',
    duration: 3,
    isFree: true,
    teachers: ['Justin A', 'Justin B', 'Justin C']
  };

  return (
    <>
      <CourseCard course={courseObj}/>
    </>
  )
}

export default App
