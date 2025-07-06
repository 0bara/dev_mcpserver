const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, MCP Server!');
});

app.get('/search', (req, res) => {
  const searchQuery = req.query.q;
  console.log(`Searching for: ${searchQuery}`);

  // ダミーのレスポンスを返す
  const dummyResponse = {
    song_title: "Dummy Song Title",
    genius_url: "https://genius.com/dummy-song-lyrics",
    lyrics_snippet: "These are not the real lyrics you are looking for..."
  };

  res.json(dummyResponse);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
