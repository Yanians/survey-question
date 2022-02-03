

const express = require('express'),
   jsonserver = require('json-server'),
         path = require('path'),
       server = jsonserver.create(),
       router = jsonserver.router('./db.json'),
   middleware = jsonserver.defaults({static:"./public"}),
          app = express(),

   publicPath = path.join(__dirname,'.','public');
      server.use(middleware);
      server.use(router);
         app.use(express.static(publicPath));
         app.use(server);
         app.get('/*', function(req, res){
            res.sendFile(path.join(publicPath,'index.html'))
      });      
      //set port, listen for requests
      const PORT = process.env.PORT || 9000;
      server.listen(PORT,()=> {
      	console.log(`Server is running on port ${PORT}. `);
      });
