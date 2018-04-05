<template>
	<div>
	<header class="mui-bar mui-bar-nav mui-bar-nav-bg black">
	    <a v-if="show"  class="mui-action-backs mui-icon mui-icon-left-nav mui-pull-left"></a>
	    <a class="mui-action-backs mui-icon mui-icon-home mui-pull-right"></a>
	    <h1 class="mui-title">{{title}}</h1>
	</header>
	<div class="h-44"></div>
	
	</div>
</template>

<script>
	export default{
		name:'topBar',
		props:['title','show']
	}
</script>

<style>
</style>