import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { deleteTeacher } from '../../services/api';
import TeacherForm from '../Teachers/components/TeacherForm';
import TeachersGrid from '../Teachers/components/TeachersGrid';

const TeachersIndexPage = () => {
    const [teachers, setTeachers] = useState([]);
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [isFormVisible, setFormVisible] = useState(false);

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = async () => {
        // Agrega datos de ejemplo
        const exampleTeachers = [
            { id: 1, firstName: 'Alice', lastName: 'Johnson', email: 'alice@example.com' },
            { id: 2, firstName: 'Bob', lastName: 'Smith', email: 'bob@example.com' },
            { id: 3, firstName: 'Charlie', lastName: 'Brown', email: 'charlie@example.com' },
            { id: 4, firstName: 'David', lastName: 'Wilson', email: 'david@example.com' },
            { id: 5, firstName: 'Eve', lastName: 'Davis', email: 'eve@example.com' },
            { id: 6, firstName: 'Frank', lastName: 'Miller', email: 'frank@example.com' }
        ];
        setTeachers(exampleTeachers);
    };

    const handleDelete = async (id) => {
        await deleteTeacher(id);
        fetchTeachers();
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
                <Button variant="contained" color="primary" onClick={() => setFormVisible(!isFormVisible)}>
                    {isFormVisible ? 'Hide Form' : 'Add Teacher'}
                </Button>
                {isFormVisible && (
                    <Box my={2}>
                        <TeacherForm selectedTeacher={selectedTeacher} onSave={handleSave} />
                    </Box>
                )}
                <Box my={2}>
                    <TeachersGrid teachers={teachers} onEdit={setSelectedTeacher} onDelete={handleDelete} />
                </Box>
            </Box>
        </Container>
    );
};

export default TeachersIndexPage;