<template>
    <div id="app">
      <div v-if="admin">
        <router-view></router-view>
      </div>
      <div v-else>
        <AuthenticatedLayout />
      </div>
    </div>
  </template>
  
  <script>
  import AuthenticatedLayout from './components/AuthenticatedLayout.vue';
  import { mapActions, mapState } from 'vuex';
  export default {
    name: 'App',
    components: {
      AuthenticatedLayout
    },
    created() {
      this.getFoodsData()
    },
    computed: {
      ...mapState(["admin"])
    },
    methods: {
      ...mapActions(["getFoodsData"])
    }
  }
  </script>
  
  <style>
  @import "./assets/css/global_style.css";
  </style>
  