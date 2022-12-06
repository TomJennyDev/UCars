import apiService from "services/apiService";
const brandApi = {
  getBrandsAll() {
    const url = "/brands";
    return apiService.get(url);
  },
  getBrand(id) {
    const url = `/brands/${id}`;
    return apiService.get(url);
  },
  putEditBrand(params, id) {
    const url = `/brands/${id}`;
    return apiService.put(url, { params });
  },
};
export default brandApi;
