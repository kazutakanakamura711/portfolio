<template>
  <div>
    <ul class="snsLogos">
      <li class="snsLogo" v-for="(logo, i) in snsLogo" :key="i">
        <a :href="logo.url">
          <img :src="logo.icon" alt="" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    snsLogo: Array,
  },
};
</script>

<style lang="scss" scoped>
div {
  ul {
    padding: 0;
    width: 100%;
    display: flex;
    list-style: none;
    li {
      text-align: center;
      width: 50%;
      margin: 1%;
      img {
        width: 10vw;
      }
      img:hover {
        transform:scale(1.5,1.5);
        transition: .5s;
      }
    }
  }
}
@media screen and(min-width:480px) {
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
}
@media screen and (min-width: 1024px) {
  div {
  ul {
    padding: 0;
    width: 100%;
    display: flex;
    list-style: none;
    li {
      text-align: center;
      width: 50%;
      margin: 12.5%;
      img {
        width: 8vw;
      }
    }
  }
}
  
}

</style>