<template>
  <div>
    <div class="header">
      <!-- <div class="logo">
        <h1>KAZUTAKA</h1>
      </div> -->
      <div class="sp-menu">
        <span class="material-icons" id="open" @click="menuOpen">menu</span>
      </div>
    </div>
    <div class="overlay">
      <span class="material-icons" id="close" @click="menuClose">close</span>
      <nav>
        <ul>
          <li v-for="(title, i) in titles" :key="i" class="skew" @click="test">
            <nuxt-link :to="title.url" >{{ title.title }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  methods: {
    menuOpen() {
      const open = document.getElementById("open");
      const overlay = document.querySelector(".overlay");
      const close = document.getElementById("close");
      overlay.classList.add("show");
      open.classList.add("hide");
      close.addEventListener("click", () => {
        overlay.classList.remove("show");
        open.classList.remove("hide");
      });
      this.$store.commit("switchSkew");
    },
    menuClose() {
      const open = document.getElementById("open");
      const overlay = document.querySelector(".overlay");
      const close = document.getElementById("close");
      overlay.classList.add("show");
      open.classList.add("hide");
      close.addEventListener("click", () => {
        overlay.classList.remove("show");
        open.classList.remove("hide");
      });
      this.$store.commit("switchSkew");
    },
    test() {
      console.log('test')
    }
  },
};
</script>

<style lang="scss" scoped>
* {
  color: black;
  text-decoration: none;
  letter-spacing: 5px;
  z-index: 1000;
}
body {
  margin: 0;
  font-family: Verdana, sans-serif;
}
.overflow-hidden {
  overflow: hidden;
  }
.header {
  position: fixed;
  display: flex;
  padding: 0 86vw;
  margin: 0 auto;
  h1 {
    margin: 0;
    font-size: 1%;
    line-height: 64px;
    letter-spacing: 5px;
  }
}

.sp-menu {
  margin-left: auto;
}

#open {
  margin: 0 0 0 auto;
}

.sp-menu #open {
  font-size: 32px;
  line-height: 64px;
  cursor: pointer;
}

.sp-menu #open.hide {
  display: none;
}

main {
  padding: 0 16px;
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.95);
  text-align: center;
  padding: 64px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.6s;
}

.overlay.show {
  opacity: 1;
  pointer-events: auto;
}

.overlay #close {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 32px;
  cursor: pointer;
}

.overlay ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.overlay li {
  margin-top: 24px;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.3s, transform 0.3s;
}

.overlay.show li {
  opacity: 1;
  transform: none;
}

.overlay.show li:nth-child(1) {
  transition-delay: 0.1s;
}

.overlay.show li:nth-child(2) {
  transition-delay: 0.2s;
}

.overlay.show li:nth-child(3) {
  transition-delay: 0.3s;
}
.overlay.show li:nth-child(4) {
  transition-delay: 0.4s;
}
.overlay.show li:nth-child(5) {
  transition-delay: 0.5s;
}

@media screen and(min-width:480px) {
  .hamburger {
    display: none;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .hamburger {
    display: none;
  }
}
@media screen and (min-width: 1024px) {
  .hamburger {
    display: none;
  }
}
</style>