<template>
  <div id="calorieCalc">
    <div id="card">
      <span class="icon-close" @click.prevent="closeCalorieCalculator">
        <ion-icon name="close" role="img" aria-label="Icon close"></ion-icon>
      </span>
      <h1 class="heading">{{ $t('cc.calorie-calculator') }}</h1>
      <form id="calorie-form" @submit.prevent="calculateCalories">

        <div class="form-group">
          <label for="age">{{ $t('cc.age') }}:</label>
          <input type="number" required class="form-control" id="age" :placeholder="$t('cc.enter-age')" v-model="age" :min="15" :max="80">
          <div class="error-message" v-show="ageError">{{ ageErrorMessage }}</div>
        </div>

        <div class="form-group">
          <label>{{ $t('cc.gender') }}:</label>
          <div class="gender-options">
            <div class="custom-control custom-radio">
              <input type="radio" id="male" name="gender" class="custom-control-input" v-model="gender" value="male">
              <label class="custom-control-label" for="male">{{ $t('cc.male') }}</label>
            </div>
            <div class="custom-control custom-radio">
              <input type="radio" id="female" name="gender" class="custom-control-input" v-model="gender" value="female">
              <label class="custom-control-label" for="female">{{ $t('cc.female') }}</label>
            </div>
          </div>  
        </div> 

        <div class="form-group">
          <label for="weight">{{ $t('cc.weight') }} (KG):</label>
          <input type="number" required class="form-control" id="weight" :placeholder="$t('cc.enter-weight')" v-model="weight" :min="30" :max="350" @input="validateWeight">
          <div class="error-message" v-show="weightError">{{ weightErrorMessage }}</div>
        </div>

        <div class="form-group">
          <label for="height">{{ $t('cc.height') }} (CM):</label>
          <input type="number" required class="form-control" id="height" :placeholder="$t('cc.enter-height')" v-model="height" :min="90" :max="250" @input="validateHeight">
          <div class="error-message" v-show="heightError">{{ heightErrorMessage }}
          </div>
        </div>
        
        <div class="form-group">
          <label for="activity-level">{{ $t('cc.activity') }}:</label>
          <select class="custom-select" id="activity-level" v-model="activityLevel">
            <option value="1">{{ $t('cc.activity-p1') }}</option>
            <option value="2">{{ $t('cc.activity-p2') }}</option>
            <option value="3">{{ $t('cc.activity-p3') }}</option>
            <option value="4">{{ $t('cc.activity-p4') }}</option>
            <option value="5">{{ $t('cc.activity-p5') }}</option>
          </select>
        </div>

        <div class="form-group">
          <input type="submit" :value="$t('cc.calculate')" class="btn btn-primary btn-block" :disabled="isLoading">
        </div>

      </form>

      <div id="results" v-show="showResults" >
        <h3>{{ $t('cc.total') }}:</h3>
        <div class="form-group">
          <input type="number" id="total-calories" v-model="caloriesResult" disabled>
        </div>                       
      </div>

      <div id="loading" v-if="isLoading" class="custom-loading">
        <img src="../assets/Loading.gif" alt="Loading...">
      </div>
    </div>
  </div>
</template>

