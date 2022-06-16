<template>
  <div class="cta">
    <div class="heading_2">
        Каждый день<br>я открыт к новым<br>возможностям
    </div>
    <div class="blue_block">
      <a class="blue_block_circle" target="_blank" href="https://t.me/alexbazh">
        <div class="nav">Написать<br>в Telegram</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
    .cta {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 173px 240px;
        width: 100%;
        background: $black_100;
        color: $white_100;
        position: relative;
        .blue_block {
            position: absolute;
            width: 232px;
            height: 399px;
            right: 0;
            background: $primary_80;
            display: flex;
            align-items: center;
            justify-content: center;
            .blue_block_circle {
              color: $primary_80;
            }
            cursor: pointer;
            &:hover {
              border-radius: 200px;
              width: 399px;
              height: 399px;
              right: 100px;
              .blue_block_circle {
                color: $white_100;
                rotate: 360deg;
                scale: 1.1;
              }
            }
        }
        @media screen and (max-width: 1200px){
            padding: 80px 40px;
            .blue_block {
              width: 160px;
              height: 300px;
            }
        }
        @media screen and (max-width: 640px){
            padding: 40 24px;
            .blue_block {
              display: none;
            }
        }
    }
</style>