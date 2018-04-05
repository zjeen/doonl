<template>
	<div>
	<topBar title="光影在线" :show="false"/>	
	<search />
	<navs />
	<h1 style="font-size: 1rem;">我是home{{navState}}</h1>
		
	</div>
</template>

<script>
	import { mapGetters,mapActions } from 'vuex'
	import topBar from "../public/topBar"
	import search from "../public/search"
	import navs from "../public/navs"
	export default{
		name:'Home',
		computed:{
			...mapGetters(['navState'])
			
		},
		mounted:function(){//组件渲染完成后的函数
			this.changeNavState(1)
		},
		methods:{
			...mapActions(['changeNavState'])
		},
		components:{
			topBar,
			search,
			navs
		}
	}
	
	
</script>

<style>
</style>