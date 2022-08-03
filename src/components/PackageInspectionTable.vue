<template>
  <table class="table">
    <thead>
    <tr>
      <th v-if="!omitName" scope="col">Package Name</th>
      <th scope="col">Status</th>
      <th scope="col">Position</th>
      <th v-if="!omitBatch" scope="col">Inspection Batch</th>
      <th scope="col">Time</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(packageInspection, index) in packageInspections" :key="index">
      <td v-if="!omitName"><router-link :to="'/packages/' + packageInspection._package_id.$oid">{{ packageInspection.name }}</router-link></td>
      <td v-if="packageInspection.status"><i class="bi bi-check-circle"></i> Checked</td>
      <td v-else><i class="bi bi-x-circle"></i> Failed</td>
      <td>{{ packageInspection.position }}</td>
      <td v-if="!omitBatch"><router-link :to="'/inspections/' + packageInspection._inspection_id.$oid">{{ packageInspection.batch }}</router-link></td>
      <td>{{ packageInspection.timestamp }}</td>
      <td>
        <ImageModal :packageInspection="packageInspection"></ImageModal>
        &nbsp;
        <router-link :to="'/package_inspections/' + packageInspection._id.$oid" class="badge badge-info">Details</router-link>
      </td>
    </tr>
  </tbody>
  </table>
</template>
<script>
import ImageModal from "./ImageModal.vue";

export default {
  name: "package-inspection-table",
  components: {
    ImageModal,
  },
  props: {
    packageInspections: {
      type: Object,
    },
    omitName: Boolean,
    omitBatch: Boolean
  },
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
