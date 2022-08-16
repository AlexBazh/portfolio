<template>
  <div class="stroytek_proj">
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
                    title: "Stroytek",
                    subtitle: "Мобильное приложение прораба",
                    description: "Идея пришла из личного опыта, когда после очередной партии в настолку пытаетесь вспомнить кто сколько раз выигрывал и с каким результатом. Реализация идеи находиться в процессе, но что-то уже работает.",
                    stack: {
                        isStack: false
                    },
                    tags: "mobile - ux/ui",
                    color: "#E3583A",
                    links: {
                        figma: "https://www.figma.com/file/DnS9RrVksni5xZjOT3RM3Y/StroyTek-view?node-id=0%3A1",
                        is_demo: false,
                        is_figma: true
                    }
                },
                blocks: {
                    onboarding: {
                        images: {
                            size_default: require('@/assets/img/5_stroytek/stroytek_1.png'),
                            size_600: require('@/assets/img/5_stroytek/stroytek_1_600.png')
                        }
                    },
                    design_1: {
                        title: "Дизайн",
                        images: {
                            size_default: require('@/assets/img/5_stroytek/stroytek_2.png'),
                            size_600: require('@/assets/img/5_stroytek/stroytek_2_600.png')
                        }
                    },
                    design_2: {
                        images: {
                            size_default: require('@/assets/img/5_stroytek/stroytek_3.png'),
                            size_600: require('@/assets/img/5_stroytek/stroytek_3_600.png')
                        }
                    },
                    final: {
                        images: {
                            size_default: require('@/assets/img/5_stroytek/stroytek_final.png'),
                            size_600: require('@/assets/img/5_stroytek/stroytek_final_600.png')
                        },
                        next_proj: {
                            images: {
                                size_default: require('@/assets/img/5_stroytek/stroytek_next.png'),
                                size_600: require('@/assets/img/5_stroytek/stroytek_next_600.png')
                            },
                            link: "/projects/chronosat"
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