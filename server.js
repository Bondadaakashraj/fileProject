const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle data retrieval
app.post('/submit', (req, res) => {
  const filePath = 'formData.txt';
  const formData = req.body; // Get the submitted data from the request body

  try {
    // Append the form data to the file
    fs.appendFileSync(filePath, JSON.stringify(formData) + '\n', 'utf-8');
    res.json({ success: true, message: 'Form data saved successfully' });
  } catch (err) {
    console.error('Error saving form data:', err);
    res.status(500).json({ success: false, message: 'Error saving form data' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
