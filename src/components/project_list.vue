<script setup>
import header_menu from './header_menu.vue'
import main_cases from './main_cases.vue'
import footer_block from './footer.vue'
</script>

<template>
    <div class="project_list">
        <header>
            <header_menu />
        </header>
        <main>
            <Suspense>
                <main_cases />
            </Suspense>
        </main>
        <footer>
            <footer_block />
        </footer>
    </div>
</template>

<style scoped lang="scss">
.project_list{
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    @media (max-width: 375px) {
      width: 100%;
      padding: 0px 20px;
    }
}
header{
    width: 100%;
    height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    @media (max-width: 375px) {
      height: 200px;
    }
}
main{
    width: 100%;
    height: 1800px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    @media (max-width: 375px){
        height: 100%;
    }
}
footer{
    margin-top: 60px;
    width: 153%;
    height: 420px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-light);
}
</style>