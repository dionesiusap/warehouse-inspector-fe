import http from "../http-common";

class PackageInspectionDataService
{
  getAll()
  {
    return http.get("/inspections");
  }

  get(id)
  {
    return http.get(`/inspections/${id}`);
  }
}

export default new PackageInspectionDataService();
