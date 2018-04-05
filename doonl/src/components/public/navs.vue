<template>
	<div class="top-5 mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
	    <div class="mui-scroll padding-10">
	    	<!--<block v-for="item in navData">
		        <router-link to="/hot" class="mui-control-items mui-active">
		            	<img class="mui-icona" src="../../assets/img/home1.png"  />{{item.title}}
		        </router-link>
	        </block>-->
	        <a class="mui-control-items">
	            	<img class="mui-icona" src="../../assets/img/jians1.png"  />电影
	        </a>
	        <a class="mui-control-items">
	            	<img class="mui-icona" src="../../assets/img/jians1.png"  />电视剧
	        </a>
	        <a class="mui-control-items">
	            	<img class="mui-icona" src="../../assets/img/jians1.png"  />综艺
	        </a>
	        <a class="mui-control-items">
	            	<img class="mui-icona" src="../../assets/img/jians1.png"  />动漫
	        </a>
	        <a class="mui-control-items">
	            	<img class="mui-icona" src="../../assets/img/jians1.png"  />动画片
	        </a>
	         <a class="mui-control-items">
	            	<img class="mui-icona" src="../../assets/img/jians1.png"  />伦理片
	        </a>
	         <a class="mui-control-items">
	            	<img class="mui-icona" src="../../assets/img/jians1.png"  />福利片
	        </a>
	    </div>
	</div>
</template>

<script>
	export default {
		name:"navs",
		data(){
			return {
				navData:[
					{title:"推荐",imga:"home1.png",imgb:"home2.png"},
					{title:"电影",imga:"home1.png",imgb:"home2.png"},
					{title:"电视剧",imga:"home1.png",imgb:"home2.png"},
					{title:"综艺",imga:"home1.png",imgb:"home2.png"},
				]
			}
		}
	}
	
</script>

<style>
.mui-icona{
		width:25px;
		height:25px;
		position: relative;
		top:7px;
	}
	.top-5{
		position:relative;
		top:-10px;
	}
</style>