<script setup>
import { ref, unref } from 'vue'
import { Api } from '../api/api.js'

const projectsCategories = ref({})
const projects = ref([])
const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')

function fetchGetProjects() {
    Api.getProjects()
        .then(data => {
            projects.value = data
        })
        .catch(error => console.log(error))
}
function fetchGetProjectsCategories() {
    Api.getProjectsCategories()
        .then(data => {
            projectsCategories.value = data
        })
        .catch(error => console.log(error))
}
function sendProject() {
    Api.sendFeedbacks({
        name: unref(name),
        email: unref(email),
        phone: unref(phone),
        message: unref(message)
    })
}
fetchGetProjects()
fetchGetProjectsCategories()
</script>

<template>
    <div class="title_and_btns">
        <h2>Кейсы</h2>
        <div class="navigation_btns">
            <a :href="b.linkTo" v-for="b in projectsCategories" :key="b.id" class="nav_btn_link">{{ b.name }}</a>
        </div>
    </div>
    <div class="project_list_block">
        <div class="project_item" v-for="n in projects" :key="n.id">
            <img :src="n.image">
            <div class="title_block">
                {{ n.title }}
                <div class="project_info">Онлайн гипермаркет. Для компании были разработаны сайт и мобильное приложение
                    и т.д.</div>
            </div>
        </div>
    </div>
    <div class="block_feedback">
        <div class="feedback_title">
            <img src="./img/feed_icon.png" alt="">
            <h3><span>Расскажите <br>о вашем проекте:</span></h3>
        </div>
        <div class="feedback_form">
            <form action="">
                <span class="first_line">
                    <span class="form_item">
                        <label for="name">Ваше Имя*</label>
                        <input type="text" name="name" v-model="name" required>
                    </span>
                    <span class="form_item">
                        <label for="email">Email*</label>
                        <input type="email" name="email" v-model="email" required>
                    </span>
                    <span class="form_item">
                        <label for="phone">Телефон*</label>
                        <input type="text" name="phone" v-model="phone" v-mask="'###########'" required>
                    </span>
                </span>
                <span class="messages">
                    <span class="form_message_item">
                        <label for="message">Сообщение*</label>
                        <textarea name="message" type="text" v-model="message" cols="30" rows="10" required></textarea>
                    </span>
                </span>
                <div class="checkbox_block">
                    <input type="checkbox" name="check" class="check" required>
                    <label for="check">Согласие на обработку персональных данных</label>
                </div>
                <button type="submit" @submit="sendProject()">Обсудить проект</button>
                <span class="personal_data">Нажимая “Отправить”, Вы даете согласие на обработку персональных данных</span>
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
.title_and_btns {
    width: 100%;
    height: 12%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    h2 {
        width: 100%;
        height: 60%;
        font-size: 48px;
        font-weight: 600;
        margin-top: 20px;
        color: var(--white);

        @media (max-width: 375px) {
            font-size: 25px;
            font-weight: 500;
        }

    }

    .navigation_btns {
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 70px;

        @media (max-width: 375px) {
            flex-wrap: wrap;
            gap: 10px;
        }

        .nav_btn_link:nth-child(4) {
            @media (max-width: 375px) {
                background-color: #2D76F9;
                color: #fff;
            }
        }

        .nav_btn_link {
            text-decoration: none;
            color: var(--white);
            font-size: 24px;
            padding: 10px 30px;
            background-color: var(--grey-light);
            border-radius: 10px;
            box-shadow: 8px 5px 10px 0px #171B2C69;

            @media (max-width: 375px) {
                width: 48%;
                height: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                padding: 0;
            }

        }

        .nav_btn_link:hover {
            background-color: var(--white);
            color: var(--grey);
            transition: .5s ease;
            cursor: pointer;
        }
    }
}

