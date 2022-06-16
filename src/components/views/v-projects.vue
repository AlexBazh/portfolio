<template>
  <div class="projects">
    <Header
      :isProject="true"
    />
    <PageTitle
      :title="pageTitle.title"
      :subtitle_1="pageTitle.subtitle.subtitle_1"
      :subtitle_2="pageTitle.subtitle.subtitle_2"
      :subtitle_3="pageTitle.subtitle.subtitle_3"
    />
    <CTA/>
    <Form />
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/commons/v-header.vue"
import PageTitle from "@/components/commons/v-page_title.vue"
import CTA from "@/components/commons/v-cta.vue"
import Form from "@/components/commons/v-form.vue"
import Footer from "@/components/commons/v-footer.vue"

export default {
  data(){
    return {
      pageTitle: {
        title: "Проект",
        subtitle: {
          subtitle_1: "UX/UI",
          subtitle_2: "Concept",
          subtitle_3: "Development"
        }
      }
    }
  },
  components: {
    Header,
    PageTitle,
    CTA,
    Form,
    Footer
   },
}
</script>

<style>

</style>