<template>
  <div class="form">
    <div class="form_title">
        <div class="heading_1">Поработаем?</div>
        <a href="https://t.me/alexbazh" class="telegram">
            <div class="nav">Написать в Telegram</div>
        </a>
    </div>
    <div class="spec_list">
        <a href="mailto:bazhenov570@gmail.com?subject=UX/UI" class="spec_item">
            <div class="heading_5">UX/UI</div>
            <div class="nav">Написать</div>
        </a>
        <a href="mailto:bazhenov570@gmail.com?subject=Стартап" class="spec_item">
            <div class="heading_5">Стартап</div>
            <div class="nav">Написать</div>
        </a>
        <a href="mailto:bazhenov570@gmail.com?subject=Арт-дирекшн" class="spec_item">
            <div class="heading_5">Арт-дирекшн</div>
            <div class="nav">Написать</div>
        </a>
        <a href="mailto:bazhenov570@gmail.com?subject=Разработка" class="spec_item">
            <div class="heading_5">Разработка</div>
            <div class="nav">Написать</div>
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
    .form {
        padding: 160px 240px;
        .form_title {
            margin-bottom: 60px;
            display: flex;
            align-items: baseline;
            .telegram {
                margin-left: 24px;
                color: $primary_80;
                &:hover {
                    text-decoration: line-through;
                }
            }
        }
        .spec_list {
            width: 100%;
            .spec_item {
                color: $black_100;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 44px 0px;
                .nav {
                    color: $white_100;
                }
                border-bottom: 1px solid $black_100;
                &:hover {
                    color: $white_100;
                    background: $primary_80;
                    padding: 44px 80px;
                    border-bottom: 1px solid $primary_80;
                }
            }
        }
        @media screen and (max-width: 1200px){
            padding: 80px 40px;
            .form_title {
                flex-wrap: wrap;
                .telegram {
                    margin-left: 0;
                }
            }
        }
        @media screen and (max-width: 640px){
            padding: 40 20px;
            .spec_list {
                .spec_item {
                    .nav {
                        color: $primary_80;
                    }
                    &:hover {
                        .nav {
                            color: $white_100;
                        }
                    }
                }
            }
        }
    }
</style>