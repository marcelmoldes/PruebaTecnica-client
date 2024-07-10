import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { createClass, updateClass } from '../../../services/api';

const ClassForm = ({ selectedClass, onSave }) => {
    const [classData, setClassData] = useState({ name: '', description: '' });

    useEffect(() => {
        if (selectedClass) {
            setClassData(selectedClass);
        }
    }, [selectedClass]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClassData({ ...classData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedClass) {
            updateClass(selectedClass.id, classData).then(onSave);
        } else {
            createClass(classData).then(onSave);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
            <Button type="submit" variant="contained" color="primary">
                {selectedClass ? 'Update Class' : 'Add Class'}
            </Button>
        </Box>
    );
};

export default ClassForm;
