<template>
  <div class="serial_killer_proj">
    <Header
        :isProject="true"
    />
    <PageTitle
        :title="project.common.title"
        :subtitle_1="project.common.subtitle"
        :isBack="true"
    />
    <!--О проекте-->
    <ProjVert
        :block="project.blocks.onboarding"
    />
    <ProjInfo
        :project="project"
    />

    <!--Финал-->
    <ProjFinal
        :block="project.blocks.final"
    />
    <Form />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/commons/v-header.vue"
import PageTitle from "@/components/commons/v-page_title.vue"
import ProjInfo from "@/components/views/projects/blocks/proj-info.vue"
import ProjVert from "@/components/views/projects/blocks/proj-vert.vue"
import ProjFinal from "@/components/views/projects/blocks/proj-final.vue"
import Form from "@/components/commons/v-form.vue"
import Footer from "@/components/commons/v-footer.vue"

export default {
    data(){
        return {
            project: {
                common: {
                    title: "Serial Killer",
                    subtitle: "Сервис для просмотра рейтингов сериалов",
                    description: "Идея пришла из личного опыта, когда после очередной партии в настолку пытаетесь вспомнить кто сколько раз выигрывал и с каким результатом. Реализация идеи находиться в процессе, но что-то уже работает.",
                    stack: {
                        isStack: false
                    },
                    tags: "web - ux/ui - development",
                    color: "#3574EF",
                    links: {
                        figma: "https://www.figma.com/file/F0tXNrlyxPSRaaX4XI5ltr/Series-Killer-view",
                        is_demo: false,
                        is_figma: true
                    }
                },
                blocks: {
                    onboarding: {
                        images: {
                            size_default: require('@/assets/img/2_serial_killer/serial_killer_1.png'),
                            size_600: require('@/assets/img/2_serial_killer/serial_killer_1_600.png')
                        }
                    },
                    final: {
                        images: {
                            size_default: require('@/assets/img/2_serial_killer/serial_killer_final.png'),
                            size_600: require('@/assets/img/2_serial_killer/serial_killer_final_600.png')
                        },
                        next_proj: {
                            images: {
                                size_default: require('@/assets/img/2_serial_killer/serial_killer_next.png'),
                                size_600: require('@/assets/img/2_serial_killer/serial_killer_next_600.png')
                            },
                            link: "/projects/series"
                        }
                    }
                }
            }
        }
    },
    components: {
        PageTitle,
        Header,
        ProjInfo,
        ProjVert,
        ProjFinal,
        Form,
        Footer
    }
}
</script>

<style>

</style>