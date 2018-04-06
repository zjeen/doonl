import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/home'
import Hot from '@/components/hot'
import List from '@/components/list/list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path:'/hot',
    	name:'hot',
    	component:Hot
    },
    {
    	path:'/list/:a/:b/:c/:d/:e',
    	name:'list',
    	component:List,
    	props: true
    }
  ]
})
