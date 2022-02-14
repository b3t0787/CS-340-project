import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Students from './pages/Students';
import Courses from './pages/Courses';
import Departments from './pages/Departments';
import Degrees from './pages/Degrees';
import CourseRegistrations from './pages/CourseRegistrations';
import Scholarships from './pages/Scholarships';
import AddStudentPage from './pages/AddStudentPage';
import AddCoursePage from './pages/AddCoursePage';
import AddDepartmentPage from './pages/AddDepartmentPage';
import AddDegreePage from './pages/AddDegreePage';
import AddCourseRegistrationPage from './pages/AddCourseRegistrationPage';
import AddScholarshipPage from './pages/AddScholarshipPage';
import RecordGradePage from './pages/RecordGradePage';
import EditStudentPage from './pages/EditStudentPage';
import EditDepartMentPage from './pages/EditDepartmentPage';
import EditDegreePage from './pages/EditDegreePage';
import EditCoursePage from './pages/EditCoursePage';
import EditScholarshipPage from './pages/EditScholarshipPage';


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
        <Route path="/Scholarships" element={<Scholarships />} />
        <Route path="/add-student" element={<AddStudentPage />} />
        <Route path="/add-course" element={<AddCoursePage/>} />
        <Route path="/add-department" element={<AddDepartmentPage />} />
        <Route path="/add-degree" element={<AddDegreePage />} />
        <Route path="/add-course-registration" element={<AddCourseRegistrationPage />} />
        <Route path="/add-scholarship" element={<AddScholarshipPage />} />
        <Route path="/record-grade" element={<RecordGradePage />} />
        <Route path="/edit-student" element={<EditStudentPage />} />
        <Route path="/edit-course" element={<EditCoursePage />} />
        <Route path="/edit-department" element={<EditDepartMentPage />} />
        <Route path="/edit-degree" element={<EditDegreePage />} />
        <Route path="/edit-scholarship" element={<EditScholarshipPage />} />
      </Routes>
    </Router>
  );
}

export default App;
