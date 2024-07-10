import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { createStudent, updateStudent } from '../../../services/api';

const StudentForm = ({ selectedStudent, onSave }) => {
    const [student, setStudent] = useState({ firstName: '', lastName: '', email: '' });

    useEffect(() => {
        if (selectedStudent) {
            setStudent(selectedStudent);
        }
    }, [selectedStudent]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedStudent) {
            updateStudent(selectedStudent.id, student).then(onSave);
        } else {
            createStudent(student).then(onSave);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                name="firstName"
                label="First Name"
                value={student.firstName}
                onChange={handleChange}
                required
            />
            <TextField
                name="lastName"
                label="Last Name"
                value={student.lastName}
                onChange={handleChange}
                required
            />
            <TextField
                name="email"
                label="Email"
                value={student.email}
                onChange={handleChange}
                required
            />
            <Button type="submit" variant="contained" color="primary">
                {selectedStudent ? 'Update Student' : 'Add Student'}
            </Button>
        </Box>
    );
};

export default StudentForm;
