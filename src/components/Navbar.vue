<template>
  <nav class="navbar navbar-expand-lg bg-success">
    <div class="container">
      <a class="navbar-brand text-white fw-bold" href="/">Kulineran</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/foods"
              >Foods</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/keranjang">
              Keranjang
              <i class="bi bi-basket text-white"></i>
              <span class="badge bg-secondary ms-2">{{ count }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Navbar",

  data() {
    return {
      keranjangs: [],
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
  },
  mounted() {
    axios
      .get(`http://localhost:3000/keranjangs`)
      .then((response) => {
        this.setKeranjangs(response.data);
        this.$store.commit("INCREMENT_COUNT", this.keranjangs.length);
      })
      .catch((error) => console.log(error));
  },
  computed: mapState({
    count() {
      return this.$store.state.count;
    },
  }),
};
</script>

<style></style>
