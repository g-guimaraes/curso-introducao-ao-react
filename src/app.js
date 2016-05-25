var React = require('react');
var ReactDOM = require('react-dom');


var Hello = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});

ReactDOM.render(<Hello name="React" />, document.getElementById('container'));

if (process.env.NODE_ENV === 'development')
  module.hot.accept();
