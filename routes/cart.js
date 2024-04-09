import express from 'express';
import { cartController } from '../Controllers/Index.js';
import checkToken from '../Authentication/Auth.js';

const router = express.Router();

router.post('/addToCart', checkToken, cartController.addToCart);
router.get('/:email_user', checkToken, cartController.getAllCartItems);
router.delete('/:id', checkToken, cartController.removeCartItem);
router.patch('/', checkToken, cartController.updateCartItem);

export default router;
