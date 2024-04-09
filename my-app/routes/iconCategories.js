import express from 'express';
const router = express.Router();
import { iconCategoriesController } from '../controllers/index.js';
import checkToken from '../authentication/auth.js';

//get products
router.get('/', iconCategoriesController.getAllCategories);

router.post(
  '/importIconCategories',
  iconCategoriesController.importIconCategories
);

export default router;
