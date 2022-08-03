<template>
  <h1 class="text-left">Inspection Batch Details</h1>

  <h2 class="text-left">Batch Information</h2>
  
  <div v-if="inspection">
    <table class="table table-sm text-left">
      <tr>
        <th>Batch Number</th>
        <td>{{ inspection.batch }}</td>
      </tr>
      <tr>
        <th>Time Started</th>
        <td>{{ inspection.time }}</td>
      </tr>
    </table>

    <h2 class="text-left">Checked Items</h2>
    <PackageInspectionTable :packageInspections="packageInspections" omitBatch></PackageInspectionTable>
  </div>
  <div v-else>
    <br />
    <p>LOADING...</p>
  </div>
</template>
<script>
import InspectionDataService from "../services/InspectionDataService";
import PackageInspectionDataService from "../services/PackageInspectionDataService";
import PackageInspectionTable from "./PackageInspectionTable.vue";
export default {
  name: "package-details",
  components: {
    PackageInspectionTable,
  },
  data() {
    return {
      inspection: null,
      packageInspections: null
    };
  },
  methods: {
    getInspection(id) {
      InspectionDataService.get(id)
        .then(response => {
          this.inspection = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      PackageInspectionDataService.findByInspectionId(id)
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
    this.getInspection(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
