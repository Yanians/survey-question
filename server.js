

const express = require('express'),
   // jsonserver = require('json-server'),
   //     server = jsonserver.create(),
   //     router = jsonserver.router('db.json'),
   // middleware = jsonserver.defaults(),
         path = require('path'),
          app = express();

const publicPath = path.join(__dirname,'.','dist');
      app.use(express.static(publicPath));
      // app.use(middleware);
      // app.use(router);
      app.get('/*', function(req, res){
            res.sendFile(path.join(publicPath,'index.html'))
      });      
      //set port, listen for requests
      const PORT = process.env.port || 1000;
      app.listen(PORT,()=> {
      	console.log(`Server is running on port ${PORT}. `);
      });
