import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TeachersIndexPage from './pages/Teachers/TeachersIndexPage';
import Header from './components/HeaderComponent';
import ClassesIndexPage from "./pages/Classes/ClassesIndexPage";
import StudentsIndexPage from "./pages/Students/StudentsIndexPage";

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersIndexPage />} />
            <Route path="/classes" element={<ClassesIndexPage />} />
            <Route path="/students" element={<StudentsIndexPage />} />
        </Routes>
      </Router>
  );
}

export default App;
