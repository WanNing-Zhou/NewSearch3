// mock/index.js
export default [
    // 模拟 GET 请求
    {
        url: '/api/user',
        method: 'get',
        response: () => {
            return {
                code: 200,
                data: {
                    id: 1,
                    name: 'John Doe',
                    email: 'john.doe@example.com'
                }
            };
        }
    },
    // 模拟 POST 请求
    {
        url: '/api/login',
        method: 'post',
        response: () => {
            return {
                code: 200,
                message: '登录成功'
            };
        }
    }
];
