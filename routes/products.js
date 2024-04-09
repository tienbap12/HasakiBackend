import express from 'express';
const router = express.Router();
import { productController } from '../Controllers/Index.js';
import checkToken from '../Authentication/Auth.js';

router.get('/', productController.getAllProducts);

router.get('/:id', productController.getDetailProduct);

router.post('/', checkToken, productController.insertProduct);

router.post('/importProduct', productController.importProducts);

router.patch('/', productController.updateProduct);

router.delete('/:id', productController.removeProduct);

export default router;
