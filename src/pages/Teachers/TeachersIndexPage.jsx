import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { getTeachers, deleteTeacher } from "../../services/api";
import TeacherForm from "./components/TeacherForm";
import TeachersGrid from "../Teachers/components/TeachersGrid";

const TeachersIndexPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await getTeachers();
      setTeachers(response.data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTeacher(id);
      fetchTeachers();
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  const handleSave = () => {
    setSelectedTeacher(null);
    setFormVisible(false);
    fetchTeachers();
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Teachers Management
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setFormVisible(!isFormVisible)}
        >
          {isFormVisible ? "Hide Form" : "Add Teacher"}
        </Button>
        {isFormVisible && (
          <Box my={2}>
            <TeacherForm
              selectedTeacher={selectedTeacher}
              onSave={handleSave}
            />
          </Box>
        )}
        <Box my={2}>
          <TeachersGrid
            teachers={teachers}
            onEdit={setSelectedTeacher}
            onDelete={handleDelete}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default TeachersIndexPage;
