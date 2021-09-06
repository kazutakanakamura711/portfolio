<template>
  <div>
    <transition name="fade">
      <Hamburger   v-show="isShow" class="hamburBar"  />
    </transition>
    <transition name="fade">
      <Header v-show="isShow" class="menubar" />
    </transition>
    <Nuxt  />
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
  
</style>