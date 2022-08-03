import http from "../http-common";

class PackageDataService {
  getAll()
  {
    return http.get("/packages");
  }

  get(id)
  {
    return http.get(`/packages/${id}`);
  }

  update(id, data)
  {
    return http.put(`/packages/${id}`, data);
  }

  findByName(name) {
    return http.get(`/packages?name=${name}`);
  }
}

export default new PackageDataService();
