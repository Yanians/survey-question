

// const express = require('express'),
const jsonserver = require('json-server'),
         path = require('path'),
       server = jsonserver.create(),
       router = jsonserver.router('db.json'),
   middleware = jsonserver.defaults(),
          // app = express();
   publicPath = path.join(__dirname,'.','public');
      server.use(middleware);
      server.use(router);
      // server.use(server.static(publicPath));
      server.get('/', function(req, res){
            res.sendFile(path.join(publicPath,'index.html'))
      });      
      //set port, listen for requests
      const PORT = process.env.port || 9000;
      server.listen(PORT,()=> {
      	console.log(`Server is running on port ${PORT}. `);
      });
