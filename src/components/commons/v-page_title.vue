<template>
  <div class="page_title">
    <a href="/projects" class="back_link nav" :class="{show_back: isBack}">Все проекты</a>
    <div class="page_title__h1 heading_1">{{title}}</div>
    <div class="subtitles_block">
        <div class="heading_3">{{subtitle_1}}</div>
        <div class="heading_3">{{subtitle_2}}</div>
        <div class="heading_3">{{subtitle_3}}</div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["title", "subtitle_1", "subtitle_2", "subtitle_3", "isBack"]
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
    .page_title {
        .back_link {
            color: $primary_80;
            display: none;
            &:hover {
                text-decoration: line-through;
            }
            &:visited {
                color: $primary_80;
            }
        }
        .show_back {
            display: block;
        }
        .subtitles_block{
            display: flex;
            gap: 80px;
        }
        padding: 173px 240px 0px;
        .page_title__h1 {
            margin-bottom: 60px;
        }
        @media screen and (max-width: 1600px){
            padding: 160px 40px 0px;
        }
        @media screen and (max-width: 1200px){
            padding: 120px 40px 0px;
            .page_title__h1 {
                margin-bottom: 32px;
            }
        }
        @media screen and (max-width: 640px){
            padding: 100px 20px 40px;
            .page_title__h1 {
                margin-bottom: 16px;
            }
            .subtitles_block {
                flex-direction: column;
                gap: 8px;
            }
        }
    }
</style>