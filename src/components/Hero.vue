<template>
  <div class="d-none d-md-block">
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="d-flex h-100">
          <div class="justify-content-center align-self-center">
            <h2>
              <strong>Menu Makanan Lezat,</strong>
              <br />semua di genggamanmu!
            </h2>
            <p>Ayo segera pilih dan pesan makanan favorit anda!</p>
            <router-link to="/foods" class="btn btn-lg btn-success">
              Pesan <i class="bi bi-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <img src="../assets/hero.svg" alt="hero" width="500" />
      </div>
    </div>
  </div>

  <!-- mobile -->
  <div class="d-sm-block d-md-none">
    <div class="row mt-3">
      <div class="col-md-6 text-center">
        <img src="../assets/hero.svg" alt="hero" width="300" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="d-flex h-100">
        <div class="justify-content-center align-self-center text-center">
          <h2>
            <strong>Menu Makanan Lezat,</strong>
            <br />semua di genggamanmu!
          </h2>
          <p>Ayo segera pilih dan pesan makanan favorit anda!</p>
          <router-link to="/foods" class="btn btn-lg btn-success">
            Pesan <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style></style>
