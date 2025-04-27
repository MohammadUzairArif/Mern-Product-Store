import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoute from './routes/product.route.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000; // Use the port from environment variables or default to 8000

app.use(cors());
app.use(express.json()); // Middleware to parse JSON request req.body

app.use('/api/products', productRoute); // Mount the product route

app.listen(PORT,()=>{
    connectDB()
    console.log("Server is running at http://localhost:" + PORT);
})

//