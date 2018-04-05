<template>
	<div >
		<div class="mui-input-row mui-search">
    		<input type="search" @focus="show = true" @blur="show = false" class="mui-input-clear" placeholder="输入影片名或演员名">
		</div>
		<div v-show="show" class="searchs">
			<button type="button" class="mui-btn mui-btn-primary">电影</button>
			<button type="button" class="mui-btn mui-btn-success">电视剧</button>
			<button type="button" class="mui-btn mui-btn-warning">综艺</button>
			<button type="button" class="mui-btn mui-btn-danger">动漫</button>
			<button type="button" class="mui-btn mui-btn-royal">伦理</button> 
		</div>
	</div>
</template>

<script>
	export default {
		name:"search",
		data(){
			return {show:false}
		}
		
		
	}
</script>

<style>
	.searchs{
		width: 100%;
		position:relative;
		top:-10px;
	}
</style>