<template>
  <div class="content">
    <!-- <div class="contentTitle">
      <h2 :class="{skew:$store.state.isSkew}" :contentTitle="contentTitle">{{ contentTitle }}</h2>
    </div> -->
    <div class="group" >
      <img :src="contentImg" alt="" :contentImg="contentImg" class="img" />
      <div class="text">
        <!-- <p :contentTextH1="contentTextH1" class="name">{{ contentTextH1 }}</p> -->
        <p :contentTextP="contentTextP" class="textProfile">
          {{ contentTextP }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contentTitle: String,
    contentImg: String,
    contentTextH1: String,
    contentTextP: String,
    logos: Array,
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: block;
  .snsLogos {
    display: flex;
    list-style: none;
    padding: 0;
    width: 100%;
    .snsLogo {
      text-align: center;
      width: 50%;
      margin: 5%;
      img {
        width: 25%;
      }
      img:hover {
        transform:scale(1.5,1.5);
        transition: .5s;
      }
    }
  }
  .contentTitle {
    h2 {
      margin: 4vh 0 4vh 0;
      text-align: center;
      font-size: 2.4vh;
      letter-spacing: 10px;
    }
    .skew {
      animation: skew 3s infinite;
    }
  }
  .img {
    width: 100vw;
    height: auto;
  }
  .text {
    font-size: 75%;
    .name {
      text-align: center;
    }
    .textProfile {
      margin: 8%;
    }
  }
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
@media screen and(min-width:480px) {
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .group {
    display: flex;
    .img {
      width: 50%;
    }
    .name {
      font-size: 85%;
    }
    .text {
      font-size: 85%;
    }
  }
}
@media screen and (min-width: 1024px) {
  .group {
    display: flex;
    .img {
      width: 50%;
    }
    .name {
      font-size: 100%;
    }
    .text {
      font-size: 100%;
    }
  }
  .content {
    .snsLogos {
      .snsLogo {
        img {
          width: 12.5%;
        }
      }
    }
  }
}
</style>