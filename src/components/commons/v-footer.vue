<template>
  <div class="footer">
    <a href="mailto:bazhenov570@gmail.com" class="nav">bazhenov570@gmail.com</a>
    <a href="https://t.me/alexbazh" class="nav">Telegram</a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 100px 32px;
        background: $black_100;
        a {
            color: $white_100;
            &:hover {
                text-decoration: line-through;
            }
        }
        @media screen and (max-width: 1200px){
            padding: 40px 32px;
        }
        @media screen and (max-width: 640px){
            padding: 24px;
        }
    }
</style>