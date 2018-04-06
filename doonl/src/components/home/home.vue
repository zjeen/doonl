<template>
	<div>
		<topBar title="光影在线" :show="false" v-show="isshow"/>	
		<search :isfx="!isshow"/>
		
		<div class="mui-slider">
		  <div class="mui-slider-group">
		    <div class="mui-slider-item" v-for="item in banner">
		    <router-link  to="#">
		      <img :src="imgApi+'static/img/'+item.imgs" />
		    </router-link>
		   </div> 
		  </div>
		  
			<div class="mui-slider-indicator">
			    <div v-for="(item,i) in banner" :class="i==0?'mui-indicator mui-active':'mui-indicator'"></div>
			</div>
		</div>
		<!--电影推荐-->
		<div class="titles bg-gray margin-t10"><div :class="recshow==0?'active':''" @click="recshow=0">播放最多</div ><div :class="recshow==1?'active':''" @click="recshow=1">电影推荐</div></div>
		<div v-if="rec" v-show="recshow==0" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted h-11">
		    <div class="mui-scroll h-11">
		    	<router-link to="#"  v-for="x in rec[0]" class="mui-control-items padding-5 relative" :style="{width:ww/3+'px'}">
		            <img :src="imgApi+'static/upload/'+x.img" :style="{width:imgw+'px',height:imgh+'px'}"/>
		            <h3 class="f-gray f-1 sheng">{{x.titlea}}</h3>
		            <p class="f-grays f-08 sheng">{{x.readsa}}人观看</p>
		            <div class="score">{{x.score}}</div>
		            <div class="types">{{x.types}}</div>
		        </router-link>
		      
		    </div>
		</div>
		
		<div v-if="rec" v-show="recshow==1" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted h-11">

		    <div class="mui-scroll h-11">
		    	<router-link to="#"  v-for="x in rec[1]" class="mui-control-items padding-5 relative" :style="{width:ww/3+'px'}">
		            <img :src="imgApi+'static/upload/'+x.img" :style="{width:imgw+'px',height:imgh+'px'}"/>
		            <h3 class="f-gray f-1 sheng">{{x.titlea}}</h3>
		            <p class="f-grays f-08 sheng">{{x.readsa}}人观看</p>
		            <div class="score">{{x.score}}</div>
		            <div class="types">{{x.types}}</div>
		        </router-link>
		      
		    </div>
		</div>
	
	
		<!--最新电影-->
		<div class="titles bg-gray margin-t10"><div><img class="mui-icona" src="../../assets/img/movie1.png"  />最新电影</div ><div class="txt-r"><router-link to="#"><img class="mui-icona margin-r5" src="../../assets/img/more.png"></router-link></div></div>
		 <movies :res="homeRess[0]" url="upload" v-if="homeRess"/>
		 <!--电视剧-->
		<div class="titles bg-gray margin-t10"><div><img class="mui-icona" src="../../assets/img/tv1.png"  />最新电视剧</div ><div class="txt-r"><router-link to="#"><img class="mui-icona margin-r5" src="../../assets/img/more.png"></router-link></div></div>
		 <movies :res="homeRess[1]" url="tv" v-if="homeRess"/> 
		 	
		 <!--伦理-->
		<div class="titles bg-gray margin-t10"><div><img class="mui-icona" src="../../assets/img/sex1.png"  />最新伦理片</div ><div class="txt-r"><router-link to="#"><img class="mui-icona margin-r5" src="../../assets/img/more.png"></router-link></div></div>
		 <movies :res="homeRess[5]" url="sex" v-if="homeRess"/>
		 <!--综艺-->
		<div class="titles bg-gray margin-t10"><div><img class="mui-icona" src="../../assets/img/sex1.png"  />最新综艺</div ><div class="txt-r"><router-link to="#"><img class="mui-icona margin-r5" src="../../assets/img/more.png"></router-link></div></div>
		 <movies :res="homeRess[2]" url="fun" v-if="homeRess"/>
		 <!--动漫-->
		<div class="titles bg-gray margin-t10"><div><img class="mui-icona" src="../../assets/img/sex1.png"  />最新动漫</div ><div class="txt-r"><router-link to="#"><img class="mui-icona margin-r5" src="../../assets/img/more.png"></router-link></div></div>
		 <movies :res="homeRess[3]" url="cartoon" v-if="homeRess"/>
		 <!--动画片-->
		<div class="titles bg-gray margin-t10"><div><img class="mui-icona" src="../../assets/img/sex1.png"  />最新动画片</div ><div class="txt-r"><router-link to="#"><img class="mui-icona margin-r5" src="../../assets/img/more.png"></router-link></div></div>
		 <movies :res="homeRess[4]" url="movie" v-if="homeRess"/>
		 <!--福利-->
		<div class="titles bg-gray margin-t10"><div><img class="mui-icona" src="../../assets/img/sex1.png"  />最新福利</div ><div class="txt-r"><router-link to="#"><img class="mui-icona margin-r5" src="../../assets/img/more.png"></router-link></div></div>
		 <movies :res="homeRess[6]" url="sex" v-if="homeRess"/>
	</div>
</template>

<script>
	import { mapGetters,mapActions } from 'vuex'
	import topBar from "../public/topBar"
	import search from "../public/search"

	import movies from "./movies"
	export default{
		name:'Home',
		data(){
			return{
				recshow:0,
				isshow:true
			}
		},
		computed:{
			...mapGetters(['navState','banner','imgApi','ww','imgw','imgh','rec','homeRess','navsZta'])
			
		},
		mounted:function(){//组件渲染完成后的函数
			this.changeNavState(1)//底部导航激活状态
			if(!this.banner){
				this.getBanner("/api/wx-banner")
			}
			if(!this.rec){
				this.getRec("/api/wx-recommend")
			}
			if(!this.rec){
				this.getHomeRes("/api/wx-indexRecommend")
			}
			this.initSlid()
			this.initScroll()
			this.getNavZt(0)
			window.addEventListener('scroll', ()=>{//监听滚动事件
			 	if( document.body.scrollTop > 50){
			 		this.isshow = false
			 	}else{
			 		this.isshow = true
			 	}
			 	
			 })
		},
		methods:{
			...mapActions(['changeNavState','getBanner',"getRec","getHomeRes",'getNavZt']),
			initSlid:function(){//初始化slide
				    var gallery = mui('.mui-slider');
				     gallery.slider({
                    interval: 3500
                });
			},
			initScroll:function(){
				mui('.mui-scroll-wrapper').scroll();
			}
		},
		updated:function(){//组件更新
			this.initSlid()
			this.initScroll()
		},
		components:{
			topBar,
			search,
			movies
		}
	}
	
	
</script>

<style>
	.titles{
		widows: 100%;
		height: 3rem;
		text-align: center;
		line-height: 3rem;
		display: flex;
	}
	.titles div{
		flex: 1;
	}
	.titles div.active{
		color: deeppink;
		border-bottom: 1px solid deeppink;
	}
	.h-11{
		height: 11.5rem !important;
	}
</style>