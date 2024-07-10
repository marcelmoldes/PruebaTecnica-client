import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { getStudents, deleteStudent } from '../../services/api';
import StudentForm from '../Students/components/StudentForm';
import StudentsGrid from '../Students/components/StudentsGrid';

const StudentsIndexPage = () => {
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isFormVisible, setFormVisible] = useState(false);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        // Agrega datos de ejemplo
        const exampleStudents = [
            { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
            { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com' },
            { id: 3, firstName: 'Jim', lastName: 'Beam', email: 'jim@example.com' },
            { id: 4, firstName: 'Jack', lastName: 'Daniels', email: 'jack@example.com' },
            { id: 5, firstName: 'Johnny', lastName: 'Walker', email: 'johnny@example.com' },
            { id: 6, firstName: 'Jameson', lastName: 'Irish', email: 'jameson@example.com' }
        ];
        setStudents(exampleStudents);
    };

    const handleDelete = async (id) => {
        await deleteStudent(id);
        fetchStudents();
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
                <Button variant="contained" color="primary" onClick={() => setFormVisible(!isFormVisible)}>
                    {isFormVisible ? 'Hide Form' : 'Add Student'}
                </Button>
                {isFormVisible && (
                    <Box my={2}>
                        <StudentForm selectedStudent={selectedStudent} onSave={handleSave} />
                    </Box>
                )}
                <Box my={2}>
                    <StudentsGrid students={students} onEdit={setSelectedStudent} onDelete={handleDelete} />
                </Box>
            </Box>
        </Container>
    );
};

export default StudentsIndexPage;
