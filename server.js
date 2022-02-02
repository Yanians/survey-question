

const express = require('express'),
   jsonserver = require('json-server'),
       server = jsonserver.create(),
       router = jsonserver.router('db.json'),
   middleware = jsonserver.defaults(),
         path = require('path'),
          app = express();

const publicPath = path.join(__dirname,'.','public');
      app.use(express.static(publicPath));
      app.use(middleware);
      app.use(router);
      app.get('/*', function(req, res){
            res.sendFile(path.join(publicPath,'survey.html'))
      });      
      //set port, listen for requests
      const PORT = process.env.port || 3000;
      app.listen(PORT,()=> {
      	console.log(`Server is running on port ${PORT}. `);
      });
