import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import connect from './database/database.js';
//authentication middleware
// import checkToken from './authentication/auth.js';
import {
  usersRouter,
  productsRouter,
  cartsRouter,
  iconCategoriesRouter,
} from './routes/index.js';
const app = express();
app.use(cors());
// app.use(checkToken);
app.use(express.json());
const port = process.env.PORT || 3000;

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/cart', cartsRouter);
app.use('/iconCategories', iconCategoriesRouter);

// app.use(morgan('combined'));
app.get('/', (req, res) => {
  res.send('response');
});

app.listen(port, async () => {
  await connect();
  console.log(`Example app listening on port ${port}`);
});
