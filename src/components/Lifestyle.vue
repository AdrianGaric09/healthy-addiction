<template>
    <div class="Lifestyle">
        <h1>{{ $t('lifestyle.improve') }}</h1>
        <p>{{ $t('lifestyle.support') }}</p>

        <div class="row">
            <div class="Lifestyle-col">
                <img src="../assets/healthy.jpg">
                <div class="layer">
                    <h3 >{{ $t('lifestyle.food') }}</h3>
                </div>
            </div>
            <div class="Lifestyle-col">
                <img src="../assets/training.jpg">
                <div class="layer">
                    <h3 >{{ $t('lifestyle.training') }}</h3>
                </div>
            </div>
            <div class="Lifestyle-col">
                <img src="../assets/endgoal.jpg">
                <div class="layer">
                    <h3 >{{ $t('lifestyle.end') }}</h3>
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
        font-size: 70px;
        font-weight: 600;
}
    .Lifestyle p{
        color: #777;
        font-size: 25px;
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