require('dotenv').config();
import express from 'express';
import { productsRouter } from './router/products';

const cors = require('cors');
const app = express();

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(productsRouter);

export { app };
