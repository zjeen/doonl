<template>
	<div>
		<ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right" href="#">电视剧导航(共{{all}}部影片)</a>
            <div class="mui-collapse-content">
               <div class="top-5 mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
	    <div class="mui-scroll padding-10 ha">
		    <router-link v-for="(x,i) in arr1" :to="'/list/2/'+i+'/'+c+'/'+d+'/'+e" :class="b==i?'mui-activea mui-control-items':'mui-control-items'">
		               {{x}}
		    </router-link>
		</div>    
		</div>
		
		<div class="top-5 mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
	    <div class="mui-scroll padding-10 ha">
		    <router-link v-for="(x,i) in arr2" :to="'/list/2/'+b+'/'+i+'/'+d+'/'+e" :class="c==i?'mui-activea mui-control-items':'mui-control-items'">
		               {{x}}
		    </router-link>
		</div>    
		</div>
		
		<div class="top-5 mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
	    <div class="mui-scroll padding-10 ha margin-0">
		    <router-link v-for="(x,i) in arr3" :to="'/list/2/'+b+'/'+c+'/'+i+'/'+e" :class="d==i?'mui-activea mui-control-items':'mui-control-items'">
		               {{x}}
		    </router-link>
		</div>    
		</div>
            </div>
	        </li>
	    </ul>
		
	</div>
</template>

<script>
	export default {
		name:'tvNav',
		props:['b','c','d','e','all'],
		data(){
			return{
				arr1: ['全部','国产剧','香港剧','台湾剧','韩国剧','日本剧','欧美剧','海外剧'],
				arr2: ['全部','2018','2017','2016','2015','2014','2013','2012','2011','2010','2009','2008','2007','更早'],
				arr3: ['全部','大陆','香港','台湾','美国','韩国','日本','泰国','新加坡','马来西亚','印度','英国','法国','加拿大']

			}
		},
		mounted:function(){//组件渲染完成后的函数
			mui('.mui-scroll-wrapper').scroll();
		},
	}
</script>

<style>
	.mui-activea{
		border:none !important;
		color:hotpink !important;
	}
	.ha a{
		height: 35px;
		line-height: 35px;
	}
	.margin-0{
		margin:0;
	}
	
</style>