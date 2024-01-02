<template>
  <div class="loader-overlay" >
    <div class="loader">
      <div class="spinner">
        <!-- Spinner -->
        <div class="spinner-animation"></div>
        <!-- Logo/Image -->
        <div class="logo">
          <img src="@/assets/HA.png" alt="Healthy Addiction" />
        </div>
      </div>
        <p>LOADING...</p>
    </div>
  </div>
</template>
  
<script>

export default {

  name: 'loader',

};
</script>
  
<style scoped>
  .loader-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
  }
  .loader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .spinner {
    position: relative;
    width: 110px;
    height: 110px;
  }
  .spinner-animation {
    border: 6px solid rgba(0, 0, 0, 0.1);
    border-top: 6px solid #3498db;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: spin 1s linear infinite;
  }
  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .logo img {
    width: 90px; /* Adjust logo image width */
    height: 90px; /* Maintain aspect ratio */
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  .loader p {
    margin-top: 35px;
    font-size: 18px;
    color: #333;
  }

  </style>
  