<script setup>
import { ref } from 'vue'
const MenuLinks = [
    {
        id: '1',
        name: 'Агентство',
        linkTo: '#'
    },
    {
        id: '2',
        name: 'Услуги',
        linkTo: '#'
    },
    {
        id: '3',
        name: 'Кейсы',
        linkTo: '#'
    },
    {
        id: '4',
        name: 'Блог',
        linkTo: '#'
    },
    {
        id: '5',
        name: 'Контакты',
        linkTo: '#'
    },
    
]
const visible = ref(0)
</script>

<template>
    <div class="header_logo_menu">
        <div class="logo_nav_menu">
            <img src="./img/logo.png" alt="">
            <button @click="visible = 1"><i class='bx bx-menu'></i></button>
        </div>
        <div class="navigation_link_block_desc">
            <ul class="menu_links_desc">
                <button @click="visible = 0"><i class='bx bx-x'></i></button>
                <li class="menu_list_item_desc" v-for="link in MenuLinks" :key="link.id" >
                    <a :href="link.linkTo" class="link_name_desc">{{ link.name }}</a>
                </li>
            </ul>
        </div>
        <div class="navigation_link_block" v-if="visible === 1">
            <ul class="menu_links">
                <button @click="visible = 0"><i class='bx bx-x'></i></button>
                <li class="menu_list_item" v-for="link in MenuLinks" :key="link.id" >
                    <a :href="link.linkTo" class="link_name">{{ link.name }}</a>
                </li>
                <div class="contacts" v-if="visible === 1">
                    <span>Контакты:</span>
                    <span>+7 999 123 45 67</span>
                    <span>hello@cyberia.studio</span>
                    <span>ул.Ярных, д.35, оф.10</span>
                </div>
            </ul>
        </div>
    </div>
    <div class="navigation_info_side">
        <span><span class="grey">Главная </span>/ Кейсы</span>
        <div class="side"></div>
    </div>
</template>

<style scoped lang="scss">
.header_logo_menu{
    width: 100%;
    height: 55%;
    display: flex;

    .logo_nav_menu{
        width: 26%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        @media (max-width: 375px){
            justify-content: space-between;
            width: 100%;
        }
        img{
            cursor: pointer;
            user-select: none;
        }
        button{
            display: none;
            @media (max-width: 375px){
                display: flex;
                justify-content: center;
                align-items: center;
                width: 32px;
                height: 32px;
                background-color: var(--grey);
                color: #fff;
                font-size: 40px;
                border: none;

            }
        }
    }
    .navigation_link_block{
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        @media (max-width: 375px) {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh
        }

        .menu_links{
            list-style: none;
            width: 70%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            font-weight: 400;
            color: white;
            gap: 10px;
            @media (max-width: 375px) {
                position: absolute;
                z-index: 1;
                width: 110%;
                height: 100%;
                padding: 0px 0px 0px 20px;
                background-color: var(--grey);
                display: flex;
                flex-direction: column; 
                justify-content: start;
                align-items: start;
            }
            button{
                display: none;
                @media (max-width: 375px){
                    display: flex;
                    justify-content: end;
                    align-items: end;
                    width: 90%;
                    height: 50px;
                    background-color: var(--grey);
                    border: none;
                }
                .bx{
                        font-size: 40px;
                        color: #fff;
                    }
            }
            .contacts{
                display: none;
                @media (max-width: 375px){
                    width: 90%;
                    height: 180px;
                    margin-top: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: start;
                    border-bottom: 2px solid var(--grey-light);
                    border-top: 2px solid var(--grey-light);
                    gap: 15px;
                    color: grey;
                }
            }
            .menu_list_item{
                color: var(--white);
                padding: 5px 10px;
                border-radius: 10px;

                @media (max-width: 375px){
                    width: 30%;
                }

                .link_name{
                    text-decoration: none;
                    color: var(--white);
                }
            }
            .menu_list_item:hover{
                background-color: #fff;
                color: var(--grey);
                transition: .5s ease;
                cursor: pointer;
                .link_name{
                    color: var(--grey);
                }
            }
        }
        
    }
    .navigation_link_block_desc{
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        @media (max-width: 375px) {
            display: none;
        }
        .menu_links_desc{
            list-style: none;
            width: 70%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            font-weight: 400;
            color: white;
            gap: 10px;
            button{
                display: none;
                .bx{
                        font-size: 40px;
                        color: #fff;
                    }
            }
            .menu_list_item_desc{
                color: var(--white);
                padding: 5px 10px;
                border-radius: 10px;

                .link_name_desc{
                    text-decoration: none;
                    color: var(--white);
                }
            }
            .menu_list_item_desc:hover{
                background-color: #fff;
                color: var(--grey);
                transition: .5s ease;
                cursor: pointer;
                .link_name_desc{
                    color: var(--grey);
                }
            }
        }
        
    }
}
.navigation_info_side{
    height: 45%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    

    span{
        width: 100%;
        height: 40%;
        color: var(--white);
        .grey{
            color: rgb(166, 166, 166);
        }
    }
    .side{
        width: 100%;
        height: 50%;
        @media (max-width: 375px){
            display: none;
        }
    }
}
</style>