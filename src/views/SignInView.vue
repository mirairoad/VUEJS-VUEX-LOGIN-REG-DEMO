<template>
  <div class="welcome container">
    <div>
      <h2 class="welcome-title">Login</h2>
      <LoginForm />
      <p>No account yet? <router-link to="/signup">Signup</router-link> instead.</p>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/Forms/LoginFormComp.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  components: { LoginForm },
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