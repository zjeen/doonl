<template>
	<div>
	<nav class="mui-bar mui-bar-tab ">  
            <router-link to="/" class="mui-tab-items">  
                <img v-show="navState==1" class="mui-icon" src="../../assets/img/homea.png"  />
                <img v-show="navState != 1" class="mui-icon" src="../../assets/img/home.png"  />
                <span :class="navState==1?'mui-tab-label f-pink':'mui-tab-label'">首页</span>  
            </router-link>  
            <router-link to="/hot" class="mui-tab-items">  
                <img v-show="navState==2" class="mui-icon" src="../../assets/img/jiana.png"  />
                <img v-show="navState != 2" class="mui-icon" src="../../assets/img/jian.png"  />
                <span class="mui-tab-label">推荐</span>  
            </router-link>    
            <router-link to="/lun" class="mui-tab-items">  
                <img class="mui-icon" src="../../assets/img/lun.png"  />
                <span class="mui-tab-label">论坛</span>  
            </router-link>  
            <router-link to="/lishi" class="mui-tab-items">  
                <img class="mui-icon" src="../../assets/img/lishi.png"  />
                <span class="mui-tab-label">记录</span>  
            </router-link>  
    </nav> 
    <div class="h-50"></div>
	</div>
    
</template>

<script>
		import { mapGetters} from 'vuex'
	export default {
		name:"NavBar",
		computed:{
			...mapGetters(['navState'])
		},
		methods:{
			go:function(){
				console.log(11)
			}
		}
	}
</script>

<style>
	.router-link-exact-active{
		
	}
</style>