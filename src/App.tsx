import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CourseListPage from './pages/CourseListPage'
import ContactPage from './pages/ContactPage'


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CourseListPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )

}

export default App
