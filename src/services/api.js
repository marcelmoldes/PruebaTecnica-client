import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:3000',
});

export const getTeachers = () => api.get('/teachers');
export const getStudents = () => api.get('/students');
export const getClasses = () => api.get('/classes');

export const createTeacher = (teacher) => api.post('/teachers', teacher);
export const createStudent = (student) => api.post('/students', student);
export const createClass = (classData) => api.post('/classes', classData);

export const updateTeacher = (id, teacher) => api.put(`/teachers/${id}`, teacher);
export const updateStudent = (id, student) => api.put(`/students/${id}`, student);
export const updateClass = (id, classData) => api.put(`/classes/${id}`, classData);

export const deleteTeacher = (id) => api.delete(`/teachers/${id}`);
export const deleteStudent = (id) => api.delete(`/students/${id}`);
export const deleteClass = (id) => api.delete(`/classes/${id}`);
