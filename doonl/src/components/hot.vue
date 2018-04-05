<template>
	<h1>我是hot</h1>
</template>

<script>
	import { mapGetters,mapActions } from 'vuex'
	export default{
		name:'Hot',
		mounted:function(){//组件渲染完成后的函数
			this.changeNavState(2)
		},
		methods:{
			...mapActions(['changeNavState'])
		}
	}
</script>

<style>
</style>