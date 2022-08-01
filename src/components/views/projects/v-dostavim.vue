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
    <!--О проекте-->
    <ProjVert
        :block="project.blocks.onboarding"
    />
    <ProjInfo
        :project="project"
    />
    <ProjVert
        :block="project.blocks.architecture"
    />

    <!--Клиент-->
    <ProjTitle
        :title="project.blocks.client.title"
    />
    <ProjHoriz
        :blocks="project.blocks.client.items"
    />
    <ProjVert
        :block="project.blocks.client.mobile"
    />

    <!--Админка-->
    <ProjTitle
        :title="project.blocks.admin.title"
    />
    <ProjVert
        :block="project.blocks.admin.main"
    />
    <ProjVert
        :block="project.blocks.admin.order"
    />

    <!--Курьер-->
    <ProjTitle
        :title="project.blocks.courier.title"
    />
    <ProjVert
        :block="project.blocks.courier.mockups"
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
                        demo: "https://stark-atoll-53946.herokuapp.com/",
                        demo_name: "Смотреть демо клиента",
                        is_demo: true,
                        is_figma: false
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
                            size_default: require('@/assets/img/1_dostavim/dostavim_2.png'),
                            size_600: require('@/assets/img/1_dostavim/dostavim_2_600.png')
                        }
                    },
                    client: {
                        title: "Клиент",
                        items: [
                            {
                                id: 0,
                                title: "Список товаров",
                                description: "Идея пришла из личного опыта, когда после очередной партии в настолку пытаетесь вспомнить кто сколько раз выигрывал и с каким результатом. Реализация идеи находиться в процессе, но что-то уже работает.",
                                image: require('@/assets/img/1_dostavim/dostavim_3.png')
                            },
                            {
                                id: 1,
                                title: "Корзина",
                                description: "Идея пришла из личного опыта, когда после очередной партии в настолку пытаетесь вспомнить кто сколько раз выигрывал и с каким результатом. Реализация идеи находиться в процессе, но что-то уже работает.",
                                image: require('@/assets/img/1_dostavim/dostavim_4.png')
                            },
                            {
                                id: 2,
                                title: "Оформление заказа",
                                description: "Идея пришла из личного опыта, когда после очередной партии в настолку пытаетесь вспомнить кто сколько раз выигрывал и с каким результатом. Реализация идеи находиться в процессе, но что-то уже работает.",
                                image: require('@/assets/img/1_dostavim/dostavim_5.png')
                            },
                            {
                                id: 3,
                                description: "Идея пришла из личного опыта, когда после очередной партии в настолку пытаетесь вспомнить кто сколько раз выигрывал и с каким результатом. Реализация идеи находиться в процессе, но что-то уже работает.",
                                image: require('@/assets/img/1_dostavim/dostavim_6.png')
                            },
                        ],
                        mobile: {
                            images: {
                                size_default: require('@/assets/img/1_dostavim/dostavim_7.png'),
                                size_600: require('@/assets/img/1_dostavim/dostavim_7_600.png')
                            }
                        }
                    },
                    admin: {
                        title: "Админка",
                        main: {
                            description: "Идея пришла из личного опыта, когда после очередной партии в настолку пытаетесь вспомнить кто сколько раз выигрывал и с каким результатом. Реализация идеи находиться в процессе, но что-то уже работает.",
                            images: {
                                size_default: require('@/assets/img/1_dostavim/dostavim_8.png'),
                                size_600: require('@/assets/img/1_dostavim/dostavim_8_600.png')
                            }
                        },
                        order: {
                            images: {
                                size_default: require('@/assets/img/1_dostavim/dostavim_9.png'),
                                size_600: require('@/assets/img/1_dostavim/dostavim_9_600.png')
                            }
                        },
                    },
                    courier: {
                        title: "PWA курьера",
                        mockups: {
                            description: "Идея пришла из личного опыта, когда после очередной партии в настолку пытаетесь вспомнить кто сколько раз выигрывал и с каким результатом. Реализация идеи находиться в процессе, но что-то уже работает.",
                            images: {
                                size_default: require('@/assets/img/1_dostavim/dostavim_10.png'),
                                size_600: require('@/assets/img/1_dostavim/dostavim_10_600.png')
                            }
                        }
                    },
                    final: {
                        images: {
                            size_default: require('@/assets/img/1_dostavim/dostavim_11.png'),
                            size_600: require('@/assets/img/1_dostavim/dostavim_11_600.png')
                        },
                        next_proj: {
                            images: {
                                size_default: require('@/assets/img/1_dostavim/dostavim_12.png'),
                                size_600: require('@/assets/img/1_dostavim/dostavim_12_600.png')
                            },
                            link: "/projects/series"
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