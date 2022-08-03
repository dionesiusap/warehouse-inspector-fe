import http from "../http-common";

class PackageInspectionDataService
{
  getAll()
  {
    return http.get("/package_inspections");
  }

  get(id)
  {
    return http.get(`/package_inspections/${id}`);
  }

  findByPackageId(packageId)
  {
    return http.get(`/package_inspections?package_id=${packageId}`);
  }

  findByInspectionId(batchId)
  {
    return http.get(`/package_inspections?inspection_id=${batchId}`);
  }

  findByProperties(properties)
  {
    let query = ""
    if (properties.packageName)
    {
      query = query.concat("package_name=", properties.packageName)
    }

    if (properties.position)
    {
      if (query) {
        query = query.concat("&position=", properties.position)
      }
      else {
        query = query.concat("position=", properties.position)
      }
    }

    if (properties.status)
    {
      if (query) {
        query = query.concat("&status=", properties.status)
      }
      else {
        query = query.concat("status=", properties.status)
      }
    }

    return http.get(`/package_inspections?${query}`);
  }
}

export default new PackageInspectionDataService();
