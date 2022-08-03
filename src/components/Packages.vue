<template>
  <h1 class="text-left">Packages List</h1>

  <h4 class="text-left">Filters</h4>
  <div class="form-row text-left">
    <div class="form-group col-6">
      <label for="inputName">Package Name</label>
      <div class="input-group">
        <input type="text" class="form-control" id="inputName" v-model="name">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="filteredSearch">Search</button>
        </div>
      </div>
    </div>
  </div>

  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ item.name }}</td>
        <td><p class="text-left">{{ item.description }}</p></td>
        <td><router-link :to="'/packages/' + item._id.$oid" class="badge badge-info">Details</router-link></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import PackageDataService from "../services/PackageDataService";
export default {
  name: "package-list",
  data() {
    return {
      items: [],
      name: ""
    };
  },
  methods: {
    retrieveitems() {
      PackageDataService.getAll()
        .then(response => {
          this.items = response.data.packages;
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
      PackageDataService.findByName(this.name)
        .then(response => {
          this.items = response.data.packages;
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