<style scoped>

  #calorieCalc {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 90vh;
    min-width: 90vw; 
    box-sizing: border-box;
    z-index: 1;
  }
  #card {
    border: 1px solid #969696;
    border-radius: 15px;
    box-shadow: 0 6px 10px rgb(177, 177, 177);
    width: 100%;
    max-width: 500px;
    background-color: #ffffff;
  }
  #card .icon-close {
    position: relative;
    bottom: 0px;
    left: 455px;
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
  form{
    padding: 15px;
  }
  .heading {
    font-size: 25px;
    font-weight: bold ;
    text-align: center;
  }
  .form-group {
    margin-bottom: 13px;
    padding: 0.1px;
    font-size: 13px;
  }
  label {
    font-weight: bold;
  }
  input{
    margin: 10px;
    font-size: 12px;
    padding: 0px;
  }
  .custom-control-label {
    position: relative;
    padding-left: 10px; 
    cursor: pointer;
  }
  .custom-control-label:before {
    content: '';
    position: absolute;
    top: 2px;
    left: -30px;
    width: 15px; 
    height: 15px; 
    border: 1px solid #000000;
    border-radius: 50%;
  }
  .custom-control-input:checked ~ .custom-control-label:before {
    border: 2px solid #00ff51; 
  }
  .form-control {
    width: 75%;
    padding: 10px;
    margin-left: 20px;
    border: 2px solid #00ff51;
    border-radius: 15px;
    color: rgba(0, 0, 0, 0.652);
  }
  .gender-options {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 10px;
  }
  .custom-radio .custom-control-label {
    padding-left: 5px;
  }
  .btn-primary {
    display: block;
    width: 80%;
    padding: 10px ;
    border: none;
    border-radius: 4px;
    background-color: #0496ff;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    margin: 0 auto;
  }
  #loading {
    display: flex;
    text-align: center;
    justify-content: center;
  }
  .custom-loading {
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: -20px; 
  }
  #loading img {
    width: 90px;
    height: 90px;
  }
  #results {
    display: flex;
    justify-content: center;
  }
  #total-calories {
    width: 80%;
    border: 1px solid #000000;
    border-radius: 4px;
    padding: 10px;
    text-align: center;
  }
  h3{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
  .custom-select {
    width: 100%;
    padding: 10px;
    border: 1px solid #c0c0c0;
    border-radius: 4px;
    appearance: none;
    font-size: 12px;
  }
  .error-message {
    color: red;
    font-size: 14px;
    margin-top: 5px;
    padding-left: 15px;
  }

</style>

<script>

  import { IonIcon } from '@ionic/vue';

  export default {

    name: "calorieCalculator",

    components: {
        IonIcon, 
    },

    data() {
      return {
        showTheDropdown: false,
        showCalorieCalculator: true,
        isLoading: false,
        showResults: false,
        caloriesResult: null,
        ageError: false,
        ageErrorMessage: "",
        age: null,
        gender: "male",
        weight: null,
        weightError: false,
        weightErrorMessage: "",
        height: null,
        heightError: false,
        heightErrorMessage: "",
        activityLevel: "1",
      };
    },
    
    methods: {
      closeCalorieCalculator() {
        this.$emit('closeCalorieCalculator');
      },

      calculateCalories(event) {
        event.preventDefault();

        const age = parseFloat(this.age);
        const gender = this.gender;
        const weight = parseFloat(this.weight);
        const height = parseFloat(this.height);
        const activity = parseInt(this.activityLevel);
        

        if (isNaN(age) || isNaN(weight) || isNaN(height) || age < 15 || age > 80) {
          this.ageError = true;
          this.ageErrorMessage = this.$t('cc.ageErrorMessage');
          return;
        } else {
          this.ageError = false;
          this.ageErrorMessage = "";
        }

        this.isLoading = true;
        this.showResults = false;

        setTimeout(() => {
          let activityMultiplier = 1.2; 

          if (gender === "female") {
            activityMultiplier = 1.375; 
          }

          if (activity === 1) {
            activityMultiplier *= 1.2;
          } else if (activity === 2) {
            activityMultiplier *= 1.375;
          } else if (activity === 3) {
            activityMultiplier *= 1.55;
          } else if (activity === 4) {
            activityMultiplier *= 1.725;
          } else {
            activityMultiplier *= 1.9;
          }

          if (gender === "male") {
            this.caloriesResult = Math.ceil(
              activityMultiplier * (66.48 + 13.75 * weight + 5.003 * height - 6.756 * age)
            );
          } else {
            this.caloriesResult = Math.ceil(
              activityMultiplier * (655.1 + 9.563 * weight + 1.85 * height - 4.676 * age)
            );
          }

          this.isLoading = false;
          this.showResults = true;
        }, 2000);
      },
      validateWeight() {
        const weight = parseFloat(this.weight);
        if (isNaN(weight) || weight < 30 || weight > 350) {
          this.weightError = true;
          this.weightErrorMessage = this.$t('cc.weightErrorMessage');
        } else {
          this.weightError = false;
          this.weightErrorMessage = "";
        }
      },
      validateHeight() {
        const height = parseFloat(this.height);
        if (isNaN(height) || height < 90 || height > 250) {
          this.heightError = true;
          this.heightErrorMessage = this.$t('cc.heightErrorMessage');
        } else {
          this.heightError = false;
          this.heightErrorMessage = "";
        }
      },
      resetForm() {
        this.age = null;
        this.gender = "male";
        this.weight = null;
        this.weightError = false;
        this.weightErrorMessage = "";
        this.height = null;
        this.heightError = false;
        this.heightErrorMessage = "";
        this.activityLevel = "1";
        this.ageError = false;
        this.ageErrorMessage = "";
        this.showResults = false;
      },
    },
  };
</script>



  