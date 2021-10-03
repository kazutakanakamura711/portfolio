<template>
  <div class="content">
    <!-- <div class="contentTitle">
      <h2 :class="{skew:$store.state.isSkew}" :contentTitle="contentTitle">{{ contentTitle }}</h2>
    </div> -->
    <div class="group">
      <div class="text">
        <p :contentTextH1="contentTextH1" class="name">{{ contentTextH1 }}</p>
        <ul>
          <li v-for="img in imgs" :key="img">
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
        width: 250px;
        height: 250px;
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
    display: flex;
    justify-content: center;
    li {
      div {
        width: 100%;
        text-align: center;
        img {
          width: 230px;
          height: 230px;
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
    display: flex;
    justify-content: center;
    li {
      div {
        width: 100%;
        text-align: center;
        img {
          width: 330px;
          height: 330px;
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
