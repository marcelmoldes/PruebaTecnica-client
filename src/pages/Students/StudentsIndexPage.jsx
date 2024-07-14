import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { getStudents, deleteStudent } from "../../services/api";
import StudentForm from "./components/StudentForm";
import StudentsGrid from "../Students/components/StudentsGrid";

const StudentsIndexPage = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleSave = () => {
    setSelectedStudent(null);
    setFormVisible(false);
    fetchStudents();
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Students Management
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setFormVisible(!isFormVisible)}
        >
          {isFormVisible ? "Hide Form" : "Add Student"}
        </Button>
        {isFormVisible && (
          <Box my={2}>
            <StudentForm
              selectedStudent={selectedStudent}
              onSave={handleSave}
            />
          </Box>
        )}
        <Box my={2}>
          <StudentsGrid
            students={students}
            onEdit={setSelectedStudent}
            onDelete={handleDelete}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default StudentsIndexPage;
