const { authRouter } = require('./controller/auth/auth.controller');
const { clientsRouter } = require('./controller/clients/clients.controller');
const { gamesRouter } = require('./controller/games/games.controller');


module.exports={
    authRouter,
    clientsRouter,
    gamesRouter,
}