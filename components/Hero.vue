<template>
  <div class="hero">
    <img src="../assets/img/heroImg.jpg" alt="Salle de cinema vide">
    <div class="hero__text-container">
      <div class="hero__text-container__head">
        <h1>Web Dev Movie</h1>
        <a href="#movie-grid" class="hero__text-container__btn button">Voir un film</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang='scss' scoped>
.hero {
  height: 400px;
  position: relative;
  @media (min-width: 750px) {
    height: 500px;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__text-container {
    z-index: 99;
    position: absolute;
    top: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__head {
      padding: 0 16px;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
    }
    h1 {
      color: #fff;
      font-size: 64px;
      font-weight: 200;
      margin-bottom: 8px;
      @media (min-width: 750px) {
        font-size: 84px;
      }
    }
    .button {
      font-size: 20px;
      align-self: flex-start;
    }
  }
}
</style>
