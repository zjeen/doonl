export const changeNavState = function({commit},pl){
	commit({
		type:"mNavState",
		msg:pl
	})
}
