<template>
  <div>
    <transition name="fade">
      <Hamburger  class="hamburger"  />
    </transition>
    <transition name="fade">
      <Header v-show="isShow" class="menubar" />
    </transition>
    <Nuxt  :class="{hede:isHide}"/>
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 上スクロールで非表示用のデータ
      scrollY: 0,
      isShow: true,
      isHide:false,
    }
  },
  mounted () {
    // スクロールイベントを取得
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('load', () => {
      this.onScroll()
    })
  },
  watch: {
    // 上にスクロールした時に表示
    scrollY (newValue, oldValue) {
      this.$set(this, 'isShow', newValue < oldValue)
    }
  },
  methods: {
    // スクロール値の取得
    onScroll () {
      this.$set(this, 'scrollY', window.pageYOffset)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>