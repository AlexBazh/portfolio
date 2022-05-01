<template>
  <button
    class="button"
    :class="{
      button_primary: isPrimary,
      button_secondary: isSecondary,
      button_ghost: isGhost
    }"
  >
    <Loading v-if="isLoading"/>
    <span v-else>{{title}}</span>
  </button>
</template>

<script>
import Loading from '../loading.vue'

export default {
  props: ["title", "isPrimary", "isSecondary", "isLoading"],
  name: "Button-main",
  components: {
    Loading
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
  .button {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    border-radius: 8px;
    border: none;
    padding: 20px 36px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .button_primary {
    background-color: $primary_80;
    color: $white_100;
    &:hover {
      background-color: $primary_100;
    }
    &:active {
      background-color: $primary_100;
    }
    &:disabled {
      background-color: $gray_50;
      color: $gray_80;
    }
  }
  .button_secondary {
    background-color: $white_100;
    color: $status_red_80;
    &:disabled {
      color: $gray_80;
    }
  }
  .button_ghost {
    padding: 14px;
    background-color: $primary_80;
    box-shadow: 0px 2px 13px rgba(0, 0, 0, 0.24);
    border-radius: 40px;
    &:hover {
      background-color: $primary_100;
    }
  }
</style>