<style >
.icon-btn {
  padding: 0 !important;
}
</style>

<template>
  <div>
    <v-app id="inspire" style="max-height:300px;" >
      <v-app-bar app color="white" flat >
        <v-system-bar
            height="30"
            color="#ff8001"
            style="width:100%; position: absolute; z-index:9999; left:0px;top:0px;"
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="#fff"
              class="icon-btn"
              href="http://www.twhg.com.tw/jointwhg.php"
              target="_blank"
              >加盟專區｜</v-btn
            >
            <v-btn
              text
              color="#fff"
              class="icon-btn"
              href="http://www.twhg.com.tw/brand.php"
              target="_blank"
              >企業文化｜</v-btn
            >
            <v-btn
              text
              color="#fff"
              class="icon-btn"
              href="http://hr.twhg.com.tw/"
              target="_blank"
              >領袖招募｜</v-btn
            >
            <v-btn
              text
              color="#fff"
              class="icon-btn"
              href="http://www.twhg.com.tw/stores.php"
              target="_blank"
              >服務據點｜</v-btn
            >
            <v-btn
              text
              color="#fff"
              class="icon-btn"
              href="http://robot.twhg.com.tw/"
              target="_blank"
              ><v-icon color="#fff">fab fa-line</v-icon>地產機器人</v-btn
            >
            <v-btn
              text
              color="#fff"
              class="icon-btn ml-3"
              @click="$nuxt.$emit('login', true)"
              >登入/加入會員</v-btn
            >
            <v-btn text min-width="10px" color="#fff" class="icon-btn ml-2"
              ><v-icon color="#fff">fab fa-facebook-square</v-icon></v-btn
            >
            <v-btn
              text
              min-width="10px"
              color="#fff"
              class="icon-btn"
              @click="$nuxt.$emit('line', true)"
              ><v-icon color="#fff">fab fa-line</v-icon></v-btn
            >
          </v-system-bar>
   
          <v-avatar min-width="300" rounded="0" style="height:auto position:absolute;top:35px;"> 
            <v-img
              :src="require('~/assets/twhg-logo.png')"
              :max-width="290"
            ></v-img>
          </v-avatar>
          <v-tabs centered color="grey darken-1" style="position:relative;top:40px;">
            <v-spacer></v-spacer>
            <v-tab
              v-for="(nav, key) in navs"
              :key="key"
              class="font-weight-black"
              :href="nav.href"
              :target="nav.target"
              text
            >
              {{ nav.text }}
            </v-tab>
          </v-tabs>
            <!-- <RunMarque /> -->
            <SearchBar />
      </v-app-bar>

    </v-app>
    <v-main>
          <Nuxt />
    </v-main>
    <Modal />
  </div>
</template>

<script>
export default {
  data: () => ({
    head: {
      script: [{ src: "/js/modal.js" }]
    },

    navs: [
      {
        text: "買屋",
        href: "123123564"
      },
      {
        text: "賣屋",
        href: "123123564"
      },
      {
        text: "本店介紹",
        href: "123123564"
      },
      {
        text: "本店徵才",
        href: "123123564"
      },
      {
        text: "成交行情",
        href: "http://www.twhg.com.tw/price2017_trend.php",
        target: "_blank"
      },
      {
        text: "幸福租",
        href: "https://rent.twhg.com.tw/",
        target: "_blank"
      },
      {
        text: "新聞前線",
        href: "https://news.twhg.com.tw/",
        target: "_blank"
      }
    ]
  })
};
</script>