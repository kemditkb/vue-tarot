<template>
  <div id="start">
  	<div class="title">
  	  <h1>選單</h1>
  	</div>
  	<br>
  	<div class="choose">
			<flexbox>
				<flexbox-item>
					<x-button id="daily" class="button" :gradients="['#FF5E3A', '#FF9500']">每日運勢</x-button>
				</flexbox-item>
				<flexbox-item>
					<x-button id="spread" class="button" :gradients="['#FF5E3A', '#FF9500']">抽牌機！</x-button>
				</flexbox-item>
			</flexbox>
			<br>
			<flexbox>
				<flexbox-item>
					<x-button id="about" class="button" :gradients="['#FF5E3A', '#FF9500']">你是誰？</x-button>
				</flexbox-item>
				<flexbox-item>
					<x-button id="disclaimer" class="button" :gradients="['#FF5E3A', '#FF9500']">免責聲明</x-button>
				</flexbox-item>
			</flexbox>

  	</div>
  </div>
</template>

<script>
import { XButton,
    Flexbox,
    FlexboxItem} from 'vux'

export default {
  components: {
    XButton,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style scope>
.button{
  font-size: 25px !important;
  border-radius: 150px !important;
  height:70px;
}
#start {
	text-align: center;
}
.title{
	margin-top: 20vh;
  margin-bottom: 10px;
}
.choose{
	margin:20px;
}

</style>
