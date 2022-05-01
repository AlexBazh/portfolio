<template>
  <div class="text_field_wrapper">
    <p class="label">{{label}}</p>
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      :class="{error_field: error}"
      :type="type" 
      :placeholder="placeholder"
      :required="isRequired">
    <p class="caption" v-if="error">{{error}}</p>
  </div>
</template>

<script>
export default {
  props: ["label", "value", "error", "type", "placeholder", "isRequired"]
}
</script>

<style lang="scss">
  @import '@/assets/styles/variables';

  .text_field_wrapper {
    margin: 24px 0;
    .label {
      margin-bottom: 8px;
    }
    input {
      border: 1px solid $gray_50;
      box-sizing: border-box;
      border-radius: 8px;
      padding: 12px 16px;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
    }
    .error_field {
      border: 1px solid $status_red_80;
    }
    .caption {
      color: $status_red_80;
    }
  }
</style>