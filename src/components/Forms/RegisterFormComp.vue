<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="display name" v-model="displayName">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <label v-if="isDisabled" class="welcome-button"><strong>Loading...</strong> <button :disabled="isDisabled" class="welcome-button-hidden"></button></label>
    <label v-else class="welcome-button"><strong>SignUp</strong> <button :disabled="isDisabled" class="welcome-button-hidden"></button></label>
    <p class="welcome-error">{{resMessage}}</p>
  </form>
</template>

<script>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    // refs
    const store = useStore()
    const router = useRouter()

    const displayName = ref('')
    const email = ref('')
    const password = ref('')
    const resMessage = computed(() => store.state.messageError)
    
    const isDisabled = ref(null)


    const handleSubmit = async () => {
      isDisabled.value = true

      store.dispatch('signup', {
          email: email.value,
          password: password.value
        })
        setTimeout(()=>{
          if (store.state.isAuthReady) {
          store.commit("setMessageError", null);
          router.push('/')
        }else{
          isDisabled.value = false
        }
        },2000)
      
    }

    return {displayName, email, password, resMessage, isDisabled, handleSubmit }
  }
}
</script>

<style>
</style>