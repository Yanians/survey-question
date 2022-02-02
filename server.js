

const express = require('express'),
   jsonserver = require('json-server'),
       server = jsonserver.create(),
       router = jsonserver.router('db.json'),
   middleware = jsonserver.defaults(),
         path = require('path'),
          app = express();
const publicPath = path.join(__dirname,'.','dist');
      app.use(express.static(publicPath));
      app.use(middleware);
      app.use(router);
      app.get('/*', function(req, res){
            res.sendFile(path.join(publicPath,'index.html'))
            // res.render('index');
      });
      
      //set port, listen for requests
      const PORT = process.env.port || 9000;
      app.listen(PORT,()=> {
      	console.log(`Server is running on port ${PORT}. `);
      });

      
// app.set('port',(process.env.PORT || 4000));


// const publicPath = path.join(__dirname,'.','public');

// const port = process.env.PORT || 9000;

//       app.use(express.static(publicPath));

//       app.get('/*', function(req, res){
//             res.sendFile(path.join(publicPath,'index.html'));
//       });

//       app.listen(port,()=> {
//         console.log(`Server is running on port ${port}. `);
//       });

// var express = require('express');
// var cons = require('consolidate');
// var app = express();

// app.engine('html',cons.handlebars);
// app.set('port',(process.env.PORT || 4000));
// app.set('view engine', 'html');
// app.set('views', __dirname + '/public');
// app.use(express.static('public'));

// app.get('/*', function (req, res) {
//     res.sendFile(path.join('index'));
// });
 
// app.listen(app.get('port'),function(){
//   console.log("Server is running at localhost:4000");
// });