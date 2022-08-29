<template>
  <div class="molokomat_proj">
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
    <ProjVert
        :block="project.blocks.design_4"
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
                    title: "Молокоматы",
                    subtitle: "Лендинг вендинговых аппаратов",
                    description: "Суть самого бизнеса это традиционность через современные технологии. Поэтому на момент создания дизайна эту особенность хотелось переиспользовать и на самом лендинге этого бизнеса. Простой, стильный дизайн, показывающий и продающий сложные вендинговые автоматы B2B сегменту.",
                    stack: {
                        isStack: false
                    },
                    tags: "web - ux/ui",
                    color: "#91B834",
                    links: {
                        figma: "https://www.figma.com/file/yySn5CWl5QUFHZAZEjycOb/Molokomat-view?node-id=418%3A2",
                        demo: "https://molokomat.ru/",
                        demo_name: "Смотреть релиз",
                        is_demo: true,
                        is_figma: false
                    }
                },
                blocks: {
                    onboarding: {
                        images: {
                            size_default: require('@/assets/img/4_molokomat/molokomat_1.png'),
                            size_600: require('@/assets/img/4_molokomat/molokomat_1_600.png')
                        }
                    },
                    design_1: {
                        title: "Дизайн",
                        images: {
                            size_default: require('@/assets/img/4_molokomat/molokomat_2.png'),
                            size_600: require('@/assets/img/4_molokomat/molokomat_2_600.png')
                        }
                    },
                    design_2: {
                        images: {
                            size_default: require('@/assets/img/4_molokomat/molokomat_3.png'),
                            size_600: require('@/assets/img/4_molokomat/molokomat_3_600.png')
                        }
                    },
                    design_3: {
                        images: {
                            size_default: require('@/assets/img/4_molokomat/molokomat_4.png'),
                            size_600: require('@/assets/img/4_molokomat/molokomat_4_600.png')
                        }
                    },
                    design_4: {
                        images: {
                            size_default: require('@/assets/img/4_molokomat/molokomat_5.png'),
                            size_600: require('@/assets/img/4_molokomat/molokomat_5_600.png')
                        }
                    },
                    final: {
                        images: {
                            size_default: require('@/assets/img/4_molokomat/molokomat_final.png'),
                            size_600: require('@/assets/img/4_molokomat/molokomat_final_600.png')
                        },
                        next_proj: {
                            images: {
                                size_default: require('@/assets/img/4_molokomat/molokomat_next.png'),
                                size_600: require('@/assets/img/4_molokomat/molokomat_next_600.png')
                            },
                            link: "/projects/transport"
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