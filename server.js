var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;


var connectionOptions = {
  useMongoClient: true
}
mongoose.connect('mongodb://todoUser:todoUserPwd@localhost/Tododb', connectionOptions); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);