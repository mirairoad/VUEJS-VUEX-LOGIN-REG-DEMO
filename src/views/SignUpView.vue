<template>
  <div class="welcome container">
    <div>
      <h2 class="welcome-title">Sign up</h2>
      <SignupForm />
      <p>Already registered? <router-link to="/login">Login</router-link> instead.</p>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/Forms/RegisterFormComp.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  components: { SignupForm },
  setup(){
    const store = useStore()
    const isAuthReady = computed(()=>store.state.isAuthReady)

    return{isAuthReady}
  }
}
</script>
 
<style scoped>
@import url('../components/Forms/welcomeForms.css');
</style>