<template>
  <Hero />
  <div class="row mt-4">
    <div class="col-md-6">
      <h2>Makanan<strong> Terbaik</strong></h2>
    </div>
    <div class="col-md-6">
      <router-link to="/foods" class="btn btn-success float-end"
        >Lihat semua <i class="bi bi-eye-fill"></i
      ></router-link>
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
  name: "Home",
  components: {
    Hero,
    Card,
  },

  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },

  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => {
        this.setProducts(response.data);
      })
      .catch((error) => console.log(error));
  },
};
</script>
