<template>
  <div class="plan-container">
    <div class="plan-box">
      <h2>Beginner Workout Plan</h2>
      <div v-for="(dayWorkouts, day) in beginnerWorkoutPlan" :key="day">
        <div @click="toggleExercise(day)" class="day">
          <h3>{{ daysOfWeek[day] }}</h3>
          <span v-if="selectedDay === day">&#9660;</span>
          <span v-else>&#9654;</span>
        </div>
        <div v-show="selectedDay === day" class="exercise">
          <ul>
            <li v-for="(exercise, index) in dayWorkouts" :key="index">
              <p>{{ exercise.name }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="plan-box">
      <h2>Meal Plan</h2>
      <div v-if="selectedDay !== -1">
        <ul>
          <li v-for="(meal, index) in mealPlan[selectedDay]" :key="index">{{ meal }}</li>
        </ul>
      </div>
      <div v-else>
        <p>SELECT A DAY TO VIEW A MEAL PLAN.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'sadPlan',

  data() {
    return {
      beginnerWorkoutPlan: [
        [
          { name: '20 Jumping Jacks'},
          { name: '15 Squats'},
          { name: '15 Crunches'},
          { name: '10 Push Ups'},
          { name: '20-Second Plank'},
          { name: '15-Minute Walk'},
        ],
        [
          { name: '20 Jumping Jacks'},
          { name: '15 Step Ups'},
          { name: '15 Crunches'},
          { name: '25 Mountain Climbers'},
          { name: '20-Second Plank'},
          { name: '15-Minute Walk'},
        ],
        [
          { name: '10 Burpees'},
          { name: '20-Second Wall sit'},
          { name: '20 Crunches'},
          { name: '25 Mountain Climbers'},
          { name: '25-Second Plank'},
          { name: '15-Minute Walk'},
        ],
        [
          { name: '20-Minute Walk'}
        ],
        [
          { name: '30 Jumping Jacks'},
          { name: '20 Walking Lunges'},
          { name: '20 Ab Bikes'},
          { name: '15 Triceps Dips'},
          { name: '25-Second Plank'},
          { name: '20-Minute Walk'},
        ],
        [
          { name: '12 Burpees'},
          { name: '20 Squats'},
          { name: '20 Straight Leg Sit Ups'},
          { name: '12 Push Ups'},
          { name: '30-Second Plank'},
          { name: '20-Minute Walk'},
        ],
        [
          { name: '25-Minute Walk'}
        ],
      ],
      mealPlan: [
        [
          'MONDAY MEAL PLAN:',
          '------------------',
          'Breakfast: Oatmeal with fruits and nuts',
          'Mid-morning snack: Greek yogurt with berries',
          'Lunch: Grilled chicken salad',
          'Afternoon snack: Carrot sticks with hummus',
          'Dinner: Baked salmon with quinoa and roasted vegetables',
          'Evening snack: Mixed nuts or a piece of fruit'
        ],
        [
          'TUESDAY MEAL PLAN:',
          '------------------',
          'Breakfast: Scrambled eggs with toast',
          'Mid-morning snack: Apple slices with peanut butter',
          'Lunch: Quinoa salad with chickpeas',
          'Afternoon snack: Mixed nuts',
          'Dinner: Grilled vegetables with brown rice',
          'Evening snack: Low-fat yogurt'
        ],
        [
          'WEDNESDAY MEAL PLAN:',
          '------------------',
          'Breakfast: Smoothie with spinach, banana, and almond milk',
          'Mid-morning snack: Cottage cheese with pineapple',
          'Lunch: Tuna salad sandwich',
          'Afternoon snack: Rice cakes with almond butter',
          'Dinner: Turkey meatballs with whole wheat pasta',
          'Evening snack: Sliced apple with cinnamon'
        ],
        [
          'THURSDAY MEAL PLAN:',
          '------------------',
          'Breakfast: Whole grain cereal with low-fat milk',
          'Mid-morning snack: Trail mix',
          'Lunch: Lentil soup with whole grain bread',
          'Afternoon snack: Celery sticks with cream cheese',
          'Dinner: Grilled chicken breast with sweet potato',
          'Evening snack: Orange slices'
        ],
        [
          'FRIDAY MEAL PLAN:',
          '------------------',
          'Breakfast: Yogurt parfait with granola and berries',
          'Mid-morning snack: Banana with almond butter',
          'Lunch: Vegetable stir-fry with tofu',
          'Afternoon snack: Popcorn',
          'Dinner: Brown rice with black beans and salsa',
          'Evening snack: Dark chocolate'
        ],
        [
          'SATURDAY MEAL PLAN:',
          '------------------',
          'Breakfast: Avocado toast with poached egg',
          'Mid-morning snack: Rice cakes with cottage cheese',
          'Lunch: Turkey and avocado wrap',
          'Afternoon snack: Mixed berries',
          'Dinner: Grilled fish with steamed vegetables',
          'Evening snack: Low-fat cheese'
        ],
        [
          'SUNDAY MEAL PLAN:',
          '------------------',
          'Breakfast: Whole wheat pancakes with maple syrup',
          'Mid-morning snack: Almonds',
          'Lunch: Spinach and feta omelet',
          'Afternoon snack: Edamame',
          'Dinner: Roast chicken with quinoa and vegetables',
          'Evening snack: Greek yogurt with honey'
        ],
      ],
      selectedDay: -1
    };
  },

  computed: {
    daysOfWeek() {
      return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
    }
  },

  methods: {
    toggleExercise(day) {
      this.selectedDay = (this.selectedDay === day) ? -1 : day;
    }
  }
};
</script>

<style scoped>
.plan-container {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 250px 0 180px 0;

}

.plan-box {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.plan-box h2 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: #333;
}
.plan-box p{
  font-size: 18px;
}

ul {
  list-style: none;
  padding: 0;
}
.day {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
}

.day:hover {
  background-color: #f0f0f0;
}

.exercise {
  padding-left: 20px;
  margin-bottom: 10px;
}

.plan-box h2{
  margin-bottom: 40px;
}
</style>
