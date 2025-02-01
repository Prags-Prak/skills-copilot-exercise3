// Create web server

// 1. Create web server
// 2. Create a route for the URL '/comments'
// 3. Create a route for the URL '/comments/new'
// 4. Create a route for the URL '/comments/:id'
// 5. Create a route for the URL '/comments/:id/edit'
// 6. Create a route for the URL '/comments/:id/delete'
// 7. Start the server on port 3000
// 8. Test the routes using Postman

// 1. Create web server
const express = require('express');
const app = express();
const comments = [
    { id: 1, username: 'Alice', comment: 'Hi there!' },
    { id: 2, username: 'Bob', comment: 'Hello!' },
    { id: 3, username: 'Charlie', comment: 'Good day!' }
];

// 2. Create a route for the URL '/comments'
app.get('/comments', (req, res) => {
    res.send(comments);
});

// 3. Create a route for the URL '/comments/new'
app.get('/comments/new', (req, res) => {
    res.send('New comment form');
});

// 4. Create a route for the URL '/comments/:id'
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(c => c.id === parseInt(id));
    res.send(comment);
});

// 5. Create a route for the URL '/comments/:id/edit'
app.get('/comments/:id/edit', (req, res) => {
    res.send('Edit comment form');
});

// 6. Create a route for the URL '/comments/:id/delete'
app.get('/comments/:id/delete', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(c => c.id === parseInt(id));
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.send('Comment deleted');
});

// 7. Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// 8. Test the routes using Postman
// GET http://localhost:3000/comments
// GET http://localhost:3000/comments/new