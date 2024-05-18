const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const corsOptions = {
    origin: '*', // Replace with your frontend app's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (cookies, authorization headers)
  };
  
  app.use(cors(corsOptions));

let todayRate = {
  rate: "76400",
};

// GET endpoint to retrieve today's gold rate
app.get('/api/v1/todayRate', (req, res) => {
  res.json(todayRate);
});

// PUT endpoint to update today's gold rate
app.put('/api/v1/todayRate', (req, res) => {
  const { rate, password } = req.body;

  if (!rate) {
    return res.status(400).json({ error: 'Rate is required' });
  }
  if(password !== "sdg453"){
    return res.json({ error: 'Invalid Admin Password' });
  }

  todayRate = { rate };
  res.json(todayRate);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
