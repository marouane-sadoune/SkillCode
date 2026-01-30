import express from 'express';
import dotenv from 'dotenv';
const app = express();
// index.js
console.log(`Hello ${process.env.HELLO}`)


console.log('Database URL:', process.env.PORT);
dotenv.config();
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Success from backend apinodemon 1212 ee' });
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});