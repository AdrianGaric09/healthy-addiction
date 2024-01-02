<template>
    <div id="FAQ">
        <h1>{{ $t('faq.answer') }} <br> {{ $t('faq.questions') }}</h1>
        <p>{{ $t('faq.doubt') }} <br><br>{{ $t('faq.certain') }}</p>

        <div class="row">
            <div class="FAQ-col">
                <img src="../assets/what_to_eat.jpeg" alt="what_to_eat">
                <h3 class="FAQ-title">{{ $t('faq.eat') }}</h3>
            </div>
            <div class="FAQ-col">
                <img src="../assets/how_to_train.jpg" alt="how_to_train">
                <h3 class="FAQ-title">{{ $t('faq.train') }}</h3>
            </div>
            <div class="FAQ-col">
                <img src="../assets/Habits.jpg" alt="habits">
                <h3 class="FAQ-title">{{ $t('faq.succeed') }}</h3>
            </div>
        </div>

        <div class="Find-out">
            <h1>{{ $t('faq.find-out') }}</h1>

            <div class="Click-here">
                <h2><span class="click">{{ $t('faq.click') }}</span>
                    <span class="arrow-container">
                        <ion-icon name="arrow-forward-outline" class="arrow-icon" role="img" aria-label="Arrow"></ion-icon>
                    </span>
                    <router-link to="/" @click.prevent="handleHereClick"><strong>{{ $t('faq.here') }}</strong></router-link>
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    name: 'faq',

    methods:{
        handleHereClick() {
        this.$emit('scrollToHere');
        }
    }
}
</script>

<style scoped>

    #FAQ{
        width: 80%;
        margin: auto;
        text-align: center;
        padding-top: 100px;
    }
    #FAQ h1{
        font-size: 60px;
        font-weight: 600;
    }
    #FAQ p{
        color: #777;
        font-size: 25px;
        font-weight: 300;
        line-height: 22 px;
        padding: 10px;
        margin: 0 0 150px 0;
    }
    .FAQ-col{
        flex-basis: 31%;
        border-radius: 10px;
        margin-bottom: 100px;
        text-align: center;
    }
    .FAQ-col img{
        width: 100%;
        height: 85%;
        border-radius: 10px;
    }
    .FAQ-col .FAQ-title{
        font-size: 25px;
        margin-top: 10px;
    }
    .Find-out h1{
        font-size: 60px;
        padding-bottom: 50px;
        text-decoration-line:overline;
    }

    .Find-out{
        background-image: url("../assets/FOFY.jpg");
        background-size: 148%;
        padding: 35px;
    }
    .click{
        font-size: 30px;
    }
        
    .Click-here{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Click-here a{
        text-decoration: none;
        border: 4px solid #000000;
        border-radius: 20px;
        cursor: pointer;
        transition: 0.5s;
        color: #000000;
        padding: 10px;
        font-size: 35px;
        background-color: white;
    }
    .Click-here a:hover{
        color: rgb(0, 132, 255);
        border: 4px solid rgb(0, 132, 255);
    }
    .arrow-icon{
        font-size: 30px;
        color: #000000;
        background-color: white;
    }
    .arrow-container {
        margin: 0 20px;
    }

</style>