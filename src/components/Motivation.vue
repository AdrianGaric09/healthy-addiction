<template>
    <div class="Motivation">
    <h1>You MUST believe in YOURSELF</h1>
    <p>Remember, if anyone can do it, you can do it too</p>

    <div class="row">
        <div class="Motivation-col">
            <h3>Determination</h3>
            <p>Nothing can withstand the power of the human will if it is willing to stake 
            its very existence to the extent of its purpose</p>
        </div>
        <div class="Motivation-col">
            <h3>Optimism</h3>
            <p>Nothing can withstand the power of the human will if it is willing to stake 
            its very existence to the extent of its purpose</p>
        </div>
        <div class="Motivation-col">
            <h3>Self-discipline</h3>
            <p>Nothing can withstand the power of the human will if it is willing to stake 
            its very existence to the extent of its purpose</p>
        </div>
    </div>
</div>

</template>

<style> 

.Motivation{
    width: 80%;
    margin: auto;
    text-align: center;
    padding: 100px 0 100px 0;
}

h1{
    font-size: 36px;
    font-weight: 600;
}

p{
    color: #777;
    font-size: 14px;
    font-weight: 300;
    line-height: 22 px;
    padding: 10px;
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
h3{
    text-align: center;
    font-weight: 600;
    margin: 10px 0;
}

.Motivation-col:hover{
    box-shadow: 0 0 20px 0px rgba(0,0,0,0.2);
}
</style>