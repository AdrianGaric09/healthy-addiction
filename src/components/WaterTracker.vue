<template>
    <div class="water-card">
        <span class="icon-close" @click.prevent="closeWaterTracker">
            <ion-icon name="close" role="img" aria-label="Icon close"></ion-icon>
        </span>
    <h1>{{ $t('wt.water-tracker') }}</h1>
        <div id="water-container">
            <div class="side-info">
                <svg viewBox="0 0 512 512">
                    <path style="fill:#a5d7fe;" d="M443.873,5.28c-3.032-3.36-7.346-5.278-11.872-5.28h-352c-8.836-0.044-16.036,7.083-16.08,15.92
                        c-0.003,0.561,0.024,1.122,0.08,1.68l48,480c0.825,8.206,7.752,14.441,16,14.4h256c8.248,0.041,15.175-6.194,16-14.4l48-480
                        C448.458,13.091,446.954,8.603,443.873,5.28z"/>
                    <path style="fill:#2196F3;" d="M401.281,163.2L369.601,480h-227.2l-35.52-354.24c49.558-19.8,105.795-12.921,149.12,18.24
                        C298.09,174.493,352.715,181.713,401.281,163.2z"/>
                    <path style="fill:#a5d7fe;" d="M384.001,512h-256c-8.248,0.041-15.175-6.194-16-14.4l-48-480C63.117,8.808,69.528,0.964,78.32,0.08
                        c0.558-0.056,1.119-0.083,1.68-0.08h352c8.836-0.044,16.036,7.083,16.08,15.92c0.003,0.561-0.024,1.122-0.08,1.68l-48,480
                        C399.176,505.807,392.248,512.042,384.001,512z M142.497,480h227.008l44.8-448H97.697L142.497,480z"/>
                    <path style="fill:#a5d7fe;" d="M340.897,188.8c-34.507,0.783-68.177-10.679-95.04-32.352c-48.832-40.16-114.048-23.712-148.576-10.336
                        c-8.245,3.181-17.507-0.923-20.688-9.168s0.923-17.507,9.168-20.688l0,0c40.992-15.808,118.976-34.976,180.384,15.36
                        c45.376,37.28,104.544,26.624,146.208,11.136c8.186-3.327,17.52,0.611,20.847,8.798s-0.611,17.52-8.798,20.847
                        c-0.301,0.122-0.606,0.236-0.914,0.339C397.108,182.874,369.154,188.311,340.897,188.8z"/>
                </svg>
                <span class="current-cups">{{ cups }}/10</span>
            </div> 
                <div class="percentage-container">
                    <span class="current-percentage">{{ percentage }}%</span>
                    <div class="progress" :style="{ height: percentage + '%' }"></div>
                </div>
            <div class="side-info">
                <svg viewBox="0 0 512 512">
                    <path class="st0" d="M256.2,0c-23.6,92.2-62.2,181.2-119.7,257.6c-55.9,61.4-44.9,167.8,20.5,219
                        c27.6,22.8,63.8,35.4,99.2,35.4s71.7-12.6,99.2-35.4c65.4-51.2,75.6-157.5,20.5-219C318.4,181.2,279.8,92.2,256.2,0z"/>
                    <path class="st1" d="M257,19.7c-13.4,64.6-34.7,126.8-66.2,180.4c-30.7,42.5-25.2,115.8,11,151.2
                        c15,15.8,35.4,24.4,55.1,24.4s40.2-8.7,55.1-24.4c36.2-35.4,41.7-108.7,11-151.2C291.6,147.3,269.6,84.3,257,19.7z"/>
                </svg>
                <span class="current-liters">{{ (liters / 1000).toFixed(2) }}L/2.5L</span>
            </div>
            <div class="buttons">
                <button class="remove" :disabled="cups === MIN_CUPS" @click="removeCup">-</button>
                <button class="add" :disabled="cups === MAX_CUPS" @click="addCup">+</button>
            </div>
        </div>
    </div>
</template>

<script>
import { IonIcon } from '@ionic/vue';

export default {

    name: "WaterTracker",

    components: {
        IonIcon,
    },

  data() {
    return {
      MAX_CUPS: 10,
      MIN_CUPS: 0,
      cups: 0,
      liters: 0,
      percentage: 0,
    };
  },

  methods: {
    addCup() {
      this.cups++;
      this.liters += 250;
      this.percentage = (this.cups / this.MAX_CUPS) * 100;
    },
    removeCup() {
      this.cups--;
      this.liters -= 250;
      this.percentage = (this.cups / this.MAX_CUPS) * 100;
    },
    closeWaterTracker(){
        this.$emit('closeWaterTracker');
    }
  }
};
</script>

<style scoped>
    .water-card{
        position: sticky;
        border: 1px solid #969696;
        border-radius: 15px;
        box-shadow: 0 6px 10px rgb(177, 177, 177);
        width: 100%;
        max-width: 500px;
        padding: 10px;
        background-color: #ffffff;
        margin-left: auto;
        margin-right: auto;
        z-index: 1;
    }
    .water-card .icon-close {
        position: relative;
        bottom: 10px;
        left: 465px;
        width: 45px ;
        height: 45px ;
        background: #d9e0e0;
        font-size: 2em;
        color: #070707;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top-right-radius: 14px;
        border-bottom-left-radius: 15px;
        cursor: pointer;
    }
    #water-container{
        display: grid;
        grid-template-columns: 2fr 3fr 2fr;
        width: 100%;
        max-width: 600px;
        margin: auto;
        gap: 10px;
    }
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        font-size: 40px;
        font-weight: bold ;
    }
    .st0{ 
        fill: #2196F3; 
    }
    .st1{ 
        fill: #35a6ff; 
    }
    .side-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .side-info svg{
        width: 50%;
        height: auto;
    }
    .side-info span{
        margin-top: 5px;
        font-size: 20px;
    }
    .percentage-container{
        width: 100%;
        height: 100%;
        min-height: 300px;
        margin: auto;
        background-color: #a5d7fe;
        border-radius: 5px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 50px;
        color: #fff;
        position: relative;
    }
    .progress{
        background-color: #2196F3;
        position: absolute;
        width: 100%;
        bottom: 0;
        transition: 0.5 ease;
    }
    .current-percentage{
        z-index: 1;
    }
    
    .buttons{
        grid-column: -1/1;
        margin: 10px auto;
    }
    button{
        background-color: #2196F3;
        color: #fff;
        border: 1px solid #a5d7fe;
        width: 60px;
        height: 60px;
        font-size: 45px;
        border-radius: 50%;
        outline-style: none;
        cursor: pointer;
        margin-bottom: 40px;
    }
    button:disabled{
        background-color: #a5d7fe;
    }
</style>