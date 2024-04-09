import Exception from '../errors/Exception.js';
import { iconCategories } from '../fakeData/index.js';
import { IconCategories } from '../models/index.js';

const getAllCategories = async () => {
  const iconCategories = await IconCategories.find();
  if (!iconCategories) {
    throw new Exception('Không tìm thấy sản phẩm với id ');
  }
  return iconCategories;
};

const importIconCategories = async () => {
  try {
    await IconCategories.insertMany(iconCategories);
  } catch (exception) {
    if (!!exception.errors) {
      throw new Exception('import error', exception.errors);
    }
  }
};

export default {
  getAllCategories,
  importIconCategories,
};
