<template>
	<div>
	<topBar title="光影在线" :show="false" v-show="isshow"/>	
	<search :isfx="!isshow"/>
	<movieNav b="1" c="1" d="1" :all="datas[a][1]"/>
	 <movies :res="datas[a][0]" :url="imga"/>
	</div>
</template>

<script>
	import { mapGetters,mapActions } from 'vuex'
	import topBar from "../public/topBar"
	import search from "../public/search"
	import movieNav from "./movieNav"
	import movies from "../home/movies"
	export default {
		name:"List",
		props:['a','b','c','d','e'],
		data(){
			return {
				isshow:true,
				imga:""
				
			}
		},
		computed:{
			...mapGetters(['navState','datas'])
			
		},
		components:{
			topBar,
			search,
			movieNav,
			movies
		},
		mounted:function(){//组件渲染完成后的函数
			this.getNavZt(this.a)
			this.changeNavState(1)//底部导航激活状态
			var url = this.getUrl(this.a)
			this.getDatas({url:url,id:this.a})
			
			window.addEventListener('scroll', ()=>{//监听滚动事件
			 	if( document.body.scrollTop > 50){
			 		this.isshow = false
			 	}else{
			 		this.isshow = true
			 	}
			 	
			 })
		},
		methods:{
			...mapActions(['changeNavState','getNavZt','getDatas']),
			getUrl:function(id){
				var url = ""
				switch(id){
					case "1":
						url = `/api/${this.b}/${this.c}/${this.d}/${this.e}/wx-list`
						this.imga = "upload"
						break;
					case "2":
						url = `/api/1/1/1/1/wx-list`
						break;
					case "3":
						url = `/api/1/1/1/1/wx-list`
						break;
					case "4":
						url = `/api/1/1/1/1/wx-list`
						break;
					case "5":
						url = `/api/1/1/1/1/wx-list`
						break;
					case "6":
						url = `/api/1/1/1/1/wx-list`
						break;
					case "7":
						url = `/api/1/1/1/1/wx-list`
						break;	
				}
				return url
			}
		},
		 watch:{
		 	'$route' (to, from) {
			      this.getNavZt(this.a)
			    }
		 }
		
	}
</script>

<style>
</style>