import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Students from './pages/Students';
import Courses from './pages/Courses';
import Departments from './pages/Departments';
import Degrees from './pages/Degrees';
import CourseRegistrations from './pages/CourseRegistrations';
import AddStudentPage from './pages/AddStudentPage';
import AddCoursePage from './pages/AddCoursePage';
import AddDepartmentPage from './pages/AddDepartmentPage';
import AddDegreePage from './pages/AddDegreePage'
import AddCourseRegistrationPage from './pages/AddCourseRegistrationPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Departments" element={<Departments />} />
        <Route path="/Degrees" element={<Degrees />} />
        <Route path="/Course-Registrations" element={<CourseRegistrations />} />
        <Route path="/add-student" element={<AddStudentPage />} />
        <Route path="/add-course" element={<AddCoursePage/>} />
        <Route path="/add-department" element={<AddDepartmentPage />} />
        <Route path="/add-degree" element={<AddDegreePage />} />
        <Route path="/add-course-registration" element={<AddCourseRegistrationPage />} />
      </Routes>
    </Router>

  );
}

export default App;
