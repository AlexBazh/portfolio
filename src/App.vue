<template>
  <div class="">
    <Button
      :isPrimary="buttons.primary.isPrimary"
      :isLoading="buttons.primary.isLoading"
      :title="buttons.primary.title"
    />
    <ButtonGhost
      :is24="buttons.ghost.is24"
      :isLoading="buttons.ghost.isLoading"
    />
    <TextField
      :label="text_fields.date.label"
      :value="text_fields.date.value"
      :error="text_fields.date.error"
      :type="text_fields.date.type"
      :placeholder="text_fields.date.placeholder"
      :isRequired="text_fields.date.isRequired"
    />
    <TextField
      :label="text_fields.temperature.label"
      :value="text_fields.temperature.value"
      :error="text_fields.temperature.error"
      :type="text_fields.temperature.type"
      :placeholder="text_fields.temperature.placeholder"
      :isRequired="text_fields.temperature.isRequired"
    />
  </div>
</template>

<script>
import Button from './components/commons/buttons/button.vue'
import ButtonGhost from './components/commons/buttons/button-ghost.vue'
import TextField from './components/commons/text-field.vue'

export default {
  name: 'App',
  components: {
    Button,
    ButtonGhost,
    TextField
  },
  data(){
    return {
      buttons: {
        primary: {
          isPrimary: true,
          isLoading: false,
          title: "Add data"
        },
        ghost: {
          is24: true,
          isLoading: false
        }
      },
      text_fields: {
        date: {
          label: "Date",
          value: "",
          error: "",
          type: "date",
          placeholder: "Choose Date",
          isRequired: true
        },
        temperature: {
          label: "temperature, celsium",
          value: "",
          error: "",
          type: "number",
          placeholder: "Enter temperature",
          isRequired: true
        }
      }
    }
  }
}
</script>

<style>
</style>
