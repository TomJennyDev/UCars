import apiService from "services/apiService";
const carApi = {
  getProductAll() {
    const url = "/cars";
    return apiService.get(`${url}`);
  },
};
export default carApi;
