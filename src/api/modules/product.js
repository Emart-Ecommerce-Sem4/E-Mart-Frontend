/* eslint-disable import/no-anonymous-default-export */
import { axiosClient, resolver } from '../client';

export default {
  getAllProducts() {
    return resolver(axiosClient.get('/product/all'));
  },
  updateProduct(product) {
    return resolver(axiosClient.put(`/update/${product.product_id}`, product));
  },
  addProduct(product) {
    return resolver(axiosClient.post('/product/add', product));
  },
  getProduct(productId) {
    return resolver(axiosClient.get(`/product/get/${productId}`));
  },
};
