export const navState = state => {
	return state.navStates.msg
};
export const api = state => state.globaData.api
export const navsZta = state => state.globaData.navZt
export const imgApi = state => state.globaData.imgApi
export const banner = state => state.globaData.banner
export const ww = state => state.globaData.w
export const imgw = state => state.globaData.w/3-10
export const imgh = state => (state.globaData.w/3-10)*156/123

export const rec = state => state.movieData.recommend
export const homeRess = state => state.movieData.homeRes
export const datass = state => state.movieData.datas