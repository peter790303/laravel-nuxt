<template>
  <div class="text-center">
    <v-dialog v-model="login" width="500">
      <v-card>
        <iframe
          src="http://www.twhg.com.tw/login-iframe.php?source=store&store=TAC6"
          frameborder="0"
          width="100%"
          height="500px"
        ></iframe>
      </v-card>
    </v-dialog>
    <v-dialog v-model="line" width="500">
      <v-card>
        <div class="d-flex justify-content-center">
          <img src="~/assets/slidermenu-line2.jpg" alt="" />
        </div>
        <div class="d-flex justify-content-center">台灣房屋Line</div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  head: {
    script: [{ src: "/js/modal.js" }]
  },
  data() {
    return {
      login: false,
      line: false
    };
  },
  created() {
    this.$nuxt.$on("login", parameter => {
      console.log(parameter);
      this.login = parameter;
    });
    this.$nuxt.$on("line", parameter => {
      console.log(parameter);
      this.line = parameter;
    });
  }
};
</script>