const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Load characters data
const charactersPath = path.join(__dirname, 'characters.json');
let characters = [];
try {
  const data = fs.readFileSync(charactersPath, 'utf8');
  characters = JSON.parse(data);
} catch (err) {
  console.error('Error reading characters.json:', err);
}

app.get('/', (req, res) => {
  res.send('Welcome to the Cartoon & Animated Characters API!');
});

// Get all characters or filter by movie
app.get('/characters', (req, res) => {
  const { movie } = req.query;
  let result = characters;
  if (movie) {
    result = characters.filter(c => c.movie.toLowerCase() === movie.toLowerCase());
  }
  res.json(result);
});

// Get character by ID
app.get('/characters/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const character = characters.find(c => c.id === id);
  if (!character) {
    return res.status(404).json({ error: 'Character not found' });
  }
  res.json(character);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 