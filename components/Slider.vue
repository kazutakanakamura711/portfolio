<template>
  <div class="box">
    <carousel
      :perPage="perPage"
      :autoplay="autoplay"
      :loop="loop"
      :paginationPadding="paginationPadding"
      :autoplayTimeout="autoplayTimeout"
      :speed="speed"
    >
      <slide>
        <div class="content">
          <p>神経衰弱アプリ</p>
          <a href="https://github.com/kazutakanakamura711/memoryWeakness"
            >github</a
          >
          <p>Nuxt.js/Illustrator/GarageBand</p>
        </div>
        <a href="https://memory-weakness.herokuapp.com/" target="”_blank”">
          <img src="@/assets/images/nuxtMemoryWeakness.png" />
        </a>
      </slide>
      <slide>
        <div class="content">
          <p>スロットアプリ</p>
          <a href="https://github.com/kazutakanakamura711/slotMaschine"
            >github</a
          >
          <p>Nuxt.js/vuetify/Illustrator/GarageBand</p>
        </div>
        <a href="http://slot-maschine-nuxt.herokuapp.com/" target="”_blank”">
          <img src="@/assets/images/nuxtSlot.png" />
        </a>
      </slide>
      <slide>
        <div class="content">
          <p>居酒屋HP</p>
          <s>github</s>
          <p>Nuxt.js/vuetify</p>
        </div>
        <a href="https://sankichi.herokuapp.com/" target="”_blank”">
          <img src="@/assets/images/sankichiDemo.png" />
        </a>
      </slide>
    </carousel>
  </div>
</template>

<script>
import Carousel from "vue-carousel/src/Carousel.vue";
import Slide from "vue-carousel/src/Slide.vue";
export default {
  components: {
    Carousel,
    Slide,
  },
  props: {
    perPage: Number,
    autoplay: Boolean,
    loop: Boolean,
    paginationPadding: Number,
    autoplayTimeout: Number,
    speed: Number,
  },
};
</script>
<style lang="scss" scoped>
.box {
  position: relative;
  .content {
    font-size: 80%;
    text-align: center;
    margin-top: 16%;
    text-align: center;
  }
  a {
    img {
      margin: 5% 16.2% 10%;
      width: 68%;
      height: 54%;
    }
  }
}

@media screen and(min-width:480px) {
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
}
@media screen and (min-width: 1024px) {
}
</style>