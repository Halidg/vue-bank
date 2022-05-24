<template>
 <component :is="layout + '-layout'" v-if="layout"/>
</template>

<script>


import MainLayout from './layot/MainLayout.vue'
import AuthLayout from './layot/AuthLayout.vue'

export default {
  components:{MainLayout,AuthLayout},
  data(){
    return{
    }
  },
  computed:{
    layout(){
      return this.$route.meta.layout
    }
  }
}
</script>