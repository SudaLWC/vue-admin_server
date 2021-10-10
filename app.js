const express = require('express')
// 导入gzip网络传输压缩
const compression = require('compression')
const app = express()

// 启用gzip中间件*必须在托管静态资源之前
app.use(compression())
// 托管静态资源
app.use(express.static('./dist'))


app.listen(8000, () => {
    console.log('vue-admin_server running at http://localhost:8000/');
})