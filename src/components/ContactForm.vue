<template>
    <section>
      <div id="contact-form">
          <form @submit.prevent="handleSubmit">
              <div class="form-group">
                  <label for="fullName">Full name:</label>
                  <input type="text" id="fullName" v-model="name">
              </div>
              
              <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="email" id="email" v-model="email">
              </div>

              <div class="form-group">
                  <label for="message">Message:</label>
                  <textarea id="message" rows="5" v-model="message"></textarea>
              </div>

              <button type="submit">Submit</button>
          </form>
      </div> 
   </section>
</template>
  
  <script>
  import { projectFirestore } from '../firebase/config';
  import { collection, addDoc } from 'firebase/firestore';
  
  export default {

    name:'ContactForm',
  data() {
      return {
          name: '',
          email: '',
          message: ''
      }
  },
  methods: {
    async handleSubmit() {
      let userMessage = {
        name: this.name,
        email: this.email,
        message: this.message
      }
  
      try {
        const docRef = await addDoc(collection(projectFirestore, 'userMessages'), userMessage);
        console.log('Document written with ID: ', docRef.id);
        this.name = '';
        this.email = '';
        this.message = '';
    } catch (e) {
        console.error('Error adding document: ', e);
  }
}
  }
  }
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
    
  }
  section {
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  #contact-form {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0px 0px 20px #00000033;
    border-radius: 8px;
  }
  .form-group {
    margin-top: 20px;
    font-size: 20px;
    color: #0000ff;
  }
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 5px;
    font-size: 18px;
    border: 1px solid rgba(128, 128, 128, 0.199);
    margin-top: 5px;
  }
  textarea {
    resize: vertical;
    max-height: 300px; 
  }
  button {
    width: 100%;
    border: none;
    padding: 20px;
    font-size: 24px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
  }
  </style>