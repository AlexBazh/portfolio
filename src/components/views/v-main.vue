<template>
  <Header/>
  <HeroHeader/>
  <Features/>
  <Favorite />
  <Projects />
  <CTA/>
  <Form />
  <Footer/>
</template>

<script>
import Header from "@/components/commons/v-header.vue"
import HeroHeader from "@/components/commons/v-heroheader.vue"
import Features from "@/components/commons/v-features.vue"
import Favorite from "@/components/commons/v-favorite.vue"
import Projects from "@/components/commons/v-projects_main.vue"
import CTA from "@/components/commons/v-cta.vue"
import Form from "@/components/commons/v-form.vue"
import Footer from "@/components/commons/v-footer.vue"

export default {
    components: {
    Header,
    HeroHeader,
    Features,
    Favorite,
    Projects,
    CTA,
    Form,
    Footer
  },
}
</script>

<style>

</style>