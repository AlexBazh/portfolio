<template>
    <div class="proj_final">
        <div class="final_block">
            <picture>
                <source :srcset="block.images.size_600" type="image/png" media="(max-width: 640px)" >
                <img :src="block.images.size_default" alt="">
            </picture>
        </div>
        <div class="next_proj">
            <a :href="block.next_proj.link" class="heading_5">
                <picture>
                    <source :srcset="block.next_proj.images.size_600" type="image/png" media="(max-width: 640px)" >
                    <img :src="block.next_proj.images.size_default" alt="">
                </picture>
            </a>
            <div class="cta_next">
                <a :href="block.next_proj.link" class="heading_5">Следующий проект
                    <div class="cta_next__anim"></div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["block"]
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
    .final_block {
        width: 100%;
        img {
            width: 100%;
            object-fit: cover;
        }
    }
    .next_proj {
        cursor: pointer;
        width: 100%;
        margin-top: -10px;
        &:hover {
            .cta_next {
                .cta_next__anim {
                    width: 100%;
                }
            }
        }
        img {
            width: 100%;
            object-fit: cover;
        }
        .cta_next {
            position: relative;
            background: $black_100;
            margin-top: -10px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 86px 0;
            margin-top: -20px;
            a {
                color: $white_100;
                z-index: 2;
            }
            .cta_next__anim {
                position: absolute;
                width: 0;
                height: 100%;
                top: 0;
                left: 0;
                background: rgba($color: $white_100, $alpha: .1);
                z-index: 1;
            }
            @media screen and (max-width: 640px){
                background: #EE8227;
            }
        }
    }
</style>