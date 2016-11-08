var React = require('react');

var ImageCaption = require('./ImageCaption')
var Layout = require('./Layout')
var GuessTheNumber = require('./GuessTheNumber')
var YouClicked = require('./YouClicked')

var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

var App = React.createClass({
  render: function() {
    return (
      <main>
          <YouClicked></YouClicked>
      </main>
    )
  }
});

module.exports = App;