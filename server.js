import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import connect from './Database/database.js';
import {
  usersRouter,
  productsRouter,
  cartsRouter,
  iconCategoriesRouter,
} from './routes/index.js';

const app = express();
app.use(cors());

app.use(express.json());
const port = process.env.PORT || 3000;

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/cart', cartsRouter);
app.use('/iconCategories', iconCategoriesRouter);

app.get('/', (_req, res) => {
  res.send('response');
});

app.listen(port, async () => {
  await connect();
  console.log(`Example app listening on port ${port}`);
});
