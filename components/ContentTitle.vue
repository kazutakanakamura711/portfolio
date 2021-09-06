<template>
  <h2 class="skew">{{ contentTitle }}</h2>
</template>

<script>
export default {
  props: {
    contentTitle: String,
  }
}
</script>

<style lang="scss" scoped>
  h2 {
      margin: 4vh 0 4vh 0;
      text-align: center;
      font-size: 2.4vh;
      letter-spacing: 10px;
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
      transform: skewX(70deg);
    }
    33.6% {
      transform: skewX(-70deg);
    }
    33.9% {
      transform: none;
    }
    66% {
      transform: none;
    }
    66.1% {
      transform: skewX(65deg);
    }
    66.9% {
      transform: skewX(-65deg);
    }
    66.9% {
      transform: none;
    }
    77% {
      transform: none;
    }
    77.1% {
      transform: skewX(75deg);
    }
    77.6% {
      transform: skewX(-75deg);
    }
    77.9% {
      transform: none;
    }
  }
  

</style>