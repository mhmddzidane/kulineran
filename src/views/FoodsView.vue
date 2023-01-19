<template>
  <div class="row">
    <div class="col mt-4">
      <h2>Daftar <strong>Makanan</strong></h2>
    </div>
  </div>

  <div class="row mb-3">
    <div class="col">
      <div class="input-group mb-3">
        <input
          v-model="search"
          @keyup="searchFoods"
          type="text"
          class="form-control"
          placeholder="Cari Makanan..."
          aria-describedby="basic-addon1"
        />
        <span class="input-group-text" id="basic-addon1"
          ><i class="bi bi-search"></i
        ></span>
      </div>
    </div>
  </div>

  <div class="row mb-3">
    <div
      class="col-md-4 mt-4 d-flex justify-content-center"
      v-for="product in products"
      :key="product.id"
    >
      <Card :product="product" />
    </div>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import Card from "../components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Foods",
  components: {
    Hero,
    Card,
  },

  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFoods() {
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        .then((response) => {
          this.setProducts(response.data);
        })
        .catch((error) => console.log(error));
    },
  },

  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        this.setProducts(response.data);
      })
      .catch((error) => console.log(error));
  },
};
</script>
