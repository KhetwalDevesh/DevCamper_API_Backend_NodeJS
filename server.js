const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');

// load env variables
dotenv.config({ path: './config/config.env' });
connectDB();
const bootcamps = require('./routes/bootcamps');

// Mount routers
const app = express();

// Body parser ( comes with express itself )
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.use('/api/v1/bootcamps', bootcamps);
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, Promise) => {
  console.log(`Error : ${err.message}`.red);
  // Close server and exit process
  //  server.close(() => process.exit(1));
});
