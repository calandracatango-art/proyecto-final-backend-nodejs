import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService
} from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos', detalle: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('GET /api/products/:id -> id:', JSON.stringify(id));
    const product = await getProductByIdService(id);

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar el producto', detalle: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await createProductService(req.body);
    res.status(201).json({
      message: 'Producto creado correctamente',
      product: newProduct
    });
  } catch (error) {
    if (error.message.startsWith('VALIDATION_ERROR')) {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: 'Error al crear el producto', detalle: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteProductService(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Producto no encontrado para eliminar' });
    }

    res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto', detalle: error.message });
  }
};