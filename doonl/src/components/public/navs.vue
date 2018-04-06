<template>
	<div class="top-5 mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
	    <div class="mui-scroll padding-10">
	    	
		    <router-link to="/" :class="navsZta==0?'mui-active mui-control-items':'mui-control-items'">
		        <img v-show="navsZta!=0" class="mui-icona" src="../../assets/img/jians1.png"  />
		        <img v-show="navsZta==0" class="mui-icona" src="../../assets/img/jians2.png"  />
		               推荐
		    </router-link>
	        
	        <router-link to="/list/1/0/0/0/1" :class="navsZta==1?'mui-active mui-control-items':'mui-control-items'" key="a">
	            <img v-show="navsZta!=1" class="mui-icona" src="../../assets/img/movie1.png"  />
		        <img v-show="navsZta==1" class="mui-icona" src="../../assets/img/movie2.png"  />
		            电影
	        </router-link>
	        <router-link to="/list/2/0/0/0/1" :class="navsZta==2?'mui-active mui-control-items':'mui-control-items'" key="b">
	            <img v-show="navsZta!=2" class="mui-icona" src="../../assets/img/tv1.png"  />
		        <img v-show="navsZta==2" class="mui-icona" src="../../assets/img/tv2.png"  />
		            电视剧
	        </router-link>
	       <router-link to="/list/3/0/0/0/1" :class="navsZta==3?'mui-active mui-control-items':'mui-control-items'" >
	            <img v-show="navsZta!=3" class="mui-icona" src="../../assets/img/fun1.png"  />
		        <img v-show="navsZta==3" class="mui-icona" src="../../assets/img/fun2.png"  />
		            综艺
	        </router-link>
	        <router-link to="/list/4/0/0/0/1" :class="navsZta==4?'mui-active mui-control-items':'mui-control-items'" >
	            <img v-show="navsZta!=4" class="mui-icona" src="../../assets/img/cartoon1.png"  />
		        <img v-show="navsZta==4" class="mui-icona" src="../../assets/img/cartoon2.png"  />
		            动漫
	        </router-link>
	        <router-link to="/list/5/0/0/0/1" :class="navsZta==5?'mui-active mui-control-items':'mui-control-items'" >
	            <img v-show="navsZta!=5" class="mui-icona" src="../../assets/img/dh1.png"  />
		        <img v-show="navsZta==5" class="mui-icona" src="../../assets/img/dh2.png"  />
		            动画
	        </router-link>
	         <router-link to="/list/6/0/0/0/1" :class="navsZta==6?'mui-active mui-control-items':'mui-control-items'" >
	            <img v-show="navsZta!=6" class="mui-icona" src="../../assets/img/sex1.png"  />
		        <img v-show="navsZta==6" class="mui-icona" src="../../assets/img/sex2.png"  />
		            理论
	        </router-link>
	        <router-link to="/list/7/0/0/0/1" :class="navsZta==7?'mui-active mui-control-items':'mui-control-items'" key="g">
	            <img v-show="navsZta!=7" class="mui-icona" src="../../assets/img/fuli1.png"  />
		        <img v-show="navsZta==7" class="mui-icona" src="../../assets/img/fuli2.png"  />
		            福利
	        </router-link>
	    </div>
	</div>
</template>

<script>
	import { mapGetters,mapActions } from 'vuex'
	export default {
		name:"navs",
		computed:{
			...mapGetters(['navsZta'])
		},
		updated:function(){
			mui('.mui-scroll-wrapper').scroll();
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