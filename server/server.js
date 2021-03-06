const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

const RateLimit = require('express-rate-limit');
const limiter = new RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 7
});
app.use(limiter);
app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
