<template>
  <div class="projects">
    <Header
      :isAbout="true"
    />
    <PageTitle
      :title="pageTitle.title"
      :subtitle_1="pageTitle.subtitle.subtitle_1"
    />
    <Jobs />
    <CTA/>
    <Form />
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/commons/v-header.vue"
import PageTitle from "@/components/commons/v-page_title.vue"
import Jobs from "@/components/commons/v-jobs.vue"
import CTA from "@/components/commons/v-cta.vue"
import Form from "@/components/commons/v-form.vue"
import Footer from "@/components/commons/v-footer.vue"

export default {
  data(){
    return {
      pageTitle: {
        title: "Про меня",
        subtitle: {
          subtitle_1: "Александр Баженов"
        }
      }
    }
  },
  components: {
    Header,
    PageTitle,
    Jobs,
    CTA,
    Form,
    Footer
   },
}
</script>

<style>

</style>