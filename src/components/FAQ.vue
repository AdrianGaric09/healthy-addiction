<template>

    <div class="FAQ">
        <h1>WE ARE HERE TO ANSWER <br> THE IMPORTANT QUESTIONS</h1>
        <p>When in doubt, observe and ask questions. <br>When certain, observe at length and ask many more questions.</p>

    <div class="row">
        <div class="FAQ-col">
            <img src="../assets/what_to_eat.jpeg">
            <h3 class="FAQ-title">What should I eat?</h3>
        </div>
        <div class="FAQ-col">
            <img src="../assets/how_to_train.jpg">
            <h3 class="FAQ-title">How do I train?</h3>
        </div>
        <div class="FAQ-col">
            <img src="../assets/Habits.jpg">
            <h3 class="FAQ-title">How do I succeed?</h3>
        </div>
    </div>

    <div class="How">
        <h2>Find out for yourself<br>Click <a href="index.html">HERE</a></h2>
    </div>

    </div>
</template>

<style>
.FAQ{
    width: 80%;
    margin: auto;
    text-align: center;
    padding-top: 100px;
}
.FAQ h1{
    font-size: 50px;
    font-weight: 600;
}
.FAQ p{
    color: #777;
    font-size: 18px;
    font-weight: 300;
    line-height: 22 px;
    padding: 10px;
     margin: 0 0 150px 0;
}
.FAQ-col{
    flex-basis: 31%;
    border-radius: 10px;
    margin-bottom: 10%;
    text-align: center;
}
.FAQ-col img{
    width: 100%;
    height: 85%;
    border-radius: 10px;
}

</style>