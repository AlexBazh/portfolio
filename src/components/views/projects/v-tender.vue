<template>
  <div class="tender_proj">
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
                    title: "Tender",
                    subtitle: "Сервис для проведения тендеров НГМК",
                    description: "Идея пришла из личного опыта, когда после очередной партии в настолку пытаетесь вспомнить кто сколько раз выигрывал и с каким результатом. Реализация идеи находиться в процессе, но что-то уже работает.",
                    stack: {
                        isStack: false
                    },
                    tags: "web - research - ux/ui - managment",
                    color: "#5AC384",
                    links: {
                        figma: "https://www.figma.com/file/6WLWhiuMCtQzQxHE5Eoqer/tender-view?node-id=68%3A19",
                        is_demo: false,
                        is_figma: true
                    }
                },
                blocks: {
                    onboarding: {
                        images: {
                            size_default: require('@/assets/img/8_tender/tender_1.png'),
                            size_600: require('@/assets/img/8_tender/tender_1_600.png')
                        }
                    },
                    design_1: {
                        title: "Дизайн",
                        images: {
                            size_default: require('@/assets/img/8_tender/tender_2.png'),
                            size_600: require('@/assets/img/8_tender/tender_2_600.png')
                        }
                    },
                    design_2: {
                        images: {
                            size_default: require('@/assets/img/8_tender/tender_3.png'),
                            size_600: require('@/assets/img/8_tender/tender_3_600.png')
                        }
                    },
                    design_3: {
                        images: {
                            size_default: require('@/assets/img/8_tender/tender_4.png'),
                            size_600: require('@/assets/img/8_tender/tender_4_600.png')
                        }
                    },
                    final: {
                        images: {
                            size_default: require('@/assets/img/8_tender/tender_final.png'),
                            size_600: require('@/assets/img/8_tender/tender_final_600.png')
                        },
                        next_proj: {
                            images: {
                                size_default: require('@/assets/img/8_tender/tender_next.png'),
                                size_600: require('@/assets/img/8_tender/tender_next_600.png')
                            },
                            link: "/projects/girfido"
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