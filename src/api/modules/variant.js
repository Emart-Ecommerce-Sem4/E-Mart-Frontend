/* eslint-disable import/no-anonymous-default-export */
import { axiosClient, resolver } from '../client';

export default {
  addVariant(data) {
    return resolver(axiosClient.post('/variant/add', data));
  },
  getVariantsForProduct(productId) {
    return resolver(axiosClient.get(`/variant/product/${productId}`));
  },
};
