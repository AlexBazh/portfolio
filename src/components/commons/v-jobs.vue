<template>
  <div class="job_list">
    <div class="job_item">
        <div class="jobs_years heading_5">2023 — н.в.</div>
        <div class="job_info">
            <div class="job_site">
                <div class="job_main__title heading_5">ВкусВилл</div>
                <a href="https://vkusvill.ru/" target="_blank" class="job_site__link nav">cайт</a>
            </div>
            <div class="job_title nav">Старший продуктовый дизайнер</div>
        </div>
        <ul class="job_details_list body">
            <li>Участие в продуктовых исследование;</li>
            <li>Генерация гипотез по улучшению взаимодействия;</li>
            <li>Сборка и систематизация дизайн-системы;</li>
            <li>Разработка прототипов и дизайн-макетов;</li>
        </ul>
    </div>
    <div class="job_item">
        <div class="jobs_years heading_5">2022 — 2023</div>
        <div class="job_info">
            <div class="job_site">
                <div class="job_main__title heading_5">билайн</div>
                <a href="https://beeline.ru" target="_blank" class="job_site__link nav">cайт</a>
            </div>
            <div class="job_title nav">Старший продуктовый дизайнер</div>
        </div>
        <ul class="job_details_list body">
            <li>Проведение юзабилити-тестирований;</li>
            <li>Создание нового функционала нагруженных интерфейсов;</li>
            <li>Аналитика бизнес требований;</li>
            <li>Разработка прототипов на основании требований и UX-исследований;</li>
            <li>Создание дизайн-макетов.</li>
        </ul>
    </div>
    <div class="job_item">
        <div class="jobs_years heading_5">2021 — 2022</div>
        <div class="job_info">
            <div class="job_site">
                <div class="job_main__title heading_5">Userstory</div>
                <a href="https://userstory.ru/" target="_blank" class="job_site__link nav">cайт</a>
            </div>
            <div class="job_title nav">Арт-директор</div>
        </div>
        <ul class="job_details_list body">
            <li>Создание визуальных решений и концепций будущего сервиса/продукта;</li>
            <li>Презентация концепции напрямую заказчику;</li>
            <li>Ревью и курирование сотрудников отдела дизайна;</li>
            <li>Налаживание процессов внутри отдела дизайна и смежных отделов;</li>
            <li>Создание и поддержка собственной дизайн-системы;</li>
            <li>Организация работ по развитию дизайнеров;</li>
            <li>Проведение творческого поиска идей;</li>
            <li>Работа в команде 20+ дизайнеров.</li>
        </ul>
    </div>
    <div class="job_item">
        <div class="jobs_years heading_5">2020 — 2021</div>
        <div class="job_info">
            <div class="job_site">
                <div class="job_main__title heading_5">Userstory</div>
                <a href="https://userstory.ru/" target="_blank" class="job_site__link nav">cайт</a>
            </div>
            <div class="job_title nav">Ведущий дизайнер</div>
        </div>
        <ul class="job_details_list body">
            <li>UX/UI дизайн;</li>
            <li>Figma Design;</li>
            <li>Проектирование интерфейсов;</li>
            <li>Прототипирование;</li>
            <li>Дизайн продукта;</li>
            <li>Разработка интерфейсов;</li>
            <li>Веб-дизайн;</li>
            <li>Дизайн мобильных приложений;</li>
            <li>Адаптивный дизайн.</li>
        </ul>
    </div>
    <div class="job_item">
        <div class="jobs_years heading_5">2019 — 2020</div>
        <div class="job_info">
            <div class="job_site">
                <div class="job_main__title heading_5">Diso</div>
                <a href="https://diso.ru/" target="_blank" class="job_site__link nav">cайт</a>
            </div>
            <div class="job_title nav">UX/UI-дизайнер</div>
        </div>
        <ul class="job_details_list body">
            <li>Проектирование интерфейсов;</li>
            <li>Исследования пользовательского опыта;</li>
            <li>Дизайн адаптивных страниц;</li>
            <li>Дизайн лендингов;</li>
            <li>Создание прототипов с дальнейшем тестированием на пользователях;</li>
            <li>Внедрение нового функционала в текущий и новый продукты;</li>
            <li>Дизайн продукта.</li>
        </ul>
    </div>
    <div class="job_item">
        <div class="jobs_years heading_5">2018 — 2019</div>
        <div class="job_info">
            <div class="job_site">
                <div class="job_main__title heading_5">Alt IT</div>
                <a href="https://alt-it.solutions/" target="_blank" class="job_site__link nav">cайт</a>
            </div>
            <div class="job_title nav">Веб-дизайнер</div>
        </div>
        <ul class="job_details_list body">
            <div>Дизайн веб сайтов:</div>
            <li>Лендинги;</li>
            <li>Интернет-магазины;</li>
            <li>Интернет-каталоги.</li>
            <div>Брендинг:</div>
            <li>Создание логотипов;</li>
            <li>Оформление фирменного стиля.</li>
            <div>Полиграфия;</div>
            <div>3D визуализация.</div>
        </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
    .job_list {
        padding: 0 240px 140px;
        .job_item {
            .job_info {
                margin: 0 40px;
            }
            display: grid;
            grid-template-columns: 1fr 1fr 2fr;
            padding: 40px 0;
            .job_site {
                display: flex;
                align-items: baseline;
                .job_main__title {
                    margin-right: 10px;
                }
            }
            border-bottom: 1px solid $black_100;
            .job_site__link {
                color: $primary_80;
                &:hover {
                    text-decoration: line-through;
                }
                &:visited {
                    color: $primary_80;
                }
            }
        }
        @media screen and (max-width: 1600px){
            padding: 0 40px 80px;
        }
        @media screen and (max-width: 640px){
            padding: 0 20px 40px;
            .job_item {
                display: flex;
                flex-wrap: wrap;
                .job_details_list {
                    margin: 20px 12px 0 12px;
                }
            }
        }
    }

</style>