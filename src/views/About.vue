<template>
    <div id="about">
        <div class="footer">
            <h2>{{ $t('footer.about') }}</h2>
            <p>{{ $t('footer.org') }}<br>
                {{ $t('footer.mindset') }}<br><br>{{ $t('footer.thanks') }} </p>
            <div class="icons">
                <i class="fa fa-facebook"></i>
                <i class="fa fa-instagram"></i>
                <i class="fa fa-linkedin"></i>
            </div>
        </div>
    </div>
</template>

<style>

.footer{
    width: 100%;
    text-align: center;
    padding: 30px 0;
}
.footer h2{
    margin-bottom: 15px;
    margin-top: 20px;
    font-weight: 800;
}
.footer p{
    color: #777;
    font-size: 18px;
    font-weight: 300;
    padding: 15px;
}
.icons .fa{
    color: #0c0ff597;
    margin: 0 13px;
    cursor: pointer;
    padding: 18px 0;
}

</style>