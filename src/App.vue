<template>
  <div class="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
    }
  }
}
</script>

<style>
.app {
  position: relative;
}
</style>
