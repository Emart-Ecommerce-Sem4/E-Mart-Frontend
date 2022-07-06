/* eslint-disable import/no-anonymous-default-export */
import { axiosClient, resolver } from '../client';

export default {
  getSubCategoriesForCategory(categoryId) {
    return resolver(axiosClient.get(`/subcategory/parent/${categoryId}`));
  },
};
