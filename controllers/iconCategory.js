import HttpStatusCode from '../helpers/HttpStatusCode.js';
import { iconCategoriesRepository } from '../Repositories/Index.js';

async function getAllCategories(req, res) {
  try {
    const categories = await iconCategoriesRepository.getAllCategories();
    res.status(HttpStatusCode.OK).json({
      message: 'Lấy danh sách categories thành công',
      data: categories,
    });
  } catch (error) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: 'get danh sách thất bại',
    });
  }
}

async function importIconCategories(req, res) {
  try {
    await iconCategoriesRepository.importIconCategories(req.body);
    res.status(HttpStatusCode.INSERT_OK).json({
      message: 'Import categories thành công',
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.message,
    });
  }
}

export default { getAllCategories, importIconCategories };
