<template>

    <div class="FAQ">
        <h1>WE ARE HERE TO ANSWER <br> THE IMPORTANT QUESTIONS</h1>
        <p>When in doubt, observe and ask questions. <br><br>When certain, observe at length and ask many more questions.</p>

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

    <div class="Find-out">
        <h1>FIND OUT FOR YOURSELF</h1>

        <div class="Click-here">
            <h2><span class="click">CLICK</span><span class="arrow-container"><ion-icon name="arrow-forward-outline" class="arrow-icon"></ion-icon></span><a href="/"><strong>HERE</strong></a></h2>
        </div>
    </div>

    </div>
</template>

<style scoped>
.FAQ{
    width: 80%;
    margin: auto;
    text-align: center;
    padding-top: 100px;
}
.FAQ h1{
    font-size: 60px;
    font-weight: 600;
}
.FAQ p{
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
    font-size: 30px;
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