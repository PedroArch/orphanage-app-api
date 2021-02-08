import express from 'express';
import './database/connection';

const app = express();
app.use(express.json());

app.get('/orphanages', (req, res) => {
  return res.json({ message: 'Hellow World' });
});

app.listen(3333);
