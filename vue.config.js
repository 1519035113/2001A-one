module.exports = {
    devServer: {
        // 配置开发服务器
        port: 8000,
        // 配置端口号
        open: true,
        // 配置服务器自动打开浏览器
        https: false,
        // 是否开启https协议
        host: "localhost"
        // 设置主机名
    },
    lintOnSave: false,
    // 关闭eslint
    publicPath: './'
}