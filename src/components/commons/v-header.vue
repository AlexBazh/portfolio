<template>
  <header class="header">
      <div class="header_logo">
        <a href="/" class="nav_item nav">ateam</a>
      </div>
      <nav class="header_nav">
        <a href="/projects" :class="{ active : isProject}" class="nav_item nav">проекты</a>
        <a href="/about" :class="{ active : isAbout}" class="nav_item nav">про меня</a>
        <a href="/contact" :class="{ active : isContact}" class="nav_item nav">контакты</a>
      </nav>
    </header>
</template>

<script>
export default {
    props: ["isProject", "isAbout", "isContact"]
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
    .header {
        position: fixed;
        left: 0;
        z-index: 100;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 32px;
        background: $black_100;
        color: $white_100;
        .header_nav {
            display: flex;
            flex-direction: row;
            padding: 0px;
            gap: 60px;
        }
        a {
            text-decoration: none;
            color: $white_100;
            &:hover {
                color: $white_100;
                text-decoration: line-through;
            }
            &:visited {
                color: $white_100;
            }
        }
        @media screen and (max-width: 1200px){
            padding: 24px;
        }
        @media screen and (max-width: 640px){
            padding: 20px;
            .header_nav {
                gap: 32px;
            }
            bottom: 0;
        }
        .active {
            text-decoration: line-through;
        }
    }
</style>
