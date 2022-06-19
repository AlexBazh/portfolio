<template>
  <div class="girfido_proj">
    <Header
        :isProject="true"
    />
    <PageTitle
        :title="project_info.title"
        :subtitle_1="project_info.subtitle"
        :isBack="true"
    />
    <div class="block_1">
        <img srcset="@/assets/img/0_girfido/girfido_1_600.png 600w,
                            @/assets/img/0_girfido/girfido_1.png 1920w"
                        src="@/assets/img/0_girfido/girfido_1.png">
    </div>
  </div>
</template>

<script>
import Header from "@/components/commons/v-header.vue"
import PageTitle from "@/components/commons/v-page_title.vue"

export default {
    data(){
        return {
            project_info: {
                title: "Girfido",
                subtitle: "PWA для любителей настольных игр"
            }
        }
    },
    components: {
        PageTitle,
        Header
    }
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
.girfido_proj {
    .block_1 {
        width: 100%;
        height: 100%;
        img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
    }
}

</style>