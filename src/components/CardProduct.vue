<template>
  <div
    class="card rounded shadow-lg p-3 mb-5 bg-body-tertiary rounded"
    style="width: 18rem"
  >
    <img
      :src="`/images/${product.gambar}`"
      class="card-img-top"
      alt="foto makanan"
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text">Harga : Rp. {{ product.harga }}</p>
      <router-link class="btn btn-success" :to="'/food/' + product.id">
        Pesan</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["product"],
};
</script>

<style></style>
