# Cartoon & Animated Characters API

A simple Node.js API serving cartoon and animated character images from movies.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the server:**
   ```bash
   node index.js
   ```
   The server will run on `http://localhost:3000` by default.

## Endpoints

### List all characters
```
GET /characters
```
**Example Response:**
```json
[
  {
    "id": 1,
    "name": "Mickey Mouse",
    "movie": "Fantasia",
    "imageUrl": "https://example.com/images/mickey_mouse.jpg"
  },
  ...
]
```

### Filter by movie
```
GET /characters?movie=Shrek
```

### Get character by ID
```
GET /characters/1
```
**Example Response:**
```json
{
  "id": 1,
  "name": "Mickey Mouse",
  "movie": "Fantasia",
  "imageUrl": "https://example.com/images/mickey_mouse.jpg"
}
```

## Add More Characters
- Edit `characters.json` to add more characters.

## Usage in Other Web Apps
- Fetch character data and image URLs from this API and display them in your web app as needed. 