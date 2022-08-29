<template>
  <div class="transport_proj">
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
                    title: "Transport",
                    subtitle: "Ряд приложений для организации безналичной оплаты в транспорте",
                    description: "«Едем вместе» это проект организованный участниками всероссийского хакатона «Цифровой прорыв» в 2019 году. Проект базировался на региональных законах, которые обязывали владельцев транспортных маршрутных средств использовать цифровые способы оплаты за проезд. В процессе работы были проведены исследования, экспертные аудиты, создан дизайн и API на уровне MVP.",
                    stack: {
                        isStack: false
                    },
                    tags: "web - research - mobile - ux/ui - managment",
                    color: "#E3583A",
                    links: {
                        figma: "https://www.figma.com/file/AZLVw4RnJfSREeoWfiz0YP/Transport-Project",
                        is_demo: false,
                        is_figma: true
                    }
                },
                blocks: {
                    onboarding: {
                        images: {
                            size_default: require('@/assets/img/11_transport/transport_1.png'),
                            size_600: require('@/assets/img/11_transport/transport_1_600.png')
                        }
                    },
                    design_1: {
                        images: {
                            size_default: require('@/assets/img/11_transport/transport_2.png'),
                            size_600: require('@/assets/img/11_transport/transport_2_600.png')
                        }
                    },
                    final: {
                        images: {
                            size_default: require('@/assets/img/11_transport/transport_final.png'),
                            size_600: require('@/assets/img/11_transport/transport_final_600.png')
                        },
                        next_proj: {
                            images: {
                                size_default: require('@/assets/img/11_transport/transport_next.png'),
                                size_600: require('@/assets/img/11_transport/transport_next_600.png')
                            },
                            link: "/projects/stroytek"
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