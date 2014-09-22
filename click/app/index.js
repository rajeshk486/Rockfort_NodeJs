var derby = require('derby');
var app = module.exports = derby.createApp('todos', __filename);

global.app = app;

app.loadViews (__dirname+'/views');

app.on('model', function(model) {
console.log('in app.on()');
  

});

app.get('/',          getPage('all'));
/*app.get('/active',          getPage('active'));
app.get('/completed',          getPage('completed'));*/

function getPage(filter){
console.log('inside getPage');
  return function(page, model) {
    model.subscribe('todos', function () {
	if(filter =='active')
	{
	model.set('_page.newTodo', 'rajesh active');
		console.log('inside regtpage to render');
		}
      page.render();
    });
  }
}

app.proto.addTodo = function(newTodo){
console.log('inside addtodo');
  if (!newTodo) return;
console.log(newTodo);

  this.model.set('_page.newTodo', 'rajesh fff did');
  this.model.set('_newTodo', 'rajesh did from clik function');
  console.log(_newTodo);
};