.project_list_block {
    width: 100%;
    height: 47%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (max-width: 375px) {
        margin-top: 40px;
        max-height: 100%;
    }

    .project_item {
        width: 380px;
        height: 380px;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
            position: absolute;
        }

        .title_block {
            position: absolute;
            width: 120px;
            height: 120px;
            background-color: var(--grey);
            border-radius: 5px;
            right: 25px;
            top: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white;
            font-size: 24px;

            @media (max-width: 375px) {
                background-color: rgba(0, 0, 0, 0.2);
                flex-direction: column;
                height: 20%;
                width: 75%;
                justify-content: end;
                align-items: start;
                top: 280px;
                left: 40px;

            }

            .project_info {
                display: none;

                @media (max-width: 375px) {
                    display: flex;
                    font-size: 13px;
                    text-align: left;
                    font-weight: 300;

                }
            }
        }

        .title_block::after {
            content: '';
            position: absolute;
            top: -7px;
            right: -7px;
            width: 25px;
            height: 25px;
            background-image: url('./img/arrows.png');

            @media (max-width: 375px) {
                background-image: url('./img//arrows_white.png');
                background-repeat: no-repeat;
                left: 0;
                top: -20px;
            }

        }
    }

    .project_item:hover {
        cursor: pointer;

        .title_block {
            background-color: #fff;
            color: var(--grey);
            transition: .5s ease;
        }

    }
}

.block_feedback {
    width: 100%;
    height: 680px;
    margin-top: 50px;

    .feedback_title {
        width: 35%;
        height: 25%;
        display: flex;
        justify-content: start;
        align-items: center;

        @media (max-width: 375px) {
            width: 100%;
            gap: 30px;
        }

        img {
            display: none;

            @media (max-width: 375px) {
                display: flex;
                width: 75px;
                height: 70px;
            }
        }

        h3 {
            font-size: 48px;
            display: flex;
            flex-direction: column;
            color: var(--white);
            word-spacing: 2px;
            font-weight: 600;

            @media (max-width: 375px) {
                font-size: 24px;
            }
        }
    }
}

.feedback_form {
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        margin-top: 30px;

        .first_line {
            width: 100%;
            height: 20%;
            display: flex;
            gap: 30px;

            @media (max-width: 375px) {
                flex-direction: column;
                height: 50%;
            }

            .form_item {
                position: relative;
                width: 31%;
                height: 60px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border: 1px solid var(--white);

                @media (max-width: 375px) {
                    width: 100%;
                }

                label {
                    position: absolute;
                    font-size: 18px;
                    font-weight: 300;
                    top: -10px;
                    left: 30px;
                    padding: 0px 15px;
                    color: var(--white);
                    background-color: #2D2D39;

                    @media (max-width: 375px) {
                        background-color: #272833;
                    }

                }

                input {
                    width: 90%;
                    height: 70%;
                    padding: 0px 20px;
                    background-color: #2D2D39;
                    border: none;
                    color: var(--white);
                    font-size: 18px;

                    @media (max-width: 375px) {
                        background-color: #272833;
                    }

                }

                input:focus {
                    outline: none;
                }
            }
        }

        .messages {
            width: 100%;
            height: 40%;
            @media (max-width: 375px){
                margin-top: 20px;
            }

            .form_message_item {
                position: relative;
                width: 100%;
                height: 140px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border: 1px solid var(--white);

                label {
                    position: absolute;
                    font-size: 18px;
                    font-weight: 300;
                    top: -10px;
                    left: 30px;
                    padding: 0px 15px;
                    color: var(--white);
                    background-color: RGB(43, 44, 56);

                    @media (max-width: 375px) {
                        background-color: #272833;
                    }
                }

                textarea {
                    resize: none;
                    width: 100%;
                    height: 70%;
                    padding: 0px 20px;
                    background-color: #2B2B37;
                    border: none;
                    color: var(--white);
                    font-size: 18px;

                    @media (max-width: 375px) {
                        background-color: #272833;
                    }
                }

                textarea:focus {
                    outline: none;
                }
            }
        }

        .checkbox_block {
            width: 100%;
            height: 5%;
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 10px;

            @media (max-width: 375px) {
                display: none;
            }

            input {
                width: 25px;
                height: 25px;
            }

            label {
                margin-left: 10px;
                font-size: 18px;
                color: var(--white);
            }
        }

        button {
            background-color: #2D76F9;
            margin-top: 55px;
            border: none;
            padding: 20px 55px;
            font-size: 18px;
            font-weight: 400;
            color: var(--white);
            border-radius: 40px;
            @media (max-width: 375px){
                margin-top: 25px;
            }
        }

        button:hover {
            background-color: var(--white);
            color: #2D76F9;
            transition: .5s ease;
            cursor: pointer;
        }
        .personal_data{
            display: none;
            @media (max-width: 375px){
                display: flex;
                margin-top: 20px;
                text-align: center;
                font-size: 17px;
                color: grey;
            }
        }
    }
}
</style>