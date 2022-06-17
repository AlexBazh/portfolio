<template>
  <div class="favorite">
    <div class="heading_2">
        Избранные проекты
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
    .favorite {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 173px 240px;
        width: 100%;
        background: $black_100;
        color: $white_100;
        @media screen and (max-width: 1200px){
            padding: 80px 40px;
        }
        @media screen and (max-width: 640px){
            padding: 40 18x;
        }
    }
</style>