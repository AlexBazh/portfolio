<template>
  <div class="serial_killer_proj">
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
    <div class="iframe_video">
        <iframe src="https://player.vimeo.com/video/739355838?h=495956623a&amp;badge=0&amp;autoplay=1&amp;loop=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:90%;" title="2022-08-14 11-55-36.mp4">
        </iframe>
    </div>

    <ProjVert
        :block="project.blocks.design"
    />

    <ProjVert
        :block="project.blocks.adaptive"
    />

    <!--Reference-->
    <div class="ref">
        <img src="@/assets/img/2_serial_killer/bender.png" alt="">
        <div class="ref_details">
            <div class="heading_3">{{project.blocks.ref.description}}</div>
            <a target="_blank" :href="project.blocks.ref.link" class="heading_1">{{project.blocks.ref.name}}</a>
        </div>
    </div>

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
                    title: "Serial Killer",
                    subtitle: "Сервис для просмотра рейтингов сериалов",
                    description: "Идея пришла из личного опыта, когда после очередной партии в настолку пытаетесь вспомнить кто сколько раз выигрывал и с каким результатом. Реализация идеи находиться в процессе, но что-то уже работает.",
                    stack: {
                        isStack: false
                    },
                    tags: "web - ux/ui - development",
                    color: "#3574EF",
                    links: {
                        figma: "https://www.figma.com/file/F0tXNrlyxPSRaaX4XI5ltr/Series-Killer-view",
                        is_demo: false,
                        is_figma: true
                    }
                },
                blocks: {
                    onboarding: {
                        images: {
                            size_default: require('@/assets/img/2_serial_killer/serial_killer_1.png'),
                            size_600: require('@/assets/img/2_serial_killer/serial_killer_1_600.png')
                        }
                    },
                    design: {
                        title: "Дизайн",
                        images: {
                            size_default: require('@/assets/img/2_serial_killer/serial_killer_2.png'),
                            size_600: require('@/assets/img/2_serial_killer/serial_killer_2_600.png')
                        }
                    },
                    adaptive: {
                        title: "Адаптив",
                        images: {
                            size_default: require('@/assets/img/2_serial_killer/serial_killer_3.png'),
                            size_600: require('@/assets/img/2_serial_killer/serial_killer_3_600.png')
                        }
                    },
                    ref: {
                        description: "Автор идеи и главный вдохновитель",
                        name: "hotorcelexo",
                        link: "https://github.com/IgorPolyakov"
                    },
                    final: {
                        images: {
                            size_default: require('@/assets/img/2_serial_killer/serial_killer_final.png'),
                            size_600: require('@/assets/img/2_serial_killer/serial_killer_final_600.png')
                        },
                        next_proj: {
                            images: {
                                size_default: require('@/assets/img/2_serial_killer/serial_killer_next.png'),
                                size_600: require('@/assets/img/2_serial_killer/serial_killer_next_600.png')
                            },
                            link: "/projects/diso"
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

<style lang="scss">
@import '@/assets/styles/_variables.scss';
    .iframe_video {
        position: relative;
        width: 100%;
        height: 800px;
        background: $black_100;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 1200px){
            height: 560px;
        }
        @media screen and (max-width: 640px){
            height: 320px;
        }
    }

    .ref{
        width: 100%;
        background: $black_100;
        padding: 80px 160px 0;
        color: $white_100;
        display: flex;
        align-items: center;
        gap: 80px;
        @media screen and (max-width: 1600px){
            padding: 80px 60px 0;
        }
        @media screen and (max-width: 1200px){
            padding: 80px 60px;
        }
        @media screen and (max-width: 1200px){
            padding: 60px 40px;
        }
        img {
            display: block;
            @media screen and (max-width: 1200px){
                display: none;
            }
        }
        a {
            color: #3574EF;
            &:hover {
                color: #15429c;
            }
        }
        a:hover img {
            -webkit-filter: grayscale(100%);
            filter: grayscale(100%);
        }
        
    }

</style>