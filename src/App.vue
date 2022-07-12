<template>
  <NavbarComp />
  <router-view />
  <FooterComp />
</template>

<script>
import NavbarComp from './components/Header/NavbarComp.vue'
import FooterComp from './components/Footer/FooterComp.vue'

export default {
  components:{
    NavbarComp,
    FooterComp
  },
  setup(){
    
  }
}
</script>
