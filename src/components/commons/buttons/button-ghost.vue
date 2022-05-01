<template>
  <button class="button_ghost">
    <Loading 
      :is24="is24"
      v-if="isLoading"
    />
    <img v-else src="@/assets/img/icons/plus.svg" alt="">
  </button>
</template>

<script>
import Loading from '../loading.vue'

export default {
  props: ["isLoading", "is24"],
  name: "Button-ghost",
  components: {
    Loading
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';

  .button_ghost {
    padding: 14px;
    background-color: $primary_80;
    box-shadow: 0px 2px 13px rgba(0, 0, 0, 0.24);
    border-radius: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    &:hover {
      background-color: $primary_100;
    }
  }
</style>