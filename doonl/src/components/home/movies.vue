<template>
	<div class="flexs">
		    	<router-link to="#"  v-for="x in res" class="mui-control-items padding-5 relative" :style="{width:ww/3+'px'}">
		            <img :src="imgApi+'static/'+url+'/'+x.img" :style="{width:imgw+'px',height:imgh+'px'}"/>
		            <h3 class="f-gray f-1 sheng">{{x.titlea}}</h3>
		            <p class="f-grays f-08 sheng">{{x.readsa}}人观看</p>
		            <div class="score">{{x.score}}</div>
		            <div class="types">{{x.types}}</div>
		       </router-link>
		</div>
</template>

<script>
	import { mapGetters} from 'vuex'
	export default {
		name:"movies",
		props:['res','url'],
		computed:{
			...mapGetters(['imgApi','ww','imgw','imgh'])
			
		}
	}
</script>

<style>
</style>