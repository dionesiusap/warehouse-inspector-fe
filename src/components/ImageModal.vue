<template>
  <a :href="'#imageModal'+packageInspection._id.$oid" class="badge badge-warning" data-toggle="modal">View Image</a>
  <div class="modal fade" :id="'imageModal'+packageInspection._id.$oid" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="imageModalLabel">{{ packageInspection.name }} at {{ packageInspection.timestamp }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <img v-bind:src="packageInspection.image"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "package-inspection-table",
  props: {
    packageInspection: {
      type: Object,
    }
  },
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
