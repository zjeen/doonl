const state = {
	navStates:{msg:1},
	globaData:{//公共数据
		api:"http://localhost:8000/",
		imgApi:"http://43.240.14.111/",
		banner:false,
		w:window.innerWidth,
		imgw:0,
		imgh:0,
		navZt:0
	},
	movieData:{
		recommend:false,
		homeRes:[],
		datas:['','','','','','','','']
	}
}
export default state
