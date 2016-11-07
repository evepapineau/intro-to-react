var React = require('react');

var ImageCaption = require('./ImageCaption')

var App = React.createClass({
  render: function() {
    return (
      <main>
        <h1>My first React App</h1>
        <hr/>
        <h2>testing ImageCaption</h2>
        <ImageCaption source="http://i.imgur.com/D8JWn.jpg" text="Rainbow tail!"></ImageCaption>
        <hr/>
      </main>
    );
  }
});

module.exports = App;