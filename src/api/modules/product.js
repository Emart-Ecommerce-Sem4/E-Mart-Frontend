/* eslint-disable import/no-anonymous-default-export */
import { axiosClient, resolver } from '../client';

export default {
  getAllProducts() {
    return resolver(axiosClient.get('/pproduct'));
  },
};
