<template>
  <div class="proj_info">
    <div class="info_block">
        <div class="info_details">
            <div class="nav">{{project.common.tags}}</div>
            <div class="heading_5">{{project.common.description}}</div>
        </div>
        <div class="info_stack" v-if="project.common.stack.isStack">
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
    <div class="cta_block" :style="cssVars">
        <a :href="project.common.links.demo" target="_blank" class="left_cta heading_5">Смотреть демо
            <div class="anim_left"></div>
        </a>
        <a :href="project.common.links.figma" target="_blank" class="right_cta heading_5">Макеты в Figma
            <div class="anim_right"></div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    props: ["project"],
    computed: {
        cssVars () {
            return{
                '--color': this.project.common.color,
            }
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
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
            background: var(--color);
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
</style>