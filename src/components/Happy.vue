<template>
    <div id="happy-emoji" >
        <div class="happy">
            <input type="radio" name="emoji" >
            <label for="mental">
                <img class="mental" src="../assets/mental.png" alt="mental-health"> 
                <h4 class="m-health">Mental health</h4>
            </label>
            <input type="radio" name="emoji" >
            <label for="physical">
                <img class="biceps" src="../assets/biceps.png" alt="physical-health"> 
                <h4 class="p-health">Physical health</h4>
            </label>
            <h2 class="tekst">Choose one to perfect.</h2>
        </div>
    </div>
</template>

<script>

export default {

    name: 'Happy',

};
</script>

<style scoped>

    #happy-emoji{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
    .happy{
        display: flex;
        position: relative;
    }
    .happy img{
        width: 200px;
        cursor: grab;
        margin-bottom: 50px;
        margin-top: 45px;
    }
    .mental{
        transition: transform 0.5s;
    }
    .mental:hover{
        transform: translateY(-10px);
    }
    .biceps{
        transition: transform 0.5s;
    }
    .biceps:hover{
        transform: translateY(-10px);
    }
    .happy input{
        display: none;
    }
    .happy label{
        position: relative;
        text-align: center;  
        border: 15px solid transparent;     
    }
    .m-health{
        color: red;
        border: 2px solid red;
    }
    .m-health:hover{
        background: red;
        color: white;
    }
    .p-health{
        color: blue;
        border: 2px solid blue;
    }
    .p-health:hover{
        background: blue;
        color: white;
    }
    h4{
        cursor: pointer;
        font-size: 20px;
        border-radius: 30px;
        transition: 1s;
    }
    .tekst{
        position: absolute;
        top: -80px;
        right: 1px;
        color: black;
        width: 500px;
        font-weight: 700;
        letter-spacing: 1px;
        text-align: center;
        white-space: nowrap;
        font-size: 40px;
    }
    
</style>
