import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/memories', { useNewUrlParser: true, useUnifiedTopology: true })
  //if successfully connected...
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}.`)))
  //if connection fails...
  .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);
