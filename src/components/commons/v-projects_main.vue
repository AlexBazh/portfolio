<template>
  <div class="projects_main">
    <div class="proj_row">
        <div class="proj_v">
            <img srcset="@/assets/img/girfido_600.png 600w,
                        @/assets/img/girfido.png 960w"
                sizes="(max-width: 640px) 960px,
                        (max-width: 1200px) 600px"
                src="@/assets/img/girfido.png">
        </div>
        <div class="proj_group">
            <div class="proj_h">
                <img srcset="@/assets/img/serial_killer_600.png 600w,
                        @/assets/img/serial_killer.png 960w"
                sizes="(max-width: 640px) 960px,
                        (max-width: 1200px) 600px"
                src="@/assets/img/serial_killer.png">
            </div>
            <div class="proj_h sec">
                <img srcset="@/assets/img/dostavim_600.png 600w,
                        @/assets/img/dostavim.png 960w"
                sizes="(max-width: 640px) 960px,
                        (max-width: 1200px) 600px"
                src="@/assets/img/dostavim.png">
            </div>
        </div>
    </div>
    <div class="proj_row">
        <div class="proj_v sec">
                <img srcset="@/assets/img/diso_600.png 600w,
                        @/assets/img/diso.png 960w"
                sizes="(max-width: 640px) 960px,
                        (max-width: 1200px) 600px"
                src="@/assets/img/diso.png">
            </div>
        <div class="proj_v">
            <img srcset="@/assets/img/molokomat_600.png 600w,
                        @/assets/img/molokomat.png 960w"
                sizes="(max-width: 640px) 960px,
                        (max-width: 1200px) 600px"
                src="@/assets/img/molokomat.png">
        </div>
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
            height: 100%;
            background: $white_100;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .proj_group {
            width: 50%;
            height: 100%;
            .proj_h {
                background: $gray_50;
                height: 50%;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .sec {
                background: $gray_20;
            }
        }
        .sec {
                background: $gray_50;
        }
        @media screen and (max-width: 1200px){
            height: 600px;
        }
        @media screen and (max-width: 640px){
            height: 800px;
            flex-wrap: wrap;
            .proj_v {
                width: 100%;
                height: 50%;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .proj_group {
                width: 100%;
                height: 50%;
                .proj_h {
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }
</style>