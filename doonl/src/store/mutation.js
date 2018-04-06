export const mNavState = function(state,pl){
	state.navStates.msg = pl.msg
}
export const setNavZt = function(state,pl){
	state.globaData.navZt = pl.msg
}
//banner数据
export const setBanner = (state,dt) => {
		state.globaData.banner = dt.msg
	}
//首页推荐电影数据
export const setRec = (state,dt) => {
		state.movieData.recommend = dt.msg
	}
//首页电影数据
export const setHomeRes = (state,dt) => {
		state.movieData.homeRes = dt.msg
	}

//首页电影数据
export const setDatas = (state,dt) => {
		state.movieData.datas[dt.id] = dt.msg
	}