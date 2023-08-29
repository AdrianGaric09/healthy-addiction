<template>
      <div class="dropdown" v-show="showTheDropdown">
        <div class="card">
          <span class="icon-close" @click.prevent="closeDropdown">
            <ion-icon name="close" ></ion-icon>
          </span>
          <h1 class="heading">CALORIE CALCULATOR</h1>
          <form id="calorie-form" @submit.prevent="calculateCalories">

            <div class="form-group">
              <label for="age">AGE:</label>
              <input type="number" required class="form-control" id="age" placeholder="Enter your age (15-80)" v-model="age">
              <div class="error-message" v-show="ageError">{{ ageErrorMessage }}</div>
            </div>

            <div class="form-group">
              <label>GENDER:</label>
              <div class="gender-options">
                <div class="custom-control custom-radio">
                  <input type="radio" id="male" name="gender" class="custom-control-input" checked="checked" v-model="gender">
                  <label class="custom-control-label" for="male">MALE</label>
                </div>
                <div class="custom-control custom-radio">
                  <input type="radio" id="female" name="gender" class="custom-control-input" v-model="gender">
                  <label class="custom-control-label" for="female">FEMALE</label>
                </div>
                <div class="custom-control custom-radio">
                  <input type="radio" id="other" name="gender" class="custom-control-input" disabled>
                  <label class="custom-control-label" for="other">OTHER</label>
                </div>
              </div>  
            </div> 

            <div class="form-group">
              <label for="weight">WEIGHT (KG):</label>
              <input type="number" required class="form-control" id="weight" placeholder="Enter your weight in kilograms" v-model="weight" :min="10" :max="650" @input="validateWeight">
              <div class="error-message" v-show="weightError">{{ weightErrorMessage }}</div>
            </div>

            <div class="form-group">
          <label for="height">HEIGHT (CM):</label>
          <input type="number" required class="form-control" id="height" placeholder="Enter your height in centimeters" v-model="height" :min="50" :max="250" @input="validateHeight">
          <div class="error-message" v-show="heightError">{{ heightErrorMessage }}</div>
        </div>
            
            <div class="form-group">
              <label for="activity-level">ACTIVITY LEVEL:</label>
              <select class="custom-select" id="activity-level" v-model="activityLevel">
                <option value="1">Sedentary (little or no exercise)</option>
                <option value="2">Lightly active (exercise/sports 1-3 days/week)</option>
                <option value="3">Moderately active (exercise/sports 3-5 days/week)</option>
                <option value="4">Very active (hard exercise/sports 6-7 days a week)</option>
                <option value="5">Extra active (very hard exercise/sports & physical job or 2x training)</option>
              </select>
            </div>

            <div class="form-group">
              <input type="submit" value="CALCULATE" class="btn btn-primary btn-block" :disabled="isLoading">
            </div>

          </form>

          <div id="results" v-show="showResults" >
            <h3>TOTAL CALORIES:</h3>
            <div class="form-group">
              <input type="number" id="total-calories" v-model="caloriesResult" disabled>
            </div>                       
          </div>

          <div id="loading" v-if="isLoading">
            <img src="../assets/Loading.gif" alt="Loading...">
          </div>
        </div>
     </div>
</template>

<style scoped>
  .dropdown {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw; 
    box-sizing: border-box;
    z-index: 1;
  }

  .card {
    border: 1px solid #969696;
    border-radius: 15px;
    box-shadow: 0 6px 10px rgb(177, 177, 177);
    width: 100%;
    max-width: 500px;
    padding: 10px;
    background-color: #ffffff;
  }

  .card .icon-close {
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

  .heading {
    font-size: 30px;
    font-weight: bold ;
    text-align: center;
    padding-bottom: 30px;
  }

  .form-group {
    margin-bottom: 15px;
    padding: 3px;
    font-size: 15px;
  }

  label {
    font-weight: bold;
  }

  .form-control {
    width: 45%;
    padding: 10px;
    margin-left: 20px;
    border: 2px solid #00ff51;
    border-radius: 15px;
  }

  .gender-options {
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
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
    display: block;
    text-align: center;
    margin-top: 20px;
  }

  #loading img {
    width: 80px;
    height: 80px;
  }

  #results {
    margin-top: 20px;
  }

  #total-calories {
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .custom-select {
    width: 100%;
    padding: 10px;
    border: 1px solid #c0c0c0;
    border-radius: 4px;
    appearance: none;
  }
  .custom-select option {
      padding: 10px;
  }
  .error-message {
    color: red;
    font-size: 15px;
    margin-top: 5px;
    padding-left: 45px;
  }

</style>


<script>
export default {
  name: "CalorieCalculator",
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
    closeDropdown() {
      this.$emit('close');
    },

    calculateCalories(event) {
      event.preventDefault();

      const age = parseFloat(this.age);
      const gender = this.gender;
      const weight = parseFloat(this.weight);
      const height = parseFloat(this.height);
      const activity = parseInt(this.activityLevel);
      //const totalCalories = document.getElementById("total-calories");
      

      if (isNaN(age) || isNaN(weight) || isNaN(height) || age < 15 || age > 80) {
        this.ageError = true;
        this.ageErrorMessage = "Please enter the age between 15 and 80 !";
        return;
      } else {
        this.ageError = false;
        this.ageErrorMessage = "";
      }

      this.isLoading = true;
      this.showResults = false;

      setTimeout(() => {
        let activityMultiplier = 1.2; // Default multiplier for male

        if (gender === "female") {
          activityMultiplier = 1.375; // Default multiplier for female
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
            activityMultiplier * (66.5 + 13.75 * weight + 5.003 * height - 6.755 * age)
          );
        } else {
          this.caloriesResult = Math.ceil(
            activityMultiplier * (655 + 9.563 * weight + 1.85 * height - 4.676 * age)
          );
        }

        this.isLoading = false;
        this.showResults = true;
      }, 2000);
    },
    validateWeight() {
      const weight = parseFloat(this.weight);
      if (isNaN(weight) || weight < 10 || weight > 650) {
        this.weightError = true;
        this.weightErrorMessage = "Please enter the weight between 10 and 650 kilograms!";
      } else {
        this.weightError = false;
        this.weightErrorMessage = "";
      }
    },
    validateHeight() {
      const height = parseFloat(this.height);
      if (isNaN(height) || height < 50 || height > 250) {
        this.heightError = true;
        this.heightErrorMessage = "Please enter the height between 50 and 250 centimeters!";
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



  