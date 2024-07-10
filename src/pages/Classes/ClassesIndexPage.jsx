import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { getClasses, deleteClass } from '../../services/api';
import ClassForm from '../Classes/components/ClassForm';
import ClassesGrid from '../Classes/components/ClassesGrid';

const ClassesIndexPage = () => {
    const [classes, setClasses] = useState([]);
    const [selectedClass, setSelectedClass] = useState(null);
    const [isFormVisible, setFormVisible] = useState(false);

    useEffect(() => {
        fetchClasses();
    }, []);

    const fetchClasses = async () => {
        // Agrega datos de ejemplo
        const exampleClasses = [
            { id: 1, name: 'Math 101', description: 'Basic Math' },
            { id: 2, name: 'Science 101', description: 'Basic Science' },
            { id: 3, name: 'History 101', description: 'Basic History' },
            { id: 4, name: 'Art 101', description: 'Basic Art' },
            { id: 5, name: 'Music 101', description: 'Basic Music' },
            { id: 6, name: 'Physics 101', description: 'Basic Physics' }
        ];
        setClasses(exampleClasses);
    };

    const handleDelete = async (id) => {
        await deleteClass(id);
        fetchClasses();
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
                <Button variant="contained" color="primary" onClick={() => setFormVisible(!isFormVisible)}>
                    {isFormVisible ? 'Hide Form' : 'Add Class'}
                </Button>
                {isFormVisible && (
                    <Box my={2}>
                        <ClassForm selectedClass={selectedClass} onSave={handleSave} />
                    </Box>
                )}
                <Box my={2}>
                    <ClassesGrid classes={classes} onEdit={setSelectedClass} onDelete={handleDelete} />
                </Box>
            </Box>
        </Container>
    );
};

export default ClassesIndexPage;
