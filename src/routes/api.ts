import express from 'express';
import * as productController from '../controllers/productController';
import * as orderController from '../controllers/orderController';

const router = express.Router();

// Product routes
router.get('/products', productController.getProducts);
router.post('/products', productController.createProduct);
router.get('/products/:id', productController.getProductById);
router.put('/products/:id', productController.updateProduct);

// Order routes
router.get('/orders', orderController.getOrders);
router.post('/orders', orderController.createOrder);
router.put('/orders/:id/status', orderController.updateOrderStatus);
router.get('/orders/summary', orderController.getOrderSummary);

export default router;