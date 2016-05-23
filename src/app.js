var React = require('react');
var ReactDOM = require('react-dom');
var img = require('./imagem.jpg');


var Hello = React.createClass({
  render: function() {
    return <img src={img} />;
  }
});

ReactDOM.render(<Hello name="React" />, document.getElementById('container'));

if (process.env.NODE_ENV === 'development')
  module.hot.accept();
