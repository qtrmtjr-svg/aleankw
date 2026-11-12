const express = require('express');
const path = require('path');

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'public', 'assets'), { maxAge: '30d' }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
