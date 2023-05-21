<template>
    <div class="Lifestyle">
        <h1>IMPROVE YOUR LIFESTYLE</h1>
        <p>We are here to support your way into building a better version of you</p>

        <div class="row">
            <div class="Lifestyle-col">
                <img src="../assets/food.webp">
                <div class="layer">
                    <h3 >HEALTHY FOOD</h3>
                </div>
            </div>
            <div class="Lifestyle-col">
                <img src="../assets/lifting.jpeg">
                <div class="layer">
                    <h3 >TRAINING</h3>
                </div>
            </div>
            <div class="Lifestyle-col">
                <img src="../assets/success.jpeg">
                <div class="layer">
                    <h3 >END GOAL</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .Lifestyle{
        width: 80%;
        margin: auto;
        text-align: center;
        padding-top: 50px;
    }
    .Lifestyle h1{
        font-size: 50px;
        font-weight: 600;
}
    .Lifestyle p{
        color: #777;
        font-size: 20px;
        font-weight: 300;
        line-height: 22 px;
        padding: 10px;
        margin: 0 0 150px 0;
}
    .Lifestyle-col{
        flex-basis: 32%;
        border-radius: 10px;
        margin-bottom: 30px;
        position: relative;
        overflow: hidden;
    }
    .Lifestyle-col img{
        width: 100%;
        height: 85%;
        display: block;
        border-radius: 10px;
    }

    .layer{
        background: transparent;
        height: 85%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.5s;
        border-radius: 10px;
    }
    .layer:hover{
        background: rgba(4, 57, 248, 0.566);
    }
    .layer h3{
        width: 100%;
        font-weight: 500;
        color: #fff;
        font-size: 26px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        opacity: 0;
        transition: 0.5s;
    }
    .layer:hover h3{
        bottom: 60%;
        opacity: 1;
    }
</style>