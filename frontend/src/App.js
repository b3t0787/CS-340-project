import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
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

  const [studentToEdit, setStudentToEdit] = useState();
  const [courseToEdit, setCourseToEdit] = useState();
  const [departmentToEdit, setDepartmentToEdit] = useState();
  const [degreeToEdit, setDegreeToEdit] = useState();
  const [gradeToRecord, setRecordGrade] = useState();
  const [scholarshipToEdit, setScholarshipToEdit] = useState();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Students" element={<Students setStudentToEdit={setStudentToEdit} />} />
        <Route path="/Courses" element={<Courses setCourseToEdit={setCourseToEdit}/>} />
        <Route path="/Departments" element={<Departments setDepartmentToEdit={setDepartmentToEdit}/>} />
        <Route path="/Degrees" element={<Degrees setDegreeToEdit={setDegreeToEdit}/>} />
        <Route path="/Course-Registrations" element={<CourseRegistrations setRecordGrade={setRecordGrade}/>} />
        <Route path="/Scholarships" element={<Scholarships setScholarshipToEdit={setScholarshipToEdit}/>} />
        <Route path="/add-student" element={<AddStudentPage />} />
        <Route path="/add-course" element={<AddCoursePage/>} />
        <Route path="/add-department" element={<AddDepartmentPage />} />
        <Route path="/add-degree" element={<AddDegreePage />} />
        <Route path="/add-course-registration" element={<AddCourseRegistrationPage />} />
        <Route path="/add-scholarship" element={<AddScholarshipPage />} />
        <Route path="/record-grade" element={<RecordGradePage gradeToRecord={gradeToRecord}/>} />
        <Route path="/edit-student" element={<EditStudentPage studentToEdit={studentToEdit}/>} />
        <Route path="/edit-course" element={<EditCoursePage courseToEdit={courseToEdit}/>} />
        <Route path="/edit-department" element={<EditDepartMentPage departmentToEdit={departmentToEdit}/>} />
        <Route path="/edit-degree" element={<EditDegreePage degreeToEdit={degreeToEdit}/>} />
        <Route path="/edit-scholarship" element={<EditScholarshipPage scholarshipToEdit={scholarshipToEdit}/>} />
      </Routes>
    </Router>
  );
}

export default App;
