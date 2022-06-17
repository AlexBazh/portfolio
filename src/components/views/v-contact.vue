<template>
  <div class="projects">
    <Header
      :isContact="true"
    />
    <Form class="pt40"/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/commons/v-header.vue"
import Form from "@/components/commons/v-form.vue"
import Footer from "@/components/commons/v-footer.vue"

export default {
  components: {
    Header,
    Form,
    Footer
   },
}
</script>

<style lang="scss">
  .pt40 {
    padding-top: 180px;
    @media screen and (max-width: 1200px){
        padding-top: 120px;
      }
    @media screen and (max-width: 640px){
      padding-top: 100px;
    }
  }
</style>