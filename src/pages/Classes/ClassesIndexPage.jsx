import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { getClasses, deleteClass } from "../../services/api";
import ClassForm from "./components/ClassForm";
import ClassesGrid from "../Classes/components/ClassesGrid";

const ClassesIndexPage = () => {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await getClasses();
      setClasses(response.data);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteClass(id);
      fetchClasses();
    } catch (error) {
      console.error("Error deleting class:", error);
    }
  };

  const handleSave = () => {
    setSelectedClass(null);
    setFormVisible(false);
    fetchClasses();
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Classes Management
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setFormVisible(!isFormVisible)}
        >
          {isFormVisible ? "Hide Form" : "Add Class"}
        </Button>
        {isFormVisible && (
          <Box my={2}>
            <ClassForm selectedClass={selectedClass} onSave={handleSave} />
          </Box>
        )}
        <Box my={2}>
          <ClassesGrid
            classes={classes}
            onEdit={setSelectedClass}
            onDelete={handleDelete}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ClassesIndexPage;
