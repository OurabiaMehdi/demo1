const dotenv = require('dotenv')
const path = require('path')

dotenv.config({path: path.resolve(__dirname,'../../.env')});
const config = {
    port : process.env.PORT || 5000 , 
    node_env : process.env.NODE_ENV,
    apiKey : process.env.WEATHER_API_KEY
}
module.exports = config;