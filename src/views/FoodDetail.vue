<template>
  <!-- breadcrumb -->
  <div class="row mt-4">
    <div class="col">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-dark">Home</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/foods" class="text-dark">Foods</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Food Order</li>
        </ol>
      </nav>
    </div>
  </div>

  <div class="row mt-3 mb-5">
    <div class="col-md-6">
      <img
        :src="`/images/${product.gambar}`"
        class="img-fluid shadow rounded shadow-lg"
      />
    </div>
    <div class="col-md-6">
      <h2>
        <strong>{{ product.nama }}</strong>
      </h2>
      <hr />
      <h4>
        Harga :
        <strong>Rp. {{ product.harga }}</strong>
      </h4>
      <form class="mt-4" v-on:submit.prevent>
        <div class="form-group">
          <label for="jumlah_pemesanan">Jumlah Pesan</label>
          <input type="number" class="form-control" />
        </div>
        <div class="form-group">
          <label for="keterangan">Keterangan</label>
          <textarea
            class="form-control"
            placeholder="Keterangan spt : Pedes, Nasi Setengah .."
          ></textarea>
        </div>

        <button type="submit" class="btn btn-success mt-4" @click="pemesanan">
          Pesan <i class="bi bi-basket text-white"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FoodDetail",
  data() {
    return {
      product: [],
    };
  },
  methods: {
    setProducts(data) {
      this.product = data;
    },
  },

  mounted() {
    axios
      .get(`http://localhost:3000/products/` + this.$route.params.id)
      .then((response) => {
        this.setProducts(response.data);
      })
      .catch((error) => console.log(error));
  },
};
</script>
