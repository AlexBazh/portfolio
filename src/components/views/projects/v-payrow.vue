<template>
  <div class="payrow_proj">
    <Header
        :isProject="true"
    />
    <PageTitle
        :title="project.common.title"
        :subtitle_1="project.common.subtitle"
        :isBack="true"
    />
  </div>

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
                    title: "Payrow",
                    subtitle: "Сервис платежей",
                    description: "Сервис для переводов денежных средств через криптовалюту или нет. Простая идея проекта и сложная реализация дизайна. На стадии MPV был разработан дизайн для многостраничного презентационного сайта и части личного кабинета с базовой функциональностью.",
                    stack: {
                        isStack: false
                    },
                    tags: "web - ux/ui",
                    color: "#4E6EF7",
                    links: {
                        figma: "https://www.figma.com/file/EHRLusqcvF69puKz5b5CZs/Payrow-view?node-id=72%3A120",
                        is_demo: false,
                        is_figma: true
                    }
                },
                blocks: {
                    onboarding: {
                        images: {
                            size_default: require('@/assets/img/7_payrow/payrow_1.png'),
                            size_600: require('@/assets/img/7_payrow/payrow_1_600.png')
                        }
                    },
                    design_1: {
                        title: "Дизайн",
                        images: {
                            size_default: require('@/assets/img/7_payrow/payrow_2.png'),
                            size_600: require('@/assets/img/7_payrow/payrow_2_600.png')
                        }
                    },
                    design_2: {
                        images: {
                            size_default: require('@/assets/img/7_payrow/payrow_3.png'),
                            size_600: require('@/assets/img/7_payrow/payrow_3_600.png')
                        }
                    },
                    design_3: {
                        images: {
                            size_default: require('@/assets/img/7_payrow/payrow_4.png'),
                            size_600: require('@/assets/img/7_payrow/payrow_4_600.png')
                        }
                    },
                    design_4: {
                        images: {
                            size_default: require('@/assets/img/7_payrow/payrow_5.png'),
                            size_600: require('@/assets/img/7_payrow/payrow_5_600.png')
                        }
                    },
                    final: {
                        images: {
                            size_default: require('@/assets/img/7_payrow/payrow_final.png'),
                            size_600: require('@/assets/img/7_payrow/payrow_final_600.png')
                        },
                        next_proj: {
                            images: {
                                size_default: require('@/assets/img/7_payrow/payrow_next.png'),
                                size_600: require('@/assets/img/7_payrow/payrow_next_600.png')
                            },
                            link: "/projects/video"
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