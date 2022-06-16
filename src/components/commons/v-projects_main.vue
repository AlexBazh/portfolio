<template>
  <div class="projects_main">
    <div class="proj_row">
        <div class="proj_v"></div>
        <div class="proj_group">
            <div class="proj_h"></div>
            <div class="proj_h sec"></div>
        </div>
    </div>
    <div class="proj_row">
        <div class="proj_v sec"></div>
        <div class="proj_v"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
    .proj_row {
        display: flex;
        height: 800px;
        .proj_v {
            width: 50%;
            background: $white_100;
        }
        .proj_group {
            width: 50%;
            .proj_h {
                background: $gray_50;
                height: 50%;
            }
            .sec {
                background: $gray_20;
            }
        }
        .sec {
                background: $gray_20;
        }
        @media screen and (max-width: 1200px){
            height: 600px;
        }
        @media screen and (max-width: 640px){
            height: 400px;
        }
    }
</style>