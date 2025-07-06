const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the current directory (or "public" if you’re using that)
app.use(express.static(__dirname));

// Optional: direct to index.html for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Travlr Getaways running at: http://localhost:${port}`);
});