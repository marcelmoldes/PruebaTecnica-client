import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, TableContainer, Paper, Pagination, Box } from '@mui/material';

const StudentsGrid = ({ students, onEdit, onDelete }) => {
    const [page, setPage] = useState(1);
    const rowsPerPage = 5;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const paginatedStudents = students.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    return (
        <Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedStudents.map((student) => (
                            <TableRow key={student.id}>
                                <TableCell>{student.firstName}</TableCell>
                                <TableCell>{student.lastName}</TableCell>
                                <TableCell>{student.email}</TableCell>
                                <TableCell>
                                    <Button onClick={() => onEdit(student)}>Edit</Button>
                                    <Button onClick={() => onDelete(student.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                count={Math.ceil(students.length / rowsPerPage)}
                page={page}
                onChange={handleChangePage}
                color="primary"
                style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}
            />
        </Box>
    );
};

export default StudentsGrid;
