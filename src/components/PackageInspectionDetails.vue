<template>
  <h1 class="text-left">Package Inspection Details</h1>

  <h2 class="text-left">Information</h2>
  
  <div v-if="packageInspection">
    <table class="table table-sm text-left">
      <tr>
        <th>Package Name</th>
        <td>{{ packageInspection.name }}</td>
      </tr>
      <tr>
        <th>Status</th>
        <td v-if="packageInspection.status"><i class="bi bi-check-circle"></i> Checked</td>
        <td v-else><i class="bi bi-x-circle"></i> Failed</td>
      </tr>
      <tr>
        <th>Position</th>
        <td>{{ packageInspection.position }}</td>
      </tr>
      <tr>
        <th>Inspection Batch</th>
        <td>{{ packageInspection.batch }}</td>
      </tr>
      <tr>
        <th>Checked On</th>
        <td>{{ packageInspection.timestamp }}</td>
      </tr>
      <tr>
        <th>Captured Image</th>
        <td><img v-bind:src="packageInspection.image"/></td>
      </tr>
    </table>
  </div>
  <div v-else>
    <br />
    <p>LOADING...</p>
  </div>
</template>
<script>
import PackageInspectionDataService from "../services/PackageInspectionDataService";
export default {
  name: "package-inspection-details",
  components: {
  },
  data() {
    return {
      packageInspection: null
    };
  },
  methods: {
    getPackageInspection(id) {
      PackageInspectionDataService.get(id)
        .then(response => {
          this.packageInspection = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = '';
    this.getPackageInspection(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
