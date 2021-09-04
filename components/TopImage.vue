<template>
<div>
  <div>
    <ul>
      <li v-for="moveMessage,i in moveMessages " :key="i"
      :class="{right:moveMessage.right ,left:moveMessage.left}">{{moveMessage.message}}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: {
    moveMessages: Array,
  }
}
</script>

<style lang="scss" scoped>
  div {
    ul {
      text-align: center;
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        // font-size: 4vw;
        font-size: 6vw;
        letter-spacing: .2em;
      }
    }
    .right {
      animation: move 3s  linear;
      // text-align: center;
    }
    .left {
      animation: moveRevers 3s  linear;
      // text-align: center;
    }
    
    @keyframes move {
        0% {
            transform: none;
        }
        100% {
            transform: translateX(1600px) ;
            // transform: translateX(1500px) rotate(360deg);
        }
    }
    @keyframes moveRevers {
        0% {
            transform: none;
        }
        100% {
            transform: translateX(-1600px) ;
            // transform: translateX(1500px) rotate(360deg);
        }
    }
  }

</style>