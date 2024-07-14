import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import {
  createTeacher,
  updateTeacher,
  getTeachers,
} from "../../../services/api";

const TeacherForm = ({ selectedTeacher, onSave }) => {
  const [teacher, setTeacher] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (selectedTeacher) {
      setTeacher(selectedTeacher);
    }
  }, [selectedTeacher]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher({ ...teacher, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTeacher) {
      updateTeacher(selectedTeacher.id, teacher).then(onSave);
    } else {
      createTeacher(teacher).then(onSave);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        name="firstName"
        label="First Name"
        value={teacher.firstName}
        onChange={handleChange}
        required
      />
      <TextField
        name="lastName"
        label="Last Name"
        value={teacher.lastName}
        onChange={handleChange}
        required
      />
      <TextField
        name="email"
        label="Email"
        value={teacher.email}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        {selectedTeacher ? "Update Teacher" : "Add Teacher"}
      </Button>
    </Box>
  );
};

export default TeacherForm;
