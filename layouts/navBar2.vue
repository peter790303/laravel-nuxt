<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>
      <v-card>
        <iframe src="http://www.twhg.com.tw/login-iframe.php?source=store&store=TAC6" frameborder="0" width="100%" height="500px"></iframe>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    head:{
      script: [ { src: "/js/modal.js"}]
    },
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>