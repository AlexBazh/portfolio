<template>
    <div class="proj_title">
        <div class="heading_1">{{title}}</div>
    </div>
</template>

<script>
export default {
    props: ["title"]
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
    .proj_title {
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
</style>