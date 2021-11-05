<template>
  <div class="content">
    <!-- <div class="contentTitle">
      <h2 :class="{skew:$store.state.isSkew}" :contentTitle="contentTitle">{{ contentTitle }}</h2>
    </div> -->
    <div class="group">
      <div class="text">
        <p :contentTextH1="contentTextH1" class="name">{{ contentTextH1 }}</p>
        <ul>
          <li v-for="img,index in imgs" :key="index">
            <div>
              <img :src="img" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgs: Array,
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  li {
    div {
      width: 100%;
      text-align: center;
      img {
        width: 256px;
        height: 256px;
        object-fit: cover;
        transition: .3s;
        &:hover {
          transform: scale(1.1, 1.1);
        }
      }
    }
  }
}

@media screen and(min-width:480px) {

}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  ul {
    margin: 0 ;
    display: grid;
    grid-template-columns: repeat(3, 22vw);
    grid-template-rows: repeat(3, 22vw);
    justify-content: center;
    margin: 0 auto;
    li {
      div {
        width: 100%;
        text-align: center;
        img {
          width: 22vw;
          height: 22vw;
          object-fit: cover;
          transition: .3s;
          &:hover {
            transform: scale(1.1, 1.1);
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1025px) {
  ul {
    margin: 0 ;
    display: grid;
    grid-template-columns: repeat(3, 22vw);
    grid-template-rows: repeat(3, 22vw);
    justify-content: center;
    margin: 0 auto;
    li {
      div {
        width: 100%;
        text-align: center;
        img {
          width: 22vw;
          height: 22vw;
          object-fit: cover;
          transition: .3s;
          &:hover {
            transform: scale(1.1, 1.1);
          }
        }
      }
    }
  }
}
</style>
