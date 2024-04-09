import HttpStatusCode from '../helpers/HttpStatusCode.js';
import { productRepository } from '../Repositories/Index.js';
import { Product } from '../models/index.js';
import { MAX_RECORDS } from '../Global/Constants.js';

async function getAllProducts(req, res) {
  const totalProducts = await Product.find();
  let { page = 1, size = MAX_RECORDS, searchString = '' } = req.query;
  size = size >= MAX_RECORDS ? MAX_RECORDS : size || totalProducts.length;
  try {
    let filteredProducts = await productRepository.getAllProducts({
      page,
      size,
      searchString,
    });
    res.status(HttpStatusCode.OK).json({
      message: 'Lấy danh sách sản phẩm thành công',
      total: totalProducts.length,
      page,
      size: filteredProducts?.length,
      searchString,
      data: filteredProducts,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.message,
    });
  }
}

async function getDetailProduct(req, res) {
  const productId = req?.params?.id;
  try {
    const product = await productRepository.getDetailProduct(productId);
    res.status(HttpStatusCode.OK).json({
      message: 'Chi tiết sản phẩm',
      data: product,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.message,
    });
  }
}

async function updateProduct(req, res) {
  try {
    const product = await productRepository.updateProduct(req.body);
    if (product.type === 'add') {
      res.status(HttpStatusCode.INSERT_OK).json({
        ...product,
        type: undefined,
      });
    } else {
      res.status(HttpStatusCode.INSERT_OK).json({
        ...product,
        type: undefined,
      });
    }
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: 'Cập nhật thông tin sản phẩm thất bại',
    });
  }
}

async function insertProduct(req, res) {
  try {
    const product = await productRepository.insertProduct(req.body);
    res.status(HttpStatusCode.INSERT_OK).json({
      message: 'Thêm sản phẩm thành công',
      data: product,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: 'Thêm sản phẩm thất bại',
    });
  }
}

async function importProducts(req, res) {
  try {
    await productRepository.importProducts(req.body);
    res.status(HttpStatusCode.INSERT_OK).json({
      message: 'Import sản phẩm thành công',
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.message,
    });
  }
}

async function removeProduct(req, res) {
  const id = req?.params?.id;
  try {
    const removeProduct = await productRepository.removeProduct(id);
    res.status(HttpStatusCode.OK).json({
      message: 'Xóa sản phẩm thành công',
      data: removeProduct,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: 'Xóa sản phẩm thất bại',
    });
  }
}

export default {
  getAllProducts,
  updateProduct,
  insertProduct,
  getDetailProduct,
  importProducts,
  removeProduct,
};
