<template>
  <div class="rosatom_proj">
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

    <ProjVert
        :block="project.blocks.design_1"
    />
    <ProjVert
        :block="project.blocks.design_2"
    />
    <ProjVert
        :block="project.blocks.design_3"
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
                    title: "Rosatom",
                    subtitle: "Платформа для отслеживания прогресса строительства АЭС",
                    description: "Основной задачей являлось создание платформы для отслеживания процесса строительства АЭС, сравнение с планами работ, фотографиями и видео в разные моменты времени, а также ведение документации.",
                    stack: {
                        isStack: false
                    },
                    tags: "web - ux/ui",
                    color: "#2C679C",
                    links: {
                        figma: "https://www.figma.com/file/zpkcmIoXuG2EskzLTPbk8V/rzdatom-view?node-id=27%3A2",
                        is_demo: false,
                        is_figma: true
                    }
                },
                blocks: {
                    onboarding: {
                        images: {
                            size_default: require('@/assets/img/9_rosatom/rosatom_1.png'),
                            size_600: require('@/assets/img/9_rosatom/rosatom_1_600.png')
                        }
                    },
                    design_1: {
                        title: "Дизайн",
                        images: {
                            size_default: require('@/assets/img/9_rosatom/rosatom_2.png'),
                            size_600: require('@/assets/img/9_rosatom/rosatom_2_600.png')
                        }
                    },
                    design_2: {
                        images: {
                            size_default: require('@/assets/img/9_rosatom/rosatom_3.png'),
                            size_600: require('@/assets/img/9_rosatom/rosatom_3_600.png')
                        }
                    },
                    design_3: {
                        images: {
                            size_default: require('@/assets/img/9_rosatom/rosatom_4.png'),
                            size_600: require('@/assets/img/9_rosatom/rosatom_4_600.png')
                        }
                    },
                    final: {
                        images: {
                            size_default: require('@/assets/img/9_rosatom/rosatom_final.png'),
                            size_600: require('@/assets/img/9_rosatom/rosatom_final_600.png')
                        },
                        next_proj: {
                            images: {
                                size_default: require('@/assets/img/9_rosatom/rosatom_next.png'),
                                size_600: require('@/assets/img/9_rosatom/rosatom_next_600.png')
                            },
                            link: "/projects/tender"
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