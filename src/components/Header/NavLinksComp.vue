<template>
<li class="navbar-item"><router-link to="/">Home</router-link></li>
<li class="navbar-item"><router-link to="/premium">Premium</router-link></li>
<li class="navbar-item"><router-link to="/courses">courses</router-link></li>
<li class="navbar-item"><router-link to="/docs">Docs</router-link></li>
</template>

<style scoped>
/* standard */
.router-link-active
{
  color: var(--color-primary)!important;
}
.navbar-start>.navbar-item>a {
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--color-light-black);
}

.navbar-start>.navbar-item>a:hover {
  background: transparent;
  color: var(--color-primary);
}
/* ipad > phone */
@media screen and (max-width: 1023px) {
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
    .navbar-item > a {
      font-size: 38px!important;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
</style>