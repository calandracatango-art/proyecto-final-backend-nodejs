import {
  getAllProductsModel,
  getProductByIdModel,
  createProductModel,
  deleteProductModel
} from '../models/products.model.js';

export const getAllProductsService = async () => {
  return await getAllProductsModel();
};

export const getProductByIdService = async (id) => {
  return await getProductByIdModel(id);
};

export const createProductService = async (productData) => {
  const { nombre, precio, categoria } = productData;

  if (!nombre || precio === undefined) {
    throw new Error('VALIDATION_ERROR: El nombre y el precio son obligatorios');
  }

  const newProduct = {
    nombre,
    precio: Number(precio),
    categoria: categoria || 'general'
  };

  return await createProductModel(newProduct);
};

export const deleteProductService = async (id) => {
  return await deleteProductModel(id);
};