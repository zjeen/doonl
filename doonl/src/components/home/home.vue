<template>
	<div>
	<h1 style="font-size: 1rem;">我是home{{navState}}</h1>
	
	</div>
</template>

<script>
	import { mapGetters,mapActions } from 'vuex'
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
		}
	}
	
	
</script>

<style>
</style>