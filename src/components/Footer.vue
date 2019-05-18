<template>
<div>
    <div class="bottom-container">
        <ul class="bottom-bar">
            <li><a href="">HOME</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href=""><i style="font-size:28px;" class="fab fa-stumbleupon-circle"></i></a></li>
            <li><a href="">SOCIAL</a></li>
            <li><a href="">CONTACT</a></li>
        </ul>
        <ul class="social-media">
            <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
            <li><a href=""><i class="fab fa-twitter"></i></a></li>
            <li><a href=""><i class="fab fa-instagram"></i></a></li>
            <li><a href=""><i class="fab fa-pinterest-p"></i></a></li>
        </ul>
    </div>


    <div class="footer">
        <p>2019 &copy; MARUF AHMED</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'Footer'

}
</script>

<style lang="scss" scoped>
/* BOTTOM MENU */
.bottom-container{
	height: 140px;
	background: transparent;
	margin-top: 3%;;
	padding: 0;
}
.bottom-container>.bottom-bar,
.bottom-container>.social-media{
	height: 40px;
	color: #282828;
	list-style: none;
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
}

.bottom-container>.bottom-bar> li,
.bottom-container>.social-media> li{
	margin-top: 5%;
	padding: 1%;
	list-style: none;
}

.bottom-container>.bottom-bar>li>a,
.bottom-container>.social-media>li>a{
	color: #282828;
	text-decoration: none;
	font-family: Roboto;
}

.footer{
	margin: 0;
	padding-top: 1%;
	text-align: center;
	color: #888;;
	font-size: 12px;
	height: 42px;
	background: #ddd;
}

</style>
