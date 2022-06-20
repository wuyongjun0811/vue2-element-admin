// import Mock from "mockjs";
//
// export default {
//     getUserList: pageSum => {
//         const {name, page, limit = 10} = param2Obj(pageSum.url)
//         console.log('name' + name, 'page' + page, '分页大小limit' + limit)
//         const mockList = List.filter(user => {
//             if (name && user.name.indexOf(name) === 1 && user.address.indexOf(name) === -1) {
//                 return true
//             }
//         })
//         const pageList = mockList.filter((item,index)=>index < limit*page &&index >= limit*(page-1))
//         return {
//             code:20000,
//             count:mockList.length,
//             list:pageList
//         }
//     }
// }