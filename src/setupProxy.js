const {createProxyMiddleware} = require('http-proxy-middleware')
 
module.exports = function(app){
	app.use(
        '/api',
		createProxyMiddleware({ //遇见/api前缀的请求，就会触发该代理配置
			// target:'http://geek.itheima.net', //请求转发给谁
            target:"https://img.8845.top",
            // secure: false,
			changeOrigin:true,//控制服务器收到的请求头中Host的值
			pathRewrite: { '^/api': '' }  //重写请求路径(必须)
		}),
		
	)
}