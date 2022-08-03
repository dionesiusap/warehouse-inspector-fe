<template>
  <h1 class="text-left">Package Inspection History</h1>

  <h4 class="text-left">Filters</h4>
  <div class="form-row text-left">
    <div class="form-group col-6">
      <label for="inputName">Package Name</label>
      <div class="input-group">
        <input type="text" class="form-control" id="inputName" v-model="queryDict.packageName">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="filteredSearch">Search</button>
        </div>
      </div>
    </div>
    <div class="form-group col-3">
      <label for="inputLocation">Position</label>
      <select id="inputLocation" class="form-control" v-model="queryDict.position" @change="filteredSearch">
        <option selected value="">All</option>
        <option>A1-1</option>
        <option>B2-2</option>
        <option>C3-3</option>
      </select>
    </div>
    <div class="form-group col-3">
      <label for="inputStatus">Status</label>
      <select id="inputStatus" class="form-control" v-model="queryDict.status" @change="filteredSearch">
        <option selected value="">All</option>
        <option value="true">Checked</option>
        <option value="false">Failed</option>
      </select>
    </div>
  </div>

  <PackageInspectionTable :packageInspections="packageInspections"></PackageInspectionTable>
  
</template>

<script>
import PackageInspectionDataService from "../services/PackageInspectionDataService";
import PackageInspectionTable from "./PackageInspectionTable.vue";
// import PackageDataService from "../services/PackageDataService";
export default {
  name: "package-inspection-list",
  components: {
    PackageInspectionTable,
  },
  data() {
    return {
      packageInspections: [],
      queryDict: {
        packageName: "",
        position: "",
        status: "",
      },
    };
  },
  methods: {
    retrieveitems() {
      PackageInspectionDataService.getAll()
        .then(response => {
          this.packageInspections = response.data.packageInspections;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveitems();
    },
    filteredSearch() {
      console.log(this.queryDict)
      PackageInspectionDataService.findByProperties(this.queryDict)
        .then(response => {
          this.packageInspections = response.data.packageInspections;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveitems();
  }
};
</script>

<style>
</style>
