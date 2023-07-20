const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors')

const app = express();
const port = 3001;

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'polsambal123',
    database: 'fullstack',
});

// Connect to the MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Handle sign-up request
app.post('/api/signup', (req, res) => {
    const { username, password } = req.body;

    // Insert sign-up details into the "user" table
    const sql = `INSERT INTO user (username, password) VALUES (?, ?)`;
    connection.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error('Error executing the query:', err);
            res.status(500).json({ error: 'An error occurred' });
            return;
        }

        console.log('Sign-up details saved in the database');
        res.json({ message: 'Sign-up successful' });
    });
});

// ... (your existing code)

// Handle login request
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Check if username and password match in the "user" table
    const sql = `SELECT * FROM user WHERE username = ? AND password = ?`;
    connection.query(sql, [username, password], (err, results) => {
        if (err) {
            console.error('Error executing the query:', err);
            res.status(500).json({ error: 'An error occurred' });
            return;
        }

        if (results.length === 0) {
            res.status(401).json({ error: 'Invalid username or password' });
            return;
        }

        console.log('User logged in successfully');
        res.json({ message: 'Login successful' });
    });
});


