<template>
  <h1 class="text-left">Package Details</h1>

  <h2 class="text-left">Package Information</h2>
  
  <div v-if="item && packageInspections">
    <table class="table table-sm text-left">
      <tr>
        <th>Name</th>
        <td>{{ item.name }}</td>
      </tr>
      <tr>
        <th>Description</th>
        <td>{{ item.description }}</td>
      </tr>
      <tr>
        <th>Latest Position</th>
        <td>{{ packageInspections[0].position }}</td>
      </tr>
      <tr>
        <th>Latest Status</th>
        <td v-if="packageInspections[0].status"><i class="bi bi-check-circle"></i> Checked</td>
        <td v-else><i class="bi bi-x-circle"></i> Failed</td>
      </tr>
      <tr>
        <th>Latest Image</th>
        <td><ImageModal :packageInspection="packageInspections[0]"></ImageModal></td>
      </tr>
      <tr>
        <th>Last Checked</th>
        <td>{{ packageInspections[0].timestamp }}</td>
      </tr>
    </table>

    <h2 class="text-left">Previous Inspections</h2>
    <PackageInspectionTable :packageInspections="packageInspections" omitName></PackageInspectionTable>
  </div>
  <div v-else>
    <br />
    <p>LOADING...</p>
  </div>
</template>
<script>
import PackageDataService from "../services/PackageDataService";
import PackageInspectionDataService from "../services/PackageInspectionDataService";
import PackageInspectionTable from "./PackageInspectionTable.vue";
import ImageModal from "./ImageModal.vue";
export default {
  name: "package-details",
  components: {
    PackageInspectionTable,
    ImageModal,
  },
  data() {
    return {
      item: null,
      packageInspections: null
    };
  },
  methods: {
    getPackage(id) {
      PackageDataService.get(id)
        .then(response => {
          this.item = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      PackageInspectionDataService.findByPackageId(id)
        .then(response => {
          this.packageInspections = response.data.packageInspections;
          console.log(response.data.packageInspections);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = '';
    this.getPackage(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
