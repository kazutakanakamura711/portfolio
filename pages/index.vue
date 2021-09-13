<template>
  <div>
    <Title class="title" id="top" />
    <TopImage v-if="show.topImage" :moveMessages="moveMessages" />
    <transition name="fade">
      <Logo v-if="show.logo" :logo="logo.top" />
    </transition>
    <Spacer />
    <ContentTitle :contentTitle="contentTitle.profile" v-if="show.logo" />
    <transition name="fade">
      <Profile
        class="profile"
        id="profile"
        v-if="show.logo"
        :contentTitle="contents.profile.title"
        :contentImg="contents.profile.img"
        :contentTextH1="contents.profile.textH1"
        :contentTextP="contents.profile.textP"
      />
    </transition>
    <transition name="fade">
      <Img v-if="show.logo" v-parallax="0.1" class="img" :img="imgs" />
    </transition>
    <!-- <Spacer /> -->
    <ContentTitle :contentTitle="contentTitle.works" v-if="show.logo" />
    <transition name="fade">
      <Works
        class="works"
        id="works"
        v-if="show.logo"
        :contentTitle="contents.works.title"
        :contentImg="contents.works.img"
        :contentTextH1="contents.works.textH1"
        :contentTextP="contents.works.textP"
      />
    </transition>
    <transition name="fade">
      <Slider
        v-if="show.logo"
        :per-page="1"
        :autoplay="true"
        :loop="true"
        :pagination-padding="10"
        :autoplay-timeout="2000"
        :speed="1000"
      />
    </transition>
    <transition name="fade">
      <Img v-if="show.logo" v-parallax="0.1" class="img" :img="imgs" />
    </transition>

    <ContentTitle :contentTitle="contentTitle.contact" v-if="show.logo" />
    <transition name="fade">
      <Contact
        class="contact"
        id="contact"
        v-if="show.logo"
        :contentTitle="contents.contact.title"
        :contentImg="contents.contact.img"
        :contentTextH1="contents.contact.textH1"
        :contentTextP="contents.contact.textP"
        :logos="snsLogo"
      />
    </transition>
    <transition name="fade">
      <Sns v-if="show.logo" :snsLogo="snsLogo" />
    </transition>
  </div>
</template>

<script>
import Carousel from "../components/Slider.vue";
import Logo from "../components/Logo.vue";
import Works from "../components/Works.vue";
import Hamburger from "../components/Hamburger.vue";
export default {
  transition: {
    name: "fade",
    mode: "out-in",
  },
  components: { Logo, Works, Carousel, Hamburger },
  data() {
    return {
      imgs: require("~/assets/images/railroadCrossing.png"),
      msg: "KAZUTAKANAKAMURA",
      moveMessages: [],
      show: {
        logo: false,
        topImage: true,
      },
      logo: {
        top: require("~/assets/images/firstCollage.jpg"),
      },
      snsLogo: [
        {
          icon: require("~/assets/images/twitter.png"),
          url: "https://twitter.com/Kazutak55541061",
        },
        {
          icon: require("~/assets/images/instagram.png"),
          url: "https://www.instagram.com/kazutaka.nakamura.376/",
        },
      ],
      contentTitle: {
        profile: "Profile",
        works: "Works",
        contact: "Contact",
      },
      contents: {
        profile: {
          title: "Profile",
          img: require("~/assets/images/profileImg.jpg"),
          textH1: "KAZUTAKA NAKAMURA",
          textP:
            "はじめまして。愛媛県を拠点にWebエンジニアとして活動させていただいております中村と申します。印刷会社を退社後フリーにてWeb制作をさせていただいております。最近はドローンに興味を持っており、空撮などのスキルを身に付けている最中です。",
        },
        works: {
          title: "Works",
          img: require("~/assets/images/crane.png"),
          textH1: "",
          textP:
            "制作物です。神経衰弱やスロットは実際に遊べますので触っていただけたらと思います。今後はドローンを使用した空撮などを含めた制作を行っていこうと思います。",
        },
        contact: {
          title: "Contact",
          img: require("~/assets/images/contact.png"),
          textH1: "KAZUTAKA NAKAMURA",
          textP:
            "お問い合わせはTwitterまたはInstagramのDMからお願いいたします。",
        },
      },
    };
  },
  methods: {
    mkmessages() {
      for (let i = 0; i < 18; i++) {
        if (i % 2 == 0) {
          this.moveMessages.push({
            message: this.msg,
            right: true,
            left: false,
          });
        }
        if (i % 2 != 0) {
          this.moveMessages.push({
            message: this.msg,
            right: false,
            left: true,
          });
        }
      }
    },
  },
  mounted() {
    this.mkmessages();
    setTimeout(() => {
      this.show.logo = true;
      this.show.topImage = false;
    }, 2700);
  },
};
</script>

<style lang="scss" >
body {
  margin: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

// .profile,
// .works,
// .contact {
//   background-image: url('~/assets/images/dot.jpg');
//   background-size: cover;
//   background-size: 150px;
//   background-color:rgba(255,255,255,.8);
//   background-blend-mode:lighten;
// }
// body {
//   background-image: url('~/assets/images/dot.jpg');
//   background-size: cover;
//   background-size: 150px;
//   background-color:rgba(255,255,255,.8);
//   background-blend-mode:lighten;
// }

@media screen and(min-width:480px) {
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
}
@media screen and (min-width: 1024px) {
}
</style>