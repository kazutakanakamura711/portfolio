<template>
  <div>
    <img :src="img" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    img: String,
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100vw;
  height: auto;
}

</style>