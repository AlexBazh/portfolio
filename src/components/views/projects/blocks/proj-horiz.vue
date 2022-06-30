<template>
    <div class="proj_horiz">
        <div
            v-for="block in blocks"
            :key="block.id"
            class="i_1"
        >
            <div class="title_s__block">
                <div class="heading_3">{{block.title}}</div>
                <div class="body">{{block.description}}</div>
            </div>
            <img :src="block.image" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: ["blocks"]
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
    .proj_horiz {
        margin: 100px 240px;
        .i_1 {
            display: flex;
            gap: 32px;
            margin-bottom: 60px;
            .heading_3 {
                margin-bottom: 20px;
            }
        }
        @media screen and (max-width: 1600px){
            margin: 100px 60px;
        }
        @media screen and (max-width: 1200px){
            margin: 80px 60px;
            .i_1 {
                display: block;
                .title_s__block {
                    max-width: 500px;
                    margin-bottom: 20px;
                }
                img {
                    width: 100%;
                    object-fit: cover;
                }
            }
        }
        @media screen and (max-width: 640px){
            margin: 40px 20px;
            .i_1 {
                margin-bottom: 32px;
            }
        }
    }
</style>