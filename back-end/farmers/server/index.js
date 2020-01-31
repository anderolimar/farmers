const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const port = parseInt(process.env.APP_PORT || '3000');

class Server {
    init(app){
        this.handler = express();
        this.router = express.Router();
        this.router.use(bodyParser.json());
        this.router.use(cors());
        
        app.start(this.router); 
        this.handler.use(this.router);
    }
    
    start(){
        process.on('uncaughtException', (err) => {
          console.log(`Caught exception: ${err}\n`);
        });

        this.handler.listen(port, function () {
          console.log(`Listening on port ${port}!`);
        });        
    }
}

module.exports = new Server();