<template>
  <div class="molokomat_proj">
    <Header
        :isProject="true"
    />
    <PageTitle
        :title="project_info.title"
        :subtitle_1="project_info.subtitle"
        :isBack="true"
    />
  </div>
</template>

<script>
import Header from "@/components/commons/v-header.vue"
import PageTitle from "@/components/commons/v-page_title.vue"

export default {
    data(){
        return {
            project_info: {
                title: "Молокоматы",
                subtitle: "Лендинг вендинговых аппаратов"
            }
        }
    },
    components: {
        PageTitle,
        Header
    }
}
</script>

<style>

</style>