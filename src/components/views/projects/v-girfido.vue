<template>
  <div class="girfido_proj">
    <Header
        :isProject="true"
    />
    <PageTitle
        :title="project_info.title"
        :subtitle_1="project_info.subtitle"
        :isBack="true"
    />
    <div class="block_1">
        <picture>
            <source srcset="@/assets/img/0_girfido/girfido_1_600.png" type="image/png" media="(max-width: 640px)" >
            <img src="@/assets/img/0_girfido/girfido_1.png" alt="">
        </picture>
    </div>
    <div class="info_block">
        <div class="info_details">
            <div class="nav">web - mobile - ux/ui - development</div>
            <div class="heading_5">{{project_info.details}}</div>
        </div>
        <div class="info_stack">
            <div class="stack_item">
                <div class="stack_item__details">
                    <img class="vue_logo" src="@/assets/img/icons/vue_logo.svg" alt="">
                    <div class="nav">Vue JS</div>
                </div>
            </div>
            <div class="stack_item">
                <div class="stack_item__details">
                    <img class="node_logo" src="@/assets/img/icons/node.svg" alt="">
                    <div class="nav">Express</div>
                </div>
            </div>
        </div>
    </div>
    <div class="cta_block">
        <a href="https://girfido.herokuapp.com/" target="_blank" class="left_cta heading_5">Смотреть демо
            <div class="anim_left"></div>
        </a>
        <a href="https://www.figma.com/file/pCvaE3Hm32BZsqbknxlnVT/Girfido-view?node-id=36%3A2" target="_blank" class="right_cta heading_5">Макеты в Figma
            <div class="anim_right"></div>
        </a>
    </div>
    <div class="block_a">
        <div class="title_s__block">
            <div class="heading_3">{{project_info.projection.title}}</div>
            <div class="body">{{project_info.projection.description}}</div>
        </div>
        <picture>
            <source srcset="@/assets/img/0_girfido/proto_scheme_600.png" type="image/png" media="(max-width: 640px)" >
            <img src="@/assets/img/0_girfido/proto_scheme.png" alt="">
        </picture>
    </div>
    <div class="block_b">
        <div class="title_s__block">
            <div class="heading_3">{{project_info.prototype.title}}</div>
            <div class="body">{{project_info.prototype.description}}</div>
        </div>
        <div class="img_center">
            <picture>
                <source srcset="@/assets/img/0_girfido/protos_600.png" type="image/png" media="(max-width: 640px)" >
                <img src="@/assets/img/0_girfido/protos.png" alt="">
            </picture>
        </div>
    </div>
    <div class="big_design">
        <div class="heading_1">Дизайн</div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/commons/v-header.vue"
import PageTitle from "@/components/commons/v-page_title.vue"

export default {
    data(){
        return {
            project_info: {
                title: "Girfido",
                subtitle: "Социальная сеть для настольщиков",
                details: "Идея пришла из личного опыта, когда после очередной партии в настолку пытаетесь вспомнить кто сколько раз выигрывал и с каким результатом. Реализация идеи находиться в процессе, но что-то уже работает.",
                projection: {
                    title: "Проектирование",
                    description: "Идея пришла из личного опыта, когда после очередной партии в настолку пытаетесь вспомнить кто сколько раз выигрывал и с каким результатом. Реализация идеи находиться в процессе, но что-то уже работает."
                },
                prototype: {
                    title: "Прототипы",
                    description: "Идея пришла из личного опыта, когда после очередной партии в настолку пытаетесь вспомнить кто сколько раз выигрывал и с каким результатом. Реализация идеи находиться в процессе, но что-то уже работает."
                }
            }
        }
    },
    components: {
        PageTitle,
        Header
    }
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
.girfido_proj {
    .block_1 {
        width: 100%;
        height: 100%;
        img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
    }
    .info_block {
        .nav {
            margin-bottom: 32px;
        }
        padding: 160px 240px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        gap: 60px;
        .info_stack {
            display: flex;
            align-items: center;
            gap: 80px;
        }
        .stack_item {
            display: flex;
            flex-direction: column;
            .stack_item__details {
                display: flex;
                align-items: center;
                .nav {
                    margin-left: 16px;
                    margin-bottom: 0;
                }
            }
        }
    }
    .cta_block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 228px;
        a {
           color: $white_100; 
        }
        .left_cta, .right_cta {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50%;
            height: 100%;
            position: relative;
        }
        .left_cta {
            background: #703FFA;
            .anim_left {
                position: absolute;
                top: 0;
                left: 0;
                width: 0%;
                height: 100%;
                background: rgba($color: $white_100, $alpha: .1);
            }
            &:hover {
                .anim_left {
                    width: 100%;
                    background: rgba($color: $white_100, $alpha: .1);
                    border-radius: 0px;
                }
            }
        }
        .right_cta {
            background: $black_100;
            .anim_right {
                position: absolute;
                top: 0;
                left: 0;
                width: 0%;
                height: 100%;
                background: rgba($color: $white_100, $alpha: .1);
            }
            &:hover {
                .anim_right {
                    width: 100%;
                    background: rgba($color: $white_100, $alpha: .1);
                    border-radius: 0px;
                }
            }
        }
    }
    .block_a {
        padding: 130px 240px;
        .title_s__block{
            max-width: 500px;
            .heading_3 {
                margin-bottom: 20px;
            }
        }
        img {
                margin: 80px 0px;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        @media screen and (max-width: 1600px){
            padding: 80px 60px;
            img {
                margin: 60px 0px;
            }
        }
        @media screen and (max-width: 1200px){
            padding: 80px 60px;
            img {
                margin: 40px 0px;
            }
            .title_s__block{
                max-width: 400px;
                .heading_3 {
                    margin-bottom: 16px;
                }
            }
        }
        @media screen and (max-width: 640px){
            padding: 40px 20px;
            padding-bottom: 0;
            .title_s__block{
                max-width: 360px;
                .heading_3 {
                    margin-bottom: 12px;
                }
            }
        }
    }
    .block_b {
        .title_s__block{
            margin: 50px 240px;
            .heading_3 {
                margin-bottom: 20px;
            }
            .body{
                margin-left: 360px;
                max-width: 500px;
            }
        }
        .img_center {
            width: 100%;
            background: #E5E5E5;
            display: flex;
            justify-content: center;
            img {
                margin: 20px 0px;
                max-width: 959px;
                object-fit: cover;
            }
        }
        @media screen and (max-width: 1600px){
            .title_s__block{
                margin: 80px 60px;;
                .heading_3 {
                    margin-bottom: 20px;
                }
                .body{
                    margin-left: 360px;
                    max-width: 500px;
                }
            }
        }
        @media screen and (max-width: 1200px){
            .title_s__block{
                margin: 80px 60px;;
                .heading_3 {
                    margin-bottom: 20px;
                }
                .body{
                    margin-left: 240px;
                    max-width: 500px;
                }
            }
        }
        @media screen and (max-width: 640px){
            .title_s__block{
                margin: 40px 20px;
                .heading_3 {
                    margin-bottom: 20px;
                }
                .body{
                    margin-left: 160px;
                    max-width: 300px;
                }
            }
        }
    }
    .big_design {
        padding: 130px 240px;
        background: $black_100;
        color: $white_100;
        @media screen and (max-width: 1600px){
            padding: 80px 60px;
        }
        @media screen and (max-width: 1200px){
            padding: 80px 60px;
        }
        @media screen and (max-width: 640px){
            padding: 40px 20px;
        }
        
    }
    @media screen and (max-width: 1600px){
        .info_block {
            padding: 40px 60px;
        }
    }
    @media screen and (max-width: 1200px){
        .info_block {
            .nav {
                margin-bottom: 24px;
            }
            gap: 32px;
        }
        .cta_block {
            height: 140px;
        }
    }
    @media screen and (max-width: 640px){
        .info_block {
            .nav {
                margin-bottom: 16px;
            }
            padding: 40px 20px;
            .info_stack {
                justify-content: space-between;
                .stack_item__details {
                    .nav {
                        margin-left: 8px;
                    }
                    .vue_logo {
                        width: 40px;
                    }
                    .node_logo {
                        width: 80px;
                    }
                }
            }
        }
        .cta_block {
            height: 80px;
            a {
                font-size: 16px;
                line-height: 24px; 
            }
            
        }
    }
}

</style>