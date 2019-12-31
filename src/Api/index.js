import ajax from './ajax.js'

export const reqhotSellList = () =>ajax(`/gethotsellpiku`) //获取商城中热搜榜的皮裤
export const reqhotSellskitr = () =>ajax(`/getshopSkirt`)  //获取商城中热搜榜的裙子
export const reqhotSellskitrHalf = () =>ajax(`/getshopSkirtHalf`)  //获取商城中热搜榜的半截裙

//马文静
// 获取左侧列表
export const reqGetShopLeftNav = () => ajax('/getshopleftNav')
// 获取女装
export const reqGetShopWoman = () => ajax('/getshopwoman')
// 获取羽绒服
export const reqGetYuRong = () => ajax('/getshopYuRong')
//获取男女内衣
export const reqGetShopUnderwear = () => ajax('/getshopUnderwear')
// 获取男装
export const reqGetShopMan = () => ajax('/getshopman')
// 大衣
export const reqGetProductList = () => ajax('/getshopbottine')