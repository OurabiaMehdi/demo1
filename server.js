const path = require('path')
const app = require(path.resolve(__dirname, 'src/app.js'))
const config = require(path.resolve(__dirname,'./src/config/config.js'))


app.listen(config.port , ()=>{
    console.log(`server runnning on ${config.port}`)
})