

// const express = require('express'),
const jsonserver = require('json-server'),
         path = require('path'),
       server = jsonserver.create(),
       router = jsonserver.router(path.join(__dirname,'db.json')),
   middleware = jsonserver.defaults(),
          // app = express();
   publicPath = path.join(__dirname,'.','public');
      server.use(middleware);
      server.use(publicPath,router);
      // server.use(server.static(publicPath));
      server.get('/*', function(req, res){
            res.sendFile(path.join(publicPath,'survey.html'))
      });      
      //set port, listen for requests
      const PORT = process.env.port || 3000;
      server.listen(PORT,()=> {
      	console.log(`Server is running on port ${PORT}. `);
      });
