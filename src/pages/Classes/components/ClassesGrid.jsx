import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, TableContainer, Paper, Pagination, Box } from '@mui/material';

const ClassesGrid = ({ classes, onEdit, onDelete }) => {
    const [page, setPage] = useState(1);
    const rowsPerPage = 5;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const paginatedClasses = classes.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    return (
        <Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedClasses.map((classItem) => (
                            <TableRow key={classItem.id}>
                                <TableCell>{classItem.name}</TableCell>
                                <TableCell>{classItem.description}</TableCell>
                                <TableCell>
                                    <Button onClick={() => onEdit(classItem)}>Edit</Button>
                                    <Button onClick={() => onDelete(classItem.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                count={Math.ceil(classes.length / rowsPerPage)}
                page={page}
                onChange={handleChangePage}
                color="primary"
                style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}
            />
        </Box>
    );
};

export default ClassesGrid;
