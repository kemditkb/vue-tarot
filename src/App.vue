<template>
  <div id="app" @click.right="e=>e.preventDefault()">
		<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

body{
	background-color: white;
	user-select : none;
}

body {
	background-image: url("./assets/background.jpg");
}
body::after{
	content:"";

  background: rgba(233, 240, 255,0.9);

	top:0;
	left:0;
	bottom: 0;
	right:0;
	position: absolute;
	z-index: -1;
}


.button {
  font-size: 25px !important;
  border-radius: 150px !important;
  height:70px;
}

.title {
	text-align: center;
  margin-top:10vh;
  margin-bottom: 10px;
  text-align: center;
}
</style>
