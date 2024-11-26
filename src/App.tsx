import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setAuthenticated, clearAuthentication } from './features/auth/authSlice';
import { RootState } from './store/store'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage'
import CourseListPage from './pages/CourseListPage'
import CourseDetailPage from './pages/CourseDetailsPage'
import ContactPage from './pages/ContactPage'
import UserProfilePage from './pages/UserProfilePage'
import Settings from './components/Settings/Settings'
import Orders from './components/Orders/Orders'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import LoginPage from './pages/LoginPage'
import './App.css'


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check cookie authentication status
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:3000/protected', {
          withCredentials: true,
        });
        if (response.status === 200) {
          dispatch(setAuthenticated());
        }
      } catch {
        dispatch(clearAuthentication());
      }
    }

    checkAuth();
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CourseListPage />} />
          <Route path="/courses/:courseId" element={<CourseDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <UserProfilePage />
              </ProtectedRoute>
            }>
            <Route path="settings" element={<Settings />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </div>    
    </div>
  )

}

export default App
