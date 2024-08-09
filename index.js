// index.js
// Main server file

require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./src/config/config.js');
const adminRoutes = require('./src/routes/adminRoutes.js');
const userRoutes = require('./src/routes/userRoutes.js');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(config.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

// Use the admin and user routes
app.use('/admin', adminRoutes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  
  
});
