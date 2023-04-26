import Mock from 'mockjs'
const data = Mock.mock({
    "auth|1-10": "★",
    'username':'@string(7, 10)',
    'data':'@date'
})
export default {
    // option 指向本次请求的 Ajax 选项集，含有 url、type 和 body 三个属性
    'get|/userinfo': (option) => {
        return {
            msg: 'success',
            code: 200,
            data:data
        }
    }
}