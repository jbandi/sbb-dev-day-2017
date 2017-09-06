var express = require('express');
var morgan = require('morgan');
var _ = require('lodash');


var app = express();
var util = require('util');

var todos = [
  {id: 1, title: "Lean Angular", completed: true},
  {id: 2, title: "Lean React", completed: false}
];
var nextId = 2;

//app.use(express.static(__dirname));
app.listen(3456);
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('combined')); // configure default log output
console.log('Server running at http://localhost:3456');
console.log('API endpoint running at http://localhost:3456/todos');

app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
//    res.header("Access-Control-Allow-Headers, Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});

app.get('/', function (req, res) {
  res.status(200).send("API endpoint running at http://localhost:3456/todos");
});

app.get('/todos', function (req, res) {
  const completed = req.param("completed");
  console.log('Completed:' + completed);
  let result;
  if (completed == 0) {
    result = todos.filter(t => t.completed === false);
  }
  else if (completed == 1) {
    result = todos.filter(t => t.completed === true);
  }
  else {
    result = todos;
  }
  console.log(result);
  res.status(200).json({data: result}); // Wrap array in a 'data' property for security: See: http://stackoverflow.com/questions/3503102/what-are-top-level-json-arrays-and-why-are-they-a-security-risk
});

app.get('/todos/:id', function (req, res) {
  var id = req.param("id");

  var index = _.findIndex(todos, function (e) {
    return e.id == id
  }); // id is a string!

  if (index !== -1) {
    res.status(200).json({data: todos[index]});
  }
  else {
    res.status(500).send('No todo with id: ' + id);
  }

});

app.post('/todos', function (req, res) {
  if (!req.is('json')) {
    res.status(415).send('Payload must be JSON');
  }
  console.log(util.inspect(req.body));

  var newTodo = req.body;
  newTodo.id = nextId;
  todos.push(newTodo);

  nextId++;

  console.log(util.inspect(todos));

  res.status(201).json({data: newTodo});
  // setTimeout(() => res.status(201).json({data: newTodo}), 2000);
  //res.status(500).json(newRating); // return an error to see how the client behaves...
});

app.put('/todos/:id', function (req, res) {
  var id = req.param("id");
  var updatedTodo = req.body;

  var index = _.findIndex(todos, function (e) {
    return e.id == id
  }); // id is a string!

  if (index !== -1) {
    todos[index].title = updatedTodo.title;
    todos[index].completed = updatedTodo.completed;
    res.status(204).send();
  }
  else {
    res.status(500).send('No todo with id: ' + id);
  }

});

app.delete('/todos/:id', function (req, res) {

  var id = req.param("id");

  var index = _.findIndex(todos, function (e) {
    return e.id == id
  }); // id is a string!

  if (index !== -1) {
    todos.splice(index, 1);
    res.status(204).send();
  }
  else {
    res.status(500).send('No todo with id: ' + id);
  }
});
