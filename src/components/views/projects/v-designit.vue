<template>
  <div class="designit_proj">
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
                    title: "design it",
                    subtitle: "Мобильное приложение мебели с AR",
                    description: "Небольшой концепт нативного iOS приложения Интернет-магазина интерьерной мебели с AR функцией. Главной задачей было создание качественного опыта взаимодействия пользователя через добавление собственного интерьера в приложение и примерку объектов в комнате.",
                    stack: {
                        isStack: false
                    },
                    tags: "mobile - ux/ui",
                    color: "#8992F4",
                    links: {
                        figma: "https://www.figma.com/file/OYIsARqAWHnYczSUp9HEip/Design-it---view?node-id=0%3A1",
                        is_demo: false,
                        is_figma: true
                    }
                },
                blocks: {
                    onboarding: {
                        images: {
                            size_default: require('@/assets/img/10_designit/designit_1.png'),
                            size_600: require('@/assets/img/10_designit/designit_1_600.png')
                        }
                    },
                    design_1: {
                        title: "Дизайн",
                        images: {
                            size_default: require('@/assets/img/10_designit/designit_2.png'),
                            size_600: require('@/assets/img/10_designit/designit_2_600.png')
                        }
                    },
                    design_2: {
                        images: {
                            size_default: require('@/assets/img/10_designit/designit_3.png'),
                            size_600: require('@/assets/img/10_designit/designit_3_600.png')
                        }
                    },
                    design_3: {
                        images: {
                            size_default: require('@/assets/img/10_designit/designit_4.png'),
                            size_600: require('@/assets/img/10_designit/designit_4_600.png')
                        }
                    },
                    final: {
                        images: {
                            size_default: require('@/assets/img/10_designit/designit_final.png'),
                            size_600: require('@/assets/img/10_designit/designit_final_600.png')
                        },
                        next_proj: {
                            images: {
                                size_default: require('@/assets/img/10_designit/designit_next.png'),
                                size_600: require('@/assets/img/10_designit/designit_next_600.png')
                            },
                            link: "/projects/rosatom"
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