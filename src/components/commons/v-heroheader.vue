<template>
  <div class="heroheader">
    <div class="heroheader_left">
        <div class="left_hello">
            <div class="heading_5">Привет,</div>
            <div class="heading_3">Я - Саша</div>
        </div>
        <div class="left_spec">
            <div class="heading_1 custom_h1">ux / ui,</div>
            <div class="heading_1 custom_h1 dev">developer</div>
        </div>
    </div>
    <div class="heroheader_right">
        <img class="right_avatar" src="@/assets/avatar.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
    .heroheader{
        background: $black_100;
        width: 100%;
        height: 100vh;
        padding: 0 240px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 160px;
        color: $white_100;
        position: relative;
        .left_hello {
            margin-bottom: 20px;
        }
        .dev {
            margin-top: -28px;
        }
        @media screen and (max-width: 1200px){
            padding: 0 36px;
            gap: 80px;
            .right_avatar {
                width: 400px;
            }
        }
        @media screen and (max-width: 640px){
            padding: 0 20px;
            .right_avatar {
                display: none;
            }
            .custom_h1 {
                font-size: 68px;
                line-height: 88px;
            }
        }
    }
</style>