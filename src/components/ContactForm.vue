<template>
  <section>
    <div v-if="!submitted" id="contact-form">
        <form @submit.prevent="handleSubmit">
          <span class="icon-close" @click.prevent="closeContactForm">
              <ion-icon name="close" role="img" aria-label="Icon close"> </ion-icon>
          </span>

          <div class="form-group">
              <label for="fullName">{{ $t('cf.name') }}:</label>
              <input type="text" id="fullName" v-model="name" placeholder="Enter your full name" autocomplete="name">
          </div>

          <div class="form-group">
              <label for="email">{{ $t('cf.email') }}:</label>
              <input type="email" id="email" v-model="email" placeholder="Enter your email" autocomplete="email">
          </div>

          <div class="form-group">
              <label for="message">{{ $t('cf.message') }}:</label>
              <textarea id="message" rows="5" v-model="message"></textarea>
          </div>

          <button type="submit">{{ $t('cf.submit') }}</button>
        </form>
    </div> 
    <div v-if="submitted" id="thank-you">
      <p>{{ $t('cf.thanks') }}</p>
    </div>
  </section>
</template>
  
<script>

  import { projectFirestore } from '../firebase/config';
  import { collection, addDoc } from 'firebase/firestore';
  import { IonIcon } from '@ionic/vue';

  export default {

    name:'ContactForm',

    components: {
        IonIcon, 
    },

    data() {
        return {
            name: '',
            email: '',
            message: '',
            submitted: false
        }
    },

    methods: {
      closeContactForm(){
          this.$emit('closeCF');
      },
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
          this.submitted = true;
        } catch (e) {
            console.error('Error adding document: ', e);
          }
      }
    }
  }
</script>
  
<style scoped>
  .icon-close {
    position: relative;
    bottom: 30px;
    left: 465px;
    width: 45px ;
    height: 45px ;
    background: #d9e0e0;
    font-size: 2em;
    color: #070707;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 9px;
    border-bottom-left-radius: 15px;
    cursor: pointer;
  }
  section {
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  #contact-form {
    width: 100%;
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
  form{
    padding: 10px;
  }
  .form-group input, 
  .form-group textarea {
    width: 100%;
    padding: 5px;
    font-size: 16px;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 5px;
    margin-top: 5px;
    color: rgba(0, 0, 0, 0.499);
  }
  textarea {
    resize: vertical;
    min-height: 75px;
    max-height: 150px; 
  }
  button {
    width: 100%;
    border: none;
    padding: 15px;
    font-size: 24px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
    background-color: #0496ff;
    color: #fff;
  }
  #thank-you {
    text-align: center;
    color: green;
    font-size: 60px;
  }

</style>