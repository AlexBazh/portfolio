<template>
    <div class="proj_vert">
        <div class="title_s__block">
            <div class="heading_3">{{block.title}}</div>
            <div class="body">{{block.description}}</div>
        </div>
        <picture>
            <source :srcset="block.images.size_600" type="image/png" media="(max-width: 640px)" >
            <img :src="block.images.size_default" alt="">
        </picture>
    </div>
</template>

<script>
export default {
    props: ["block"]
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
    .proj_vert {
        .title_s__block{
            max-width: 500px;
            margin-top: 140px;
            margin-left: 240px;
            .heading_3 {
                margin-bottom: 20px;
            }
        }
        img {
                margin: 0px;
                width: 100%;
                object-fit: cover;
            }
        @media screen and (max-width: 1600px){
            .title_s__block{
                margin: 80px 60px;
                margin-bottom: 0;
            }
        }
        @media screen and (max-width: 640px){
            .title_s__block{
                margin: 40px 20px;
            }
        }
    }
</style>