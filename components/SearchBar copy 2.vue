<template>
<div style="position:absolute;top:100px;">
  <span > {{settings}}{{test}}{{test1}}</span>
<v-list-item-group
          v-for="(item,i) in items"
        :key="i"
        multiple
        active-class=""
      >
        <v-list-item >
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active" v-model="settings" :value="item"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title   v-model="settings">{{item}}</v-list-item-title>
            </v-list-item-content>
          </template>
       
        </v-list-item>
 
     </v-list-item-group>
     <v-row>
     <v-text-field label="Another input"  v-on:change="onPageDown" ></v-text-field>萬<v-text-field class="ml-3" label="Another input"  v-on:change="value2" ></v-text-field>萬
     </v-row>

       
  
 
  </div>

</template>
<script>
  export default {
    data () {
      return {
        settings: [],
        test:'',
        test1:'',
        value:null,
        items:['a','b','c']
      }
    },
  methods:{
    onPageDown:function (value) {
  
      this.test = value == "" ?  '' : `${value}萬-` ;
    },
    value2:function (value) {
          this.test1 = value == "" ?  '' : `${value}萬`;
    }
  }
    
  }
</script>