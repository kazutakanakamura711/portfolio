<template>
  <div class="title skew">
    <h1>KAZUTAKA&nbsp;NAKAMURA</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title {
  margin: 0 0 0 0;
  text-align: center;
  font-size: 1vh;
  letter-spacing: 6px;
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
  33.1% {
    transform: skewX(50deg);
  }
  33.6% {
    transform: skewX(-50deg);
  }
  33.9% {
    transform: none;
  }
  66% {
    transform: none;
  }
  66.3% {
    transform: skewX(50deg);
  }
  66.8% {
    transform: skewX(-50deg);
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


</style>