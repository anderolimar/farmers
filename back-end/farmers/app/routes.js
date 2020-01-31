const Controllers = require("./controllers");
const errorHandler = require("./error-handler");

class Routes {
    static loadRoutes(router){
        router.get('/', (req,res) => res.json({ message: "Working success !!!" }));
        router.get('/farmers', Controllers.farmers.listFarmers);
        router.use(errorHandler.notFoundHandler);
        router.use(errorHandler.internalErrorHandler);        
    }
}

module.exports = Routes;