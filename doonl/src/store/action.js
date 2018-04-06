export const changeNavState = function({commit},pl){
	commit({
		type:"mNavState",
		msg:pl
	})
}
export const getNavZt = function({commit},pl){
	commit({
		type:"setNavZt",
		msg:pl
	})
}
//banner数据
export const getBanner = function({commit,state},url){
	mui.getJSON(url,function(dt){
		commit({
			type:"setBanner",
			msg:dt
		})
		
	})
}
//首页电影数据1
export const getRec = function({commit,state},url){
	mui.getJSON(url,function(dt){
		commit({
			type:"setRec",
			msg:dt
		})
		
	})
}
//首页电影数据2
export const getHomeRes = function({commit,state},url){
	mui.getJSON(url,function(dt){
		commit({
			type:"setHomeRes",
			msg:dt
		})
		
	})
}
//数据获取
export const getDatas = function({commit,state},dts){
	mui.getJSON(dts.url,function(dt){
		
		commit({
			type:"setDatas",
			id:dts.id,
			msg:dt
		})
		
	})
}
