import express from 'express';
const router = express.Router();
import { iconCategoriesController } from '../Controllers/Index.js';
import checkToken from '../Authentication/Auth.js';

//get products
router.get('/', iconCategoriesController.getAllCategories);

router.post(
  '/importIconCategories',
  iconCategoriesController.importIconCategories
);

export default router;
