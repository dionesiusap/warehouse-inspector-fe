<template>
  <h1 class="text-left">Previous Inspection Batches</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Inspection Batch</th>
        <th scope="col">Time Started</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(inspection, index) in inspections" :key="index">
        <th scope="row">{{ inspection.batch }}</th>
        <td>{{ inspection.time }}</td>
        <td><router-link :to="'/inspections/' + inspection._id.$oid" class="badge badge-info">Details</router-link></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import InspectionDataService from "../services/InspectionDataService";
export default {
  name: "inspection-list",
  data() {
    return {
      inspections: [],
      name: ""
    };
  },
  methods: {
    retrieveitems() {
      InspectionDataService.getAll()
        .then(response => {
          this.inspections = response.data.inspections;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveitems();
    },
  },
  mounted() {
    this.retrieveitems();
  }
};
</script>

<style>
</style>
