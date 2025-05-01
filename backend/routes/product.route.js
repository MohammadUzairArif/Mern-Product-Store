import express from 'express';
const router = express.Router();
import { getAllProducts, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';
router.get('/', getAllProducts); // Fetch all products   
router.post('/', createProduct); // Create a new product
router.put('/:id', updateProduct) // Update a product by ID
router.delete("/:id", deleteProduct)  // Delete a product by ID


export default router;