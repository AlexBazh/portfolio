<template>
  <div class="projects_main">
    <div class="proj_row">
        <div class="proj_v">
            <a href="/projects/girfido">
                <img srcset="@/assets/img/girfido_600.png 600w,
                            @/assets/img/girfido.png 960w"
                    sizes="(max-width: 640px) 960px,
                            (max-width: 1200px) 600px"
                    src="@/assets/img/girfido.png">
                <div class="project_title">
                    <div class="nav">web - mobile - ux/ui - development</div>
                    <div class="heading_5">Girfido</div>
                </div>
            </a>
        </div>
        <div class="proj_group">
            <div class="proj_h sec">
                <a href="/projects/dostavim">
                    <img srcset="@/assets/img/dostavim_600.png 600w,
                            @/assets/img/dostavim.png 960w"
                    sizes="(max-width: 640px) 960px,
                            (max-width: 1200px) 600px"
                    src="@/assets/img/dostavim.png">
                    <div class="project_title">
                        <div class="nav">web - mobile - ux/ui - development</div>
                        <div class="heading_5">Доставим</div>
                    </div>
                </a>
            </div>
            <div class="proj_h">
                <a href="/projects/series">
                    <img srcset="@/assets/img/serial_killer_600.png 600w,
                            @/assets/img/serial_killer.png 960w"
                    sizes="(max-width: 640px) 960px,
                            (max-width: 1200px) 600px"
                    src="@/assets/img/serial_killer.png">
                    <div class="project_title">
                        <div class="nav">web - ux/ui - development</div>
                        <div class="heading_5">Serial Killer</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="proj_row">
        <div class="proj_v sec">
            <a href="/projects/diso">
                <img srcset="@/assets/img/diso_600.png 600w,
                        @/assets/img/diso.png 960w"
                sizes="(max-width: 640px) 960px,
                        (max-width: 1200px) 600px"
                src="@/assets/img/diso.png">
                <div class="project_title">
                    <div class="nav">web - mobile - research - ux/ui</div>
                    <div class="heading_5">Дисо</div>
                </div>
            </a>
        </div>
        <div class="proj_v">
            <a href="/projects/moloko">
                <img srcset="@/assets/img/molokomat_600.png 600w,
                        @/assets/img/molokomat.png 960w"
                sizes="(max-width: 640px) 960px,
                        (max-width: 1200px) 600px"
                src="@/assets/img/molokomat.png">
                <div class="project_title">
                    <div class="nav">web - ux/ui</div>
                    <div class="heading_5">Молокоматы</div>
                </div>
            </a>
        </div>
    </div>
    <div :class="{additional_projects: isAdditional}">
        <div class="proj_row">
            <div class="proj_v">
                <a href="/projects/transport">
                    <img srcset="@/assets/img/transport_600.png 600w,
                                @/assets/img/transport.png 960w"
                        sizes="(max-width: 640px) 960px,
                                (max-width: 1200px) 600px"
                        src="@/assets/img/transport.png">
                    <div class="project_title">
                        <div class="nav">web - research - mobile - ux/ui - managment</div>
                        <div class="heading_5">Transport</div>
                    </div>
                </a>
            </div>
            <div class="proj_group">
                <div class="proj_h sec">
                    <a href="/projects/stroytek">
                        <img srcset="@/assets/img/stroytek_600.png 600w,
                                @/assets/img/stroytek.png 960w"
                        sizes="(max-width: 640px) 960px,
                                (max-width: 1200px) 600px"
                        src="@/assets/img/stroytek.png">
                        <div class="project_title">
                            <div class="nav">mobile - ux/ui</div>
                            <div class="heading_5">Stroytek</div>
                        </div>
                    </a>
                </div>
                <div class="proj_h">
                    <a href="/projects/chronosat">
                        <img srcset="@/assets/img/chronosat_600.png 600w,
                                @/assets/img/chronosat.png 960w"
                        sizes="(max-width: 640px) 960px,
                                (max-width: 1200px) 600px"
                        src="@/assets/img/chronosat.png">
                        <div class="project_title">
                            <div class="nav">web - ux/ui</div>
                            <div class="heading_5">Chronosat</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="proj_row">
            <div class="proj_v sec">
                <a href="/projects/payrow">
                    <img srcset="@/assets/img/payrow_600.png 600w,
                            @/assets/img/payrow.png 960w"
                    sizes="(max-width: 640px) 960px,
                            (max-width: 1200px) 600px"
                    src="@/assets/img/payrow.png">
                    <div class="project_title">
                        <div class="nav">web - ux/ui</div>
                        <div class="heading_5">Payrow + Stacle</div>
                    </div>
                </a>
            </div>
            <div class="proj_v">
                <a href="/projects/video">
                    <img srcset="@/assets/img/video_system_600.png 600w,
                            @/assets/img/video_system.png 960w"
                    sizes="(max-width: 640px) 960px,
                            (max-width: 1200px) 600px"
                    src="@/assets/img/video_system.png">
                    <div class="project_title">
                        <div class="nav">web - mobile - ux/ui</div>
                        <div class="heading_5">Video System</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="proj_row">
            <div class="proj_v">
                <a href="/projects/designit">
                    <img srcset="@/assets/img/designit_600.png 600w,
                                @/assets/img/designit.png 960w"
                        sizes="(max-width: 640px) 960px,
                                (max-width: 1200px) 600px"
                        src="@/assets/img/designit.png">
                    <div class="project_title">
                        <div class="nav">mobile - ux/ui</div>
                        <div class="heading_5">design it</div>
                    </div>
                </a>
            </div>
            <div class="proj_group">
                <div class="proj_h sec">
                    <a href="/projects/rosatom">
                        <img srcset="@/assets/img/rosatom_600.png 600w,
                                @/assets/img/rosatom.png 960w"
                        sizes="(max-width: 640px) 960px,
                                (max-width: 1200px) 600px"
                        src="@/assets/img/rosatom.png">
                        <div class="project_title">
                            <div class="nav">web - ux/ui</div>
                            <div class="heading_5">Rosatom</div>
                        </div>
                    </a>
                </div>
                <div class="proj_h">
                    <a href="/projects/tender">
                        <img srcset="@/assets/img/tender_600.png 600w,
                                @/assets/img/tender.png 960w"
                        sizes="(max-width: 640px) 960px,
                                (max-width: 1200px) 600px"
                        src="@/assets/img/tender.png">
                        <div class="project_title">
                            <div class="nav">web - research - ux/ui - managment</div>
                            <div class="heading_5">Tender</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["isAdditional"]
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
    .projects_main {
        margin-top: 0;
    }
    .additional_projects {
        display: none;
    }
    .proj_row {
        display: flex;
        height: 800px;
        .proj_v {
            width: 50%;
            height: 100%;
            background: $white_100;
            position: relative;
            transition: .2s all;
            .project_title {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                display: block;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: rgba($color: $black_100, $alpha: .7);
                color: $white_100;
            }
            &:hover{
                .project_title {
                opacity: 1;
                }
            }
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
                position: relative;
                transition: .2s all;
                .project_title {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    display: block;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: rgba($color: $black_100, $alpha: .7);
                    color: $white_100;
                }
                &:hover{
                    .project_title {
                    opacity: 1;
                    }
                }
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
                .project_title {
                        opacity: 1;
                        background: none;
                        color: $black_100;
                        top: 0;
                        align-items: flex-start;
                        padding: 0 8px;
                        border-radius: 4px;
                        left: 12px;
                        top: 12px;
                        background: $white_100;
                        width: fit-content;
                        height: fit-content;
                        .heading_5 {
                            display: none;
                        }
                    }
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
                    .project_title {
                        opacity: 1;
                        background: none;
                        color: $black_100;
                        top: 0;
                        align-items: flex-start;
                        padding: 0 8px;
                        border-radius: 4px;
                        left: 12px;
                        top: 12px;
                        background: $white_100;
                        width: fit-content;
                        height: fit-content;
                        .heading_5 {
                            display: none;
                        }
                    }
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