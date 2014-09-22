var app = module.exports = require('derby').createApp('hello', __filename);
app.loadViews(__dirname);

// Маршрут рендерится на клиене и на сервере
app.get('/', function(page, model) {
  // Подписка обеспечивает синхронизацию данных
  model.subscribe('text.value', function() {
  model.set('text.value','');
    page.render();
  });
});

app.get('/',          getPage('all'));

function getPage(filter){
console.log('inside getPage');
  return function(page, model) {
    model.subscribe('todos', function () {
	if(filter =='active')
	{	
	console.log('inside regtpage to render');
		}
      page.render();
    });
  }
}

app.proto.addTodo = function(name,new_mess, old_mess){
console.log('inside addtodo');
  if (!new_mess) return;
  else
  {
	console.log(new_mess);
	var new_val = old_mess+'\n' +name+' : '+ new_mess;
  this.model.set('text.value',new_val);
  console.log('Text Area edited.');
  }
  
  this.page.render();
};