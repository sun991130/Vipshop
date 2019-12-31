import ajax from './ajax.js'

export const reqhotSellList = () =>ajax(`/gethotsellpiku`) //获取商城中热搜榜的皮裤
export const reqhotSellskitr = () =>ajax(`/getshopSkirt`)  //获取商城中热搜榜的裙子
export const reqhotSellskitrHalf = () =>ajax(`/getshopSkirtHalf`)  //获取商城中热搜榜的半截裙