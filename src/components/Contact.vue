<template>
    <div id="contact">
        <div class="Contact-scroll">
            <h2>Feel free to leave any suggestions on how we should improve our website,<br> also let us know what you think of it so far.<br> 
            In the future we are looking forward to adding new features <br>with improving the user experience! </h2>
            <router-link to="/ContactForm" class="contact-link" @click.prevent="showContactForm">CONTACT US</router-link>
        </div>
    </div>
</template>

<script>
    
export default {
    name: 'Contact',
    methods: {
        showContactForm() {
            this.$emit('updateShowContactForm');
        }
    }
};

</script>

<style scoped>
    .Contact-scroll{
        margin: 100px auto;
        width: 80%;
        background-image: linear-gradient(rgba(0, 0, 0, 0.519),rgba(0, 0, 0, 0.519)),url(../assets/office.jpg);
        background-position: center;
        background-size: cover;
        border-radius: 10px;
        text-align: center;
        padding: 100px 0;
    }
    .Contact-scroll h2{
        color: #fff;
        margin-bottom: 40px;
        padding: 0;
    }
    .contact-link{
        display: inline-block;
        text-decoration: none;
        color: #fff;
        border: 2px solid #fff;
        padding: 20px 40px;
        font-size: 16px;
        background: transparent;
        position: relative;
        cursor: pointer;
        transition: 1s;
    }

    .contact-link:hover{
        border: 2px solid #ffffff;
        background: #2461FF;
    }
</style>