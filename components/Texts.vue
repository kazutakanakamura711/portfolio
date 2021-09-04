<template>
<div class="block">
    <p class="name">{{ contentTextH1 }}</p>
  <div>
    <p>
      {{ contentTextP }}
    </p>
  </div>
</div>
</template>

<script>
export default {
  props: {
    contentTextH1: String,
    contentTextP: String,
  }
};
</script>

<style lang="scss" scoped>

</style>