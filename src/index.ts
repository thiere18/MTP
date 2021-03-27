import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import { createConnection, getRepository } from 'typeorm'


import userRoutes from './routes/user.routes'
import { Bootstrap } from './bootstrap';

const app = express();
createConnection().then(async (connection) => {
    console.log("connection established with MYSQL")

//  await Bootstrap()
}).catch((error) => {
    console.error(error)
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(userRoutes);

app.listen(5000);
console.log('Server on ports', 5000);