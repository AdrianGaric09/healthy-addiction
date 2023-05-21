<template>
    <div class="Motivation">
    <h1>YOU MUST BELIEVE IN YOURSELF</h1>
    <p class="Motivation-subtext">Remember, if anyone can do it, you can do it too</p>

    <div class="row">
        <div class="Motivation-col">
            <h3>Determination</h3>
            <p class="Motivacija">“It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them.
                <br>They went out and happened to things.”
                <br><br>- Leonardo da Vinci </p>
        </div>
        <div class="Motivation-col">
            <h3>Optimism</h3>
            <p class="Motivacija">"There are only two ways to live your life.<br> 
               One is as though nothing is a miracle.<br> The other is as though <br> everything is a miracle." <br><br> - Albert Einstein</p>
        </div>
        <div class="Motivation-col">
            <h3>Self-discipline</h3>
            <p class="Motivacija">“I could only achieve success in my life through self-discipline,<br> 
                and I applied it until my wish and my will became one.” <br><br> - Nikola Tesla</p>
        </div>
    </div>
</div>

</template>

<style> 

.Motivation{
    width: 80%;
    margin: auto;
    text-align: center;
    padding: 150px 0 100px 0;
}

.Motivation h1{
    font-size: 50px;
    font-weight: 600;
}
.Motivation-subtext{
    color: #777;
    font-size: 20px;
    font-weight: 300;
    line-height: 22 px;
    padding: 10px;
     margin: 0 0 150px 0;
}
.Motivacija{
    color: #777;
    font-size: 15px;
    font-weight: 300;
    line-height: 22 px;
    padding: 10px;
     margin: 0 0 150px 0;
}

.row{
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
}

.Motivation-col{
    flex-basis: 31%;
    background: #fff3f3;
    border-radius: 10px;
    margin-bottom: 5%;
    padding: 20px 12px;
    box-sizing: border-box;
    transition: 0.5s;
}
.Motivation-col p{
   padding-top: 30px; 
   margin: 0 0 20px 0;
}
.Motivation h3{
    font-size: 25px;
    text-align: center;
    font-weight: 600;
    margin: 10px 0;
}

.Motivation-col:hover{
    box-shadow: 0 0 20px 0px rgba(0,0,0,0.2);
}
</style>