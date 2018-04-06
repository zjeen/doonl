<template>
	<div >
	<div :class="isfx?'fixed bg-white':''">
		<div class="padding-5">
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
		<navs />
	</div>
	<div class="h90" v-show="isfx"></div>
	</div>
</template>

<script>
		import navs from "../public/navs"
	export default {
		name:"search",
		data(){
			return {show:false}
		},
		props:['isfx']
		,
		components:{
			navs
		}
		
		
	}
</script>

<style>
	.searchs{
		width: 100%;
		position:relative;
		top:-10px;
	}
	.h90{
		height: 90px;
	}
</style>