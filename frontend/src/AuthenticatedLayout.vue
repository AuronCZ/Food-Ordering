<template>
  <div>
    <NavBar />
    <div class="auth-wrapper">
      <div class="auth-inner">
        <router-view></router-view>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';
export default {
  name: 'AuthenticatedLayout',
  components: {
    NavBar,
    FooterComponent
  }
}
</script>

<style>
@import "./assets/css/global_style.css";
</style>
