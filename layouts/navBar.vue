<style>
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link{
  background-color: #cbab9c;
  border-color: #cbab9c;
  color:#fff;
}
a{
  color:#000;
}
.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropright .dropdown-toggle-split::after{
  color: #fd600a;
}
</style>
<template>
  <div>
    <b-nav tabs align="center" style="background-color: #f1e9e6; border-bottom-style: inset;border-width: thick;border-color: #cbaa97;">
      <!-- <ul v-model="abcs">
        <li v-for="(abc,i) in abcs" :key="i">{{abc}}</li>
      </ul>
      <button @click="test">123</button> -->
      <b-nav-item  v-for="(tab,i) in tabs"
       :key="i" 
       :id="tab.id"
       :active="tab.isActive"
        @click="changeTab(tab)"
       >{{ tab.name }}</b-nav-item>
     <!-- <b-nav-item @click="$nuxt.$emit('searchBar','house',)">住宅</b-nav-item> -->
    </b-nav>
    <b-tabs id="myTabs" class="d-flex justify-content-center" style="background-color: #f1e9e6;">
      <SearchBarAll />
    </b-tabs>
  </div>
</template>
<script>
export default {
  data(){
    return{
      actionTab:{
        id:'all',
        isActive:true,
      },
      abcs:[],
      tabs:[
        {
          id:'all',
          name:'全部',
          isActive:true,
        },
        {
          id:'house',
          name:'住宅',
          isActive:false,
        },
        {
          id:'land',
          name:'土地',
          isActive:false,
        },
        {
          id:'storeFront',
          name:'店面',
          isActive:false,
        },
        {
          id:'office',
          name:'辦公',
          isActive:false,
        },
        {
          id:'geoponics',
          name:'農業',
          isActive:false,
        },
        {
          id:'industry',
          name:'工業',
          isActive:false,
        },
        {
          id:'other',
          name:'其他',
          isActive:false,
        },
        {
          id:'parkingSpace',
          name:'車位',
          isActive:false,
        },
      ],
      
    }
  },
  watch:{
    abcs:function(e){
      console.log(e);
    }
  },
 methods:{
   changeTab(clickTab){

    this.tabs.forEach(tab => {
      if (this.actionTab.id == tab.id) {
          tab.isActive =false;
      }
     });
    this.actionTab.id = clickTab.id;
    this.actionTab.isActive = true;
    clickTab.isActive= true;
    $nuxt.$emit('searchBar',clickTab.id)
   },
   test(){
     this.abcs=[1,2,3,4];
   }
 }
}
</script>