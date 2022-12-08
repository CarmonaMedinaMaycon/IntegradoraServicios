const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { request, response } = require('express');
const { authRouter, gamesRouter, clientsRouter } = require('../modules/router');
const {

}= require(.../modules/controller/router);
const app = express();
app.set('port', process.env.PORT || 3000);
//middlewares
app.use(cors({origins:'*'}));
app.use(express.json({limit:'50'}));

app.get('/', (request,response)=>{
response.send('back to games')
});
//aqui van los endpoints
app.use(`/api/auth`, authRouter);
app.use(`/api/games`, gamesRouter);
app.use(`/api/clients`, clientsRouter)
//son provicionales

module.exports={
 app,
};