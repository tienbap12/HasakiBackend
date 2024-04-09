import express from 'express';
const router = express.Router();
import { iconCategoriesController } from '../Controllers/Index.js';

router.get('/', iconCategoriesController.getAllCategories);

router.post(
  '/importIconCategories',
  iconCategoriesController.importIconCategories
);

export default router;
