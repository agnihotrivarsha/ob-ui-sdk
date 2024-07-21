// backend/server.js

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 5000;


app.use(cors());

const data1 = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Mike Johnson' }
];

app.get('/api/data', (req, res) => {
  res.json(data1);
});

function readDataFromJson(res, key) {
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          res.status(500).send('Error reading file');
          return;
        }
    
        try {
          const jsonData = JSON.parse(data);
          res.json(jsonData[key]); // Assuming key exists in the data you want to send
        } catch (err) {
          console.error('Error parsing JSON:', err);
          res.status(500).send('Error parsing JSON');
        }
      });
}

app.get('/token', (req, res) => {
    return readDataFromJson(res, 'token')
});

app.get('/aisp/accounts', (req, res) => {
    return readDataFromJson(res, 'accounts')
});

app.get('/aisp/accounts/*/account', (req, res) => {
    return readDataFromJson(res, 'account')
});

app.get('/aisp/accounts/*/transactions', (req, res) => {
    return readDataFromJson(res, 'transactions')
});

app.get('/aisp/accounts/*/balances', (req, res) => {
    return readDataFromJson(res, 'balances')
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
