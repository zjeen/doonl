<template>
	<div>
	<topBar title="光影在线" :show="false" v-show="isshow"/>	
	<search :isfx="!isshow"/>
	<movieNav :b="b" :c="c" :d="d" :e="e" :all="datas[1]" v-show="a==1"/>
	<tvNav :b="b" :c="c" :d="d" :e="e" :all="datas[1]" v-show="a==2"/>
	<movies :res="datas[0]" :url="imga" />
	</div>
</template>

<script>
	import { mapGetters,mapActions } from 'vuex'
	import topBar from "../public/topBar"
	import search from "../public/search"
	import movieNav from "./movieNav"
	import tvNav from "./tvNav"
	import movies from "../home/movies"
	export default {
		name:"List",
		props:['a','b','c','d','e'],
		data(){
			return {
				isshow:true,
				imga:"",
				datas:''
				
			}
		},
		computed:{
			...mapGetters(['navState','datass'])
			
		},
		created:function(){
			this.getNavZt(this.a)
			this.changeNavState(1)//底部导航激活状态
			var url = this.getUrl(this.a)
			this.getDt(url)
		},
		components:{
			topBar,
			search,
			movieNav,
			movies,
			tvNav
		},
		mounted:function(){//组件渲染完成后的函数
		
			
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
						url = `/api/${this.b}/${this.c}/${this.d}/${this.e}/wx-tvlist`
						this.imga = "tv"
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
			},
			getDt:function(url){
				mui.getJSON(url,(dt)=>{
					console.log(123)
					this.datas=dt
				})
			},
			getDta:function(url){
				mui.getJSON(url,(dt)=>{
					console.log(123)
					this.datas=dt
				})
			}
		},
		 watch:{
		 	'$route' (to, from) {
		 			console.log(to)
			      this.getNavZt(this.a)
			      var url = this.getUrl(this.a)
			      this.getDta(url);
			 }
		 }
		
	}
</script>

<style>
</style>