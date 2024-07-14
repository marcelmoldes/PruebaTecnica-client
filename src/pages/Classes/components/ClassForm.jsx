import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { getTeachers, getStudents } from "../../../services/api";

const ClassForm = ({ selectedClass, onSave }) => {
  const [classData, setClassData] = useState({
    name: "",
    description: "",
    teacherId: "",
    studentIds: [],
  });
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (selectedClass) {
      setClassData(selectedClass);
    }
    fetchTeachers();
    fetchStudents();
  }, [selectedClass]);

  const fetchTeachers = async () => {
    const response = await getTeachers();
    setTeachers(response.data);
  };

  const fetchStudents = async () => {
    const response = await getStudents();
    setStudents(response.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClassData({ ...classData, [name]: value });
  };

  const handleStudentChange = (event) => {
    const { value } = event.target;
    setClassData({
      ...classData,
      studentIds: typeof value === "string" ? value.split(",") : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(classData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        name="name"
        label="Class Name"
        value={classData.name}
        onChange={handleChange}
        required
      />
      <TextField
        name="description"
        label="Description"
        value={classData.description}
        onChange={handleChange}
        required
      />
      <FormControl>
        <InputLabel id="teacher-select-label">Teacher</InputLabel>
        <Select
          labelId="teacher-select-label"
          name="teacherId"
          value={classData.teacherId}
          onChange={handleChange}
          required
        >
          {teachers.map((teacher) => (
            <MenuItem key={teacher.id} value={teacher.id}>
              {teacher.firstName} {teacher.lastName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="students-select-label">Students</InputLabel>
        <Select
          labelId="students-select-label"
          name="studentIds"
          multiple
          value={classData.studentIds}
          onChange={handleStudentChange}
          renderValue={(selected) =>
            selected
              .map(
                (id) =>
                  students.find((student) => student.id === id)?.firstName,
              )
              .join(", ")
          }
        >
          {students.map((student) => (
            <MenuItem key={student.id} value={student.id}>
              <Checkbox
                checked={classData.studentIds.indexOf(student.id) > -1}
              />
              <ListItemText
                primary={`${student.firstName} ${student.lastName}`}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        {selectedClass ? "Update Class" : "Add Class"}
      </Button>
    </Box>
  );
};

export default ClassForm;
