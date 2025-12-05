const express = require('express');
const app = express();
const PORT = 3000;

// Default route
app.get('/', (req, res) => {
    res.send('Hello from Express App integrated with GitHub & Jira!');
});

// 🚀 New route for your new branch (example: /homepage)
app.get('/homepage', (req, res) => {
    res.send('Welcome to the Homepage Route!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

