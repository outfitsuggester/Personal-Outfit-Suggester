const express = require('express');
const cors = require('cors');
const mongoose = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express(); // ✅ app must be declared before it's used

app.use(cors()); // ✅ now it's safe to use
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
