(function() {
    'use strict';
})();

$(document).ready(function() {
	svg4everybody();
});

var my_news = [
	{
		author: 'Sasha Phechkin',
		text: 'В четверг, четвертого чилса...'
	},{
		author: 'Просто Вася',
		text: 'Считаю, что доллар должен стоить 35 рублей!'
	},{
		author: 'Guest',
		text: 'Free. Download. Best site - localhost: 3000'
	}
]


var News = React.createClass({
  render: function() {
  	var data = this.props.data;
  	var newsTemplate = data.map(function(item, index){
			return(
				<div key={index}>
          <p className="news__author">{item.author}:</p>
          <p className="news__text">{item.text}</p>
        </div>
			)
  	})
    return (
      <div className="news">
        {newsTemplate}
      </div>
    );
  }
});



var Comments = React.createClass({
  render: function() {
    return (
      <div className="comments">
        Нет новостей - комментировать нечего
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <h1>Всем привет, я компонент App! Я умею отображать новости.</h1>
        <News data={my_news} />
        <Comments />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);