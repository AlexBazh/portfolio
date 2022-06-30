<template>
  <div class="dostavim_proj">
    <Header
        :isProject="true"
    />
    <PageTitle
        :title="project.common.title"
        :subtitle_1="project.common.subtitle"
        :isBack="true"
    />
    <ProjVert
        :block="project.blocks.onboarding"
    />
    <ProjInfo
        :project="project"
    />
    <ProjVert
        :block="project.blocks.architecture"
    />
    <ProjHoriz
        :blocks="project.blocks.admin.items"
    />
    <ProjTitle
        :title="project.blocks.design.title"
    />
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
import ProjTitle from "@/components/views/projects/blocks/proj-title.vue"
import ProjVert from "@/components/views/projects/blocks/proj-vert.vue"
import ProjHoriz from "@/components/views/projects/blocks/proj-horiz.vue"
import ProjFinal from "@/components/views/projects/blocks/proj-final.vue"
import Form from "@/components/commons/v-form.vue"
import Footer from "@/components/commons/v-footer.vue"

export default {
    data(){
        return {
            project: {
                common: {
                    title: "Доставим",
                    subtitle: "Платформа для организации доставки",
                    description: "Идея пришла из личного опыта, когда после очередной партии в настолку пытаетесь вспомнить кто сколько раз выигрывал и с каким результатом. Реализация идеи находиться в процессе, но что-то уже работает.",
                    stack: {
                        isStack: true
                    },
                    tags: "web - mobile - ux/ui - development",
                    color: "#FB9C4C",
                    links: {
                        figma: "https://www.figma.com/file/EwW3ktWCFRc9YVXbim7Fn3/%D0%94%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D0%BC-view?node-id=0%3A1",
                        demo: "https://stark-atoll-53946.herokuapp.com/"
                    }
                },
                blocks: {
                    onboarding: {
                        images: {
                            size_default: require('@/assets/img/1_dostavim/dostavim_1.png'),
                            size_600: require('@/assets/img/1_dostavim/dostavim_1_600.png')
                        }
                    },
                    architecture: {
                        title: "Архитектура",
                        description: "Идея пришла из личного опыта, когда после очередной партии в настолку пытаетесь вспомнить кто сколько раз выигрывал и с каким результатом. Реализация идеи находиться в процессе, но что-то уже работает.",
                        images: {
                            size_default: require('@/assets/img/0_girfido/girfido_6.png'),
                            size_600: require('@/assets/img/0_girfido/girfido_6_600.png')
                        }
                    },
                    design: {
                        title: "Дизайн"
                    },
                    admin: {
                        items: [
                            {
                                id: 0,
                                title: "Админка",
                                description: "Идея пришла из личного опыта, когда после очередной партии в настолку пытаетесь вспомнить кто сколько раз выигрывал и с каким результатом. Реализация идеи находиться в процессе, но что-то уже работает.",
                                image: require('@/assets/img/0_girfido/girfido_8.png')
                            },
                            {
                                id: 1,
                                description: "Идея пришла из личного опыта, когда после очередной партии в настолку пытаетесь вспомнить кто сколько раз выигрывал и с каким результатом. Реализация идеи находиться в процессе, но что-то уже работает.",
                                image: require('@/assets/img/0_girfido/girfido_9.png')
                            },
                            {
                                id: 2,
                                description: "Идея пришла из личного опыта, когда после очередной партии в настолку пытаетесь вспомнить кто сколько раз выигрывал и с каким результатом. Реализация идеи находиться в процессе, но что-то уже работает.",
                                image: require('@/assets/img/0_girfido/girfido_10.png')
                            },
                        ]
                    },
                    final: {
                        images: {
                            size_default: require('@/assets/img/0_girfido/girfido_13.png'),
                            size_600: require('@/assets/img/0_girfido/girfido_13_600.png')
                        },
                        next_proj: {
                            images: {
                                size_default: require('@/assets/img/0_girfido/girfido_14.png'),
                                size_600: require('@/assets/img/0_girfido/girfido_14_600.png')
                            },
                            link: "/projects/dostavim"
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
        ProjTitle,
        ProjVert,
        ProjHoriz,
        ProjFinal,
        Form,
        Footer
    }
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';

</style>