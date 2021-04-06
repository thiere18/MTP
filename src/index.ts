import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import dotenv from 'dotenv';

import { createConnection } from 'typeorm'


import depotRoutes from './routes/depot.routes'
import categoryRoutes from './routes/category.routes'

const app = express();
createConnection().then(async (connection) => {
    console.log("connection established with MYSQL")
    dotenv.config({ path: './.env' })
}).catch((error) => {
    console.error(error)
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(depotRoutes);
app.use(categoryRoutes)

app.listen(5000);
console.log(`Listening on port ${process.env.PORT}`);