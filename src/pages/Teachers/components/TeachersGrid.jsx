import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TableContainer,
  Paper,
  Pagination,
  Box,
} from "@mui/material";

const TeachersGrid = ({ teachers, onEdit, onDelete }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedTeachers = teachers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage,
  );

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
            {paginatedTeachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell>{teacher.firstName}</TableCell>
                <TableCell>{teacher.lastName}</TableCell>
                <TableCell>{teacher.email}</TableCell>
                <TableCell>
                  <Button onClick={() => onEdit(teacher)}>Edit</Button>
                  <Button onClick={() => onDelete(teacher.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(teachers.length / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
        color="primary"
        style={{ marginTop: "16px", display: "flex", justifyContent: "center" }}
      />
    </Box>
  );
};

export default TeachersGrid;
