<template>
  <div class="features">
    <div class="feature_content">
        <div class="features_text heading_5">
            Помогаю запускать новые сервисы, разрабатываю дизайн-системы, провожу исследования, курирую дизайнеров, создаю свои собственные продукты.
        </div>
        <a class="cta_circle" target="_blank" href="https://t.me/alexbazh">
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
    .features {
        background: $white_100;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 240px;
        .feature_content{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 127px;
        }
        .features_text{
            max-width: 900px;
        }
        .cta_circle {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 30px;
            background: $primary_80;
            color: $white_100;
            border-radius: 200px;
            width: 210px;
            height: 210px;
            min-width: 210px;
            cursor: pointer;
            transition: 1s all;
            .nav {
                text-align: center;
            }
            &:hover {
                rotate: 360deg;
                scale: 1.1;
            }
        }
        @media screen and (max-width: 1600px){
            padding: 120px 60px;
        }
        @media screen and (max-width: 1200px){
            padding: 0 36px;
            .feature_content {
                flex-direction: column;
                align-items: center;
                gap: 40px;
                margin: 40px 0;
            }
            .cta_circle {
                padding: 16px;
                width: 160px;
                height: 160px;
                min-width: 160px;
            }
        }
        @media screen and (max-width: 640px){
            padding: 12px 20px;
            .feature_content {
                flex-wrap: wrap;
                gap: 24px;
                margin: 24px 0;
            }
            .cta_circle {
                padding: 12px;
                width: 120px;
                height: 120px;
                min-width: 120px;
            }
        }
    }

</style>