
<template>
    <div id="emoji-page">
        <div class="rating">
            <input type="radio" name="emoji" id="sad">
            <label for="sad">
                <img class="t" src="../assets/sad.png">
                    <router-link to="/Sad" @click="showSad" class="underline">
                        <h4 class="tuzno">Sad</h4>
                    </router-link>
            </label>
            <input type="radio" name="emoji" id="neutral">
            <label for="neutral">
                <img class="n" src="../assets/neutral.png"> 
                    <router-link to="/Neutral" @click="showNeutral" class="underline">
                        <h4 class="neutralno">Neutral</h4>
                    </router-link>
            </label>
            <input type="radio" name="emoji" id="happy">
            <label for="happy">
                <img class="s" src="../assets/happy.png">
                    <router-link to="/Happy" @click="showHappy" class="underline">
                        <h4 class="sretno">Happy</h4>
                    </router-link>
            </label>
            <h2 class="tekst">What mood are you currently in?</h2>
        </div>
    </div>
</template>

<script>


export default {
    name: 'EmojiPage',
    methods: {
        showSad() {
            this.$emit('scrollToSad');
        },
        showNeutral() {
            this.$emit('scrollToNeutral');
        },
        showHappy() {
            this.$emit('scrollToHappy');
        },
    }
};
</script>

<style scoped>
    #emoji-page{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
    .rating{
        display: flex;
        position: relative;
    }
    .rating img{
        width: 200px;
        cursor: grab;
        margin-bottom: 50px;
        margin-top: 45px;
    }
    .s{
        transition: transform 0.5s;
    }
    .s:hover{
        transform: translateY(-30px);
    }
    .t{
        transition: transform 0.5s;
    }
    .t:hover{
        transform: translateY(-30px);
    }
    .n{
        transition: transform 0.5s;
    }
    .n:hover{
        transform: translateY(-30px);
    }
    .rating input{
        display: none;
    }
    .rating label{
        position: relative;
        text-align: center;  
        border: 15px solid transparent;     
    }
    .tuzno{
        color: red;
        border: 2px solid red;
    }
    .tuzno:hover{
        background: red;
        color: white;
    }
    .neutralno{
        color: blue;
        border: 2px solid blue;
    }
    .neutralno:hover{
        background: blue;
        color: white;
    }
    .sretno{
        color: green;
        border: 2px solid green;
    }
    .sretno:hover{
        background: green;
        color: white;
    }
    h4{
        cursor: pointer;
        font-size: 20px;
        border-radius: 30px;
        transition: 1s;
    }
    .underline {
        text-decoration: none; /* Makne default underline*/
    }
    .tekst{
        position: absolute;
        top: -80px;
        color: black;
        width: 500px;
        font-weight: 700;
        letter-spacing: 1px;
        text-align: center;
        white-space: nowrap;
        font-size: 40px;
    }
    
</style>