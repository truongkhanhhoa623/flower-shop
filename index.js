import express from 'express'
import config from './config'
import route from './routes'
import db from './config/db'
const router = express.Router()


const app = express()
//connected database MySQL
db()

route(router)
app.use('/api', router)
app.listen(config.port,(error)=>{
    if(!error) {console.log(`Server runing with port: ${config.port}`)}
})