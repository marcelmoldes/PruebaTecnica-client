import React from 'react';
import { Container, Box, Typography, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container>
            <Box my={4} textAlign="center">
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to the Classroom Management System
                </Typography>
                <Typography variant="h6" component="p" gutterBottom>
                    Manage your classes, teachers, and students efficiently.
                </Typography>
            </Box>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} style={{ padding: '16px' }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Manage Teachers
                        </Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            Add, edit, and remove teachers. View the list of all teachers in the system.
                        </Typography>
                        <Button variant="contained" color="primary" component={Link} to="/teachers">
                            Go to Teachers
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} style={{ padding: '16px' }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Manage Students
                        </Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            Add, edit, and remove students. View the list of all students in the system.
                        </Typography>
                        <Button variant="contained" color="primary" component={Link} to="/students">
                            Go to Students
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} style={{ padding: '16px' }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Manage Classes
                        </Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            Add, edit, and remove classes. View the list of all classes in the system.
                        </Typography>
                        <Button variant="contained" color="primary" component={Link} to="/classes">
                            Go to Classes
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;
