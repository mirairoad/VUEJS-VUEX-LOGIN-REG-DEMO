<!-- eslint-disable vue/valid-template-root -->
<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="/" width="112" height="28" alt="logo">
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarData"
          @click="handleMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarData" class="navbar-menu">
        <div class="navbar-start" id="nav" @click="handleMobileMenu">
          <NavLinksComp />
        </div>

        <div class="navbar-end">
         <div class="navbar-item">

            <div v-if="isLoading">
              loading...
            </div>
            
            <transition-group appear  tag="div" name="fade" v-else-if="!isAuthReady" class="buttons">
              <router-link class="button is-primary" to="/signup" key="1"><strong>Sign up</strong></router-link>
              <router-link class="button is-light" to="/login" key="2">Log in</router-link>
            </transition-group>

            <transition-group appear  tag="div" name="fade"  v-else-if="isAuthReady" class="buttons">
              <router-link v-if="profile" class="button is-primary" to="/dashboard" >{{profile.profile_name}}</router-link>
              <router-link v-else class="button is-primary" to="/dashboard/create-profile" >create</router-link>
              <router-link v-if="user" class="button is-light" to="/logout" @click="handleLogout">Log out</router-link>
            </transition-group>

            </div>

        </div>
      </div>

    </div>
  </nav>

</template>

<script>
import NavLinksComp from './NavLinksComp.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'

export default {
  components: {
    NavLinksComp
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const user = computed(() => store.state.user)
    const profile = computed(() => store.state.profile)
    const isAuthReady = computed(() => store.state.isAuthReady)
    const isLoading = ref(true)
    const isCollapsed = ref(false)

    const handleMobileMenu = () => {
      if (isCollapsed.value == false) {
        isCollapsed.value = true
        document.querySelector('.navbar-burger').classList.add('is-active');
        document.querySelector('.navbar-menu').classList.add('is-active');
        document.querySelector('html, body').classList.add('scrollable');
      } else {
        isCollapsed.value = false
        document.querySelector('.navbar-burger').classList.remove('is-active');
        document.querySelector('.navbar-menu').classList.remove('is-active');
        document.querySelector('html, body').classList.remove('scrollable');

      }

    }

    const handleLogout = async () => {
        await store.dispatch('logout')
        router.push('/')
    }

    setTimeout(()=>{
      isLoading.value = false
    },500)

    return { user, handleLogout, handleMobileMenu, isCollapsed, profile, isAuthReady,isLoading}
  }

}
</script>

<style scoped>
/* standard */

.navbar {
    background-color: #fff;
    min-height: 6.25rem;
  }
  
  .navbar-burger span {
    background-color: currentColor;
    display: block;
    height: 3px;
    left: none;
    position: absolute;
    transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color, opacity, transform;
    transition-timing-function: ease-out;
    width: 26px;
  }
  
  .navbar-item>.buttons>.button.is-primary {
    border-radius: 6px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: var(--color-primary);
    padding: 30px 10px;
  }
  
  .navbar-item>.buttons>.button.is-primary:hover {
    background-color: var(--color-primary-alternative);
    background-position: 0 -100%;
  }
  
  .navbar-item>.buttons>.button.is-light {
    border-radius: 6px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 30px 10px;
  }
  
  .fade-enter-from{
    opacity: 0;
    transform: translateY(0);
  }
  .fade-enter-to{
    opacity: 1;
    transform: translateY(0);
  }
  .fade-leave-from{
    opacity: 1;
    transform: translateY(0);
  }
  .fade-leave-to{
    opacity: 0;
    transform: translateY(0);
  }
  .fade-leave-active{
    transition: all 0.5s ease;
  }

/* iPad > iPhone */
@media screen and (max-width: 1023px) {
    .navbar-menu.is-active {
      position: fixed;
      width: 100%;
      height: 100%;
      text-align: center;
    }
    .scrollable {
      overflow: hidden;
      height: 100%;
    }
    .navbar-start {
      padding-top: 50px;
    }
    .navbar-end {
      padding-top: 50px;
    }
    .navbar-item > .buttons {
      margin: 0px auto 0px auto;
      display: contents;
    }
    .navbar-burger {
      margin-right: 15px;
    }
    .navbar-burger.is-active {
      color: var(--color-primary);
    }
    .navbar-burger:hover {
      background-color: transparent;
      color: var(--color-primary);
    }
  }

  @media screen and (min-width: 1024px) {
    .navbar {
      min-height: 6.25rem;
    }
  }
</style>