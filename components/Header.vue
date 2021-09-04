<template>
  <div v-if="showMenu" class="menu">
    <ul>
      <li v-for="(title, i) in titles" :key="i" class="skew">
        <nuxt-link :to="title.url" >{{ title.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      titles: [
        {
          title: "TOP",
          isHover: false,
          url: "/",
          // dataText: "TOP",
        },
        {
          title: "PROFILE",
          isHover: false,
          url: "/#profile",
          // dataText: "PROFILE",
        },
        {
          title: "WORKS",
          isHover: false,
          url: "/#works",
          // dataText: "WORKS",
        },
        {
          title: "CONTACT",
          isHover: false,
          url: "/#contact",
          // dataText: "CONTACT",
        },
      ],
    };
  },
  mounted() {
    this.showMenu = false
    setTimeout(() => {
      this.showMenu = true
    }, 2700);
  },
};
</script>

<style lang="scss" scoped>
* {
  color: black;
  text-decoration: none;
}
div {
  .skew {
    animation: skew 3s infinite;
  }

  @keyframes skew {
    0% {
      transform: none;
    }
    33% {
      transform: none;
    }
    33.1% {
      transform: skewX(60deg);
    }
    33.6% {
      transform: skewX(-60deg);
    }
    33.9% {
      transform: none;
    }
    66% {
      transform: none;
    }
    66.4% {
      transform: skewX(55deg);
    }
    66.9% {
      transform: skewX(-55deg);
    }
    66.9% {
      transform: none;
    }
    77% {
      transform: none;
    }
    77.0% {
      transform: skewX(45deg);
    }
    77.9% {
      transform: skewX(-45deg);
    }
    77.9% {
      transform: none;
    }
  }
}

ul {
  position: fixed;
  padding: 0;
  font-size: 0.6em;
  list-style: none;
  display: flex;
  li {
    letter-spacing: 0.7em;
    margin: 1em;
    cursor: pointer;
    color: black;
  }
}
@media screen and(max-width:480px) {
  .menu {
    display: none;
  }
}
</style>