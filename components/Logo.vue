<template>
  <div>
    <img :class="{topImg:true ,skew:$store.state.isSkew }" 
    :src="logo" alt="" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    logo: String,
  }
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: flex-start;
  .topImg {
    width: 92%;
    margin: 22vh auto 4vh;
  }
  .skew {
    animation: skew 3s infinite;
  }
  @keyframes skew {
    0% {
      transform: none;
    }
    33% {
      transform: none;
    }
    33.3% {
      transform: skewX(30deg);
    }
    33.6% {
      transform: skewX(-30deg);
    }
    33.9% {
      transform: none;
    }
    66% {
      transform: none;
    }
    66.3% {
      transform: skewX(5deg);
    }
    66.6% {
      transform: skewX(-5deg);
    }
    66.9% {
      transform: none;
    }
    77% {
      transform: none;
    }
    77.3% {
      transform: skewX(15deg);
    }
    77.6% {
      transform: skewX(-15deg);
    }
    77.9% {
      transform: none;
    }
  }
}
@media screen and(min-width:480px) {
  div {
    .topImg {
      width: 64%;
      margin: 22vh auto 4vh;
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  div {
    .topImg {
      width: 64%;
      margin: 22vh auto 4vh;
    }
  }
}
@media screen and (min-width: 1025px) {
  div {
    .topImg {
      width: 64%;
      margin: 12vh auto 3vh;
    }
  }
}
</style>