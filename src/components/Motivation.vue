<template>
    <div class="Motivation">
    <h1>{{ $t('motivation.believe') }}</h1>
    <p class="Motivation-subtext">{{ $t('motivation.remember') }}</p>

    <div class="row">
        <div class="Motivation-col">
            <h3>{{ $t('motivation.determination') }}</h3>
            <p class="Motivacija">"{{ $t('motivation.leonardo-p1') }}
                <br>{{ $t('motivation.leonardo-p2') }}"
                <br><br>- Leonardo da Vinci </p>
        </div>
        <div class="Motivation-col">
            <h3>{{ $t('motivation.optimism') }}</h3>
            <p class="Motivacija">"{{ $t('motivation.einstein-p1') }}<br> 
                {{ $t('motivation.einstein-p2') }}<br> {{ $t('motivation.einstein-p3') }} " 
               <br><br> - Albert Einstein</p>
        </div>
        <div class="Motivation-col">
            <h3>{{ $t('motivation.self-discipline') }}</h3>
            <p class="Motivacija">“{{ $t('motivation.tesla-p1') }}<br> 
                {{ $t('motivation.tesla-p2') }}” <br><br> - Nikola Tesla</p>
        </div>
    </div>
</div>

</template>

<style> 

.Motivation{
    width: 85%;
    margin: auto;
    text-align: center;
    padding: 100px 0 100px 0;
}

.Motivation h1{
    font-size: 70px;
    font-weight: 600;
}
.Motivation-subtext{
    color: #777;
    font-size: 25px;
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

@media(max-width: 700px){
    .row{
        flex-direction: column;
    }

    .Motivation h1{
        font-size: 50px;
        font-weight: 600;
    }
}
</style>