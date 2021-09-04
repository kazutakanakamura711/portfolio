<template>
  <div>
    <img :src="contentImg" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    contentImg: String,
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 50vw;
  height: 50vh;
}

$pc: 1024px; // PC
$tab: 680px; // タブレット
$sp: 480px;  // スマホ

@mixin pc {
  @media (max-width: ($pc)) {
    @content;
  }
}
@mixin tab {
  @media (max-width: ($tab)) {
    @content;
  }
}
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
img {
  @include pc {
    
  }
  @include tab {
    width: 50vw;
    height: 25vh;
  }
  @include sp {
    width: 100vw;
    height: 50vh;
  }
}
</style>