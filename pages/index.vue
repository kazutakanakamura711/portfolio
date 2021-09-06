<template>
  <div>
    <Title class="title" id="top"/>
    <TopImage v-if="show.topImage" :moveMessages="moveMessages" />
    <transition name="fade">
      <Logo v-if="show.logo" :logo="logo.top" />
    </transition>
    <Spacer />
    
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
    <Spacer />
    <transition name="fade">
      <Works
        class="works"
        v-parallax="0.2"
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
    <Spacer />
    <transition name="fade">
      <Contact
        class="contact"
        v-parallax="0.2"
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
      <Sns v-if="show.logo" :snsLogo="snsLogo"  />
    </transition>
  </div>
</template>

<script>
import Carousel from '../components/Slider.vue';
import Logo from "../components/Logo.vue";
import Works from "../components/Works.vue";
import Hamburger from '../components/Hamburger.vue';
export default {
  transition: {
    name: "fade",
    mode: 'out-in'
  },
  components: { Logo, Works, Carousel, Hamburger },
  data() {
    return {
      msg: "KAZUTAKANAKAMURA",
      moveMessages: [],
      show: {
        logo: false,
        topImage: true,
      },
      logo: {
        top: require("~/assets/images/kazutaka.png"),
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
      contents: {
        profile: {
          title: "Profile",
          img: require("~/assets/images/_DSC1805.jpg"),
          textH1: "KAZUTAKA NAKAMURA",
          textP:
            "はじめまして。愛媛県を拠点にWebエンジニアとして活動させていただいております中村と申します。印刷会社を退社後フリーにてWeb制作をさせていただいております。最近はドローンに興味を持っており、空撮などのスキルを身に付けている最中です。",
        },
        works: {
          title: "Works",
          img: require("~/assets/images/programming.jpg"),
          textH1: "",
          textP:
            "制作物です。神経衰弱やスロットは実際に遊べますので触っていただけたらと思います。今後はドローンを使用した空撮などを含めた制作を行っていこうと思います。",
        },
        contact: {
          title: "Contact",
          img: require("~/assets/images/4953190_m.jpg"),
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
.fade-enter-active, .fade-leave-active  {
  transition: opacity .6s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}



</style>