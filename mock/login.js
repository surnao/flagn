import Mock from 'mockjs'
export default {
    // option 指向本次请求的 Ajax 选项集，含有 url、type 和 body 三个属性
    'post|/login': (option) => {
        const { username, password } = JSON.parse(option.body);
        if (username == 'admin' && password == '123') {
            return {
                msg: 'success',
                code: 200
            }
        } else {
            return {
                msg: 'error',
                code: 201
            }
        }
    }
}