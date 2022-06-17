<template>
  <div class="page_title">
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
    props: ["title", "subtitle_1", "subtitle_2", "subtitle_3"]
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
    .page_title {
        .subtitles_block{
            display: flex;
            gap: 80px;
        }
        padding: 173px 240px 140px;
        .page_title__h1 {
            margin-bottom: 60px;
        }
        @media screen and (max-width: 1200px){
            padding: 120px 40px 80px;
            .page_title__h1 {
                margin-bottom: 32px;
            }
        }
        @media screen and (max-width: 640px){
            padding: 100px 18px 40px;
            .page_title__h1 {
                margin-bottom: 16px;
            }
        }
    }
</style>