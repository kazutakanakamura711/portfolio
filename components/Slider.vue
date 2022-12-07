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
      <slide v-for="item in slideList" :key="item">
        <div class="content">
          <p>
            <a :href="item.url" target="_blank" rel="noopener noreferrer">{{
              item.title
            }}</a>
          </p>
          <p>
            <a :href="item.gitHub" target="”_blank”"> github </a>
          </p>
          <p>{{ item.technologyUsed }}</p>
        </div>
        <a :href="item.url" target="”_blank”">
          <img :src="item.image" />
        </a>
      </slide>
      <!-- <slide>
        <div class="content">
          <p>
            <a href="https://member-list-laravel.herokuapp.com/"
              >会員リスト</a
            >
          </p>
          <p>
            <a href="https://github.com/kazutakanakamura711/member-list-laravel" target="”_blank”">
              github
            </a>
          </p>
          <p>Laravel/PHP/Sass</p>
        </div>
        <a href="https://member-list-laravel.herokuapp.com/" target="”_blank”">
          <img src="@/assets/images/memberListLaravelDemo.png" />
        </a>
      </slide> -->
      <!-- <slide>
        <div class="content">
          <p>居酒屋HP</p>
          <s>github</s>
          <p>Nuxt.js/Vue.js/vuetify</p>
        </div>
        <a href="https://sankichi.herokuapp.com/" target="”_blank”">
          <img src="@/assets/images/sankichiDemo.png" />
        </a>
      </slide> -->
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
  data() {
    return {
      slideList: [
        {
          title: "神経衰弱アプリ",
          url: "https://memory-weakness.netlify.app",
          gitHub: "https://github.com/kazutakanakamura711/memoryWeakness",
          technologyUsed: "Nuxt.js/Vue.js/Illustrator/GarageBand",
          image: require("@/assets/images/img-nuxtMemoryWeakness.png"),
        },
        {
          title: "スロットアプリ",
          url: "https://slot-maschine-nuxt.netlify.app",
          gitHub: "https://github.com/kazutakanakamura711/slotMaschine",
          technologyUsed: "Nuxt.js/Vue.js/vuetify/Illustrator/GarageBand",
          image: require("@/assets/images/img-nuxtSlot.png"),
        },
        {
          title: "プログラミング思考知育アプリ",
          url: "https://programming-go.netlify.app",
          gitHub: "https://github.com/kazutakanakamura711/forKids",
          technologyUsed: "Nuxt.js",
          image: require("@/assets/images/img-programming-go.png"),
        },
      ],
    };
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
@import "~assets/scss/variable";
.box {
  position: relative;
  .content {
    font-size: 80%;
    text-align: center;
    margin-top: 16%;
    text-align: center;
  }
  a {
    color: $mainFontColor;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
      opacity: 0.5;
    }
    img {
      cursor: pointer;
      margin: 5% 22% 10%;
      width: 50vw;
      height: auto;
      display: block;
      margin: 0 auto;
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
