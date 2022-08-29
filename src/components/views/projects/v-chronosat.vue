<template>
  <div class="chronosat_proj">
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
                    title: "Chronosat",
                    subtitle: "Корпоративный сайт для телекоммуникационной компании",
                    description: "Презентационный многостраничный сайт для крупной международной компании в сфере телекоммуникаций и связи. Задача была на основе готового ТЗ и прототипов создать дизайн сайта, который бы смог связать традиционные в компании подходы, описанные в брендбуке и современное видение к решению проблем.",
                    stack: {
                        isStack: false
                    },
                    tags: "web - ux/ui",
                    color: "#66CED4",
                    links: {
                        figma: "https://www.figma.com/file/8PK0KBdqVxi2dZHmArr8pr/Chronosat?node-id=0%3A1",
                        is_demo: false,
                        is_figma: true
                    }
                },
                blocks: {
                    onboarding: {
                        images: {
                            size_default: require('@/assets/img/6_chronosat/chronosat_1.png'),
                            size_600: require('@/assets/img/6_chronosat/chronosat_1_600.png')
                        }
                    },
                    design_1: {
                        title: "Дизайн",
                        images: {
                            size_default: require('@/assets/img/6_chronosat/chronosat_2.png'),
                            size_600: require('@/assets/img/6_chronosat/chronosat_2_600.png')
                        }
                    },
                    design_2: {
                        images: {
                            size_default: require('@/assets/img/6_chronosat/chronosat_3.png'),
                            size_600: require('@/assets/img/6_chronosat/chronosat_3_600.png')
                        }
                    },
                    design_3: {
                        images: {
                            size_default: require('@/assets/img/6_chronosat/chronosat_4.png'),
                            size_600: require('@/assets/img/6_chronosat/chronosat_4_600.png')
                        }
                    },
                    final: {
                        images: {
                            size_default: require('@/assets/img/6_chronosat/chronosat_final.png'),
                            size_600: require('@/assets/img/6_chronosat/chronosat_final_600.png')
                        },
                        next_proj: {
                            images: {
                                size_default: require('@/assets/img/6_chronosat/chronosat_next.png'),
                                size_600: require('@/assets/img/6_chronosat/chronosat_next_600.png')
                            },
                            link: "/projects/payrow"
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