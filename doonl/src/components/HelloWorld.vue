<template>
  <div>

		
		   <nav class="mui-bar mui-bar-tab " id="nav">  
            <a class="mui-tab-item mui-active" id="a1">  
                <span class="mui-icon mui-icon-home"></span>  
                <span class="mui-tab-label">首页</span>  
            </a>  
            <a class="mui-tab-item " id="a2">  
                <span class="mui-icon mui-icon-email"></span>  
                <span class="mui-tab-label">消息</span>  
            </a>  
            <a class="mui-tab-item " id="a3">  
                <span class="mui-icon mui-icon-email"></span>  
                <span class="mui-tab-label">消息</span>  
            </a>  
        </nav>  
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function(){
    	mui.alert('登陆成功',{ duration:'long', type:'div' }) 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
