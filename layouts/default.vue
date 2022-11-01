<template>
  <div>
    <transition name="fade">
      <Hamburger   v-show="isShow" class="hamburger"  />
    </transition>
    <transition name="fade">
      <Header v-show="isShow" class="menubar" />
    </transition>
    <Nuxt  class="nuxt" />
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isShow = true;
    }, 2700);
  }
}
</script>
<style lang="scss" scoped>
  div {
    position: relative;
    .menubar {
      z-index: 100;
    }
    .nuxt {
      z-index: 10;
    }
  }
  .hamburger {
    position: fixed;
  }
</style>
