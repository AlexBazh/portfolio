<template>
  <div class="video_proj">
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

    <ProjVert
        :block="project.blocks.design_1"
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
                    title: "Video System",
                    subtitle: "Муниципальный портал систем видеонаблюдения",
                    description: "Идея пришла из личного опыта, когда после очередной партии в настолку пытаетесь вспомнить кто сколько раз выигрывал и с каким результатом. Реализация идеи находиться в процессе, но что-то уже работает.",
                    stack: {
                        isStack: false
                    },
                    tags: "web - mobile - ux/ui",
                    color: "#DA5554",
                    links: {
                        figma: "https://www.figma.com/file/M6v6myARieCArSWRGYmYtV/Video-System-view?node-id=0%3A1",
                        is_demo: false,
                        is_figma: true
                    }
                },
                blocks: {
                    onboarding: {
                        images: {
                            size_default: require('@/assets/img/12_video/video_1.png'),
                            size_600: require('@/assets/img/12_video/video_1_600.png')
                        }
                    },
                    design_1: {
                        images: {
                            size_default: require('@/assets/img/12_video/video_2.png'),
                            size_600: require('@/assets/img/12_video/video_2_600.png')
                        }
                    },
                    final: {
                        images: {
                            size_default: require('@/assets/img/12_video/video_final.png'),
                            size_600: require('@/assets/img/12_video/video_final_600.png')
                        },
                        next_proj: {
                            images: {
                                size_default: require('@/assets/img/12_video/video_next.png'),
                                size_600: require('@/assets/img/12_video/video_next_600.png')
                            },
                            link: "/projects/designit"
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