<script setup>
const aboutLinks = [
    {
        id: '1',
        name: '+7 499 679 45 79',
        toLink: '#'
    },
    {
        id: '2',
        name: 'Агентство',
        toLink: '#'
    },
    {
        id: '3',
        name: 'Блог',
        toLink: '#'
    },
    {
        id: '4',
        name: 'hello@cyberia.studio',
        toLink: '#'
    },
    {
        id: '5',
        name: 'Услуги',
        toLink: '#'
    },
    {
        id: '6',
        name: 'Контакты',
        toLink: '#'
    },
    {
        id: '7',
        name: 'ул.Ярных, д.35, оф.10',
        toLink: '#'
    },
    {
        id: '8',
        name: 'Кейсы',
        toLink: '#'
    },
    
]
</script>

<template>
    <div class="about_footer">
        <div class="logo">
            <img src="./img/logo_footer.png" alt="">
            <span>Веб-разработка и <br>усиление IT-команд</span>
        </div>
        <div class="about_links">
            <a :href="link.toLink" class="link_item" v-for="link in aboutLinks" :key="link.id">{{ link.name }}</a>
        </div>
        <div class="side"></div>
    </div>
</template>

<style scoped lang="scss">
.about_footer{
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 375px){
        flex-direction: column;
    }
    .logo{
        height: 100%;
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        @media (max-width: 375px){
            width: 100%;
            align-items: center;
        }
        img{
            width: 200px;
            height: 40px;
            margin-bottom: 30px;
        }
        span{
            color: var(--white);
            font-size: 18px;
            font-weight: 400;
            @media (max-width: 375px){
                br{
                    display: none;
                }
            }

        }
    }
    .about_links{
        height: 35%;
        width: 55%;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        align-items: center;
        @media (max-width: 375px){
            width: 100%;
        }
        .link_item{
            height: 30%;
            width: 220px;
            text-decoration: none;
            color: var(--white);
            font-size: 18px;
            font-weight: 300;
            @media (max-width: 375px){
                width: 100px;
                font-size: 13px;
            }
        }
        .link_item:hover{
            text-decoration: underline;
        }
        .link_item:nth-child(2){
            @media (max-width: 375px){
                margin-left: 33px;
            }
        }
        .link_item:nth-child(5){
            @media (max-width: 375px){
                margin-left: 33px;
            }
        }
        .link_item:nth-child(8){
            @media (max-width: 375px){
                margin-left: 33px;
            }
        }
    }
    .side{
        height: 100%;
        width: 20%;
        @media (max-width: 375px){
            display: none;
        }
    }
}
    
</style>