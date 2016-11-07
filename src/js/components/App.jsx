var React = require('react');

var ImageCaption = require('./ImageCaption')
var Layout = require('./Layout')

var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

var App = React.createClass({
  render: function() {
    return (
      <main>
        <h1>My first React App</h1>
        <hr/>
        <h2>testing ImageCaption</h2>
        <ImageCaption source="http://i.imgur.com/D8JWn.jpg" text="Rainbow tail!"></ImageCaption>
        <hr/>
        <h2>Testing Layout</h2>
        <Layout>
          <h2>About us</h2>
          <p>We are <a href="https://facebook.github.io/react/">React</a> developers!</p>
        </Layout>
          <div> {
            imageList.map(function(picture) {
              return <ImageCaption id={picture.id} source={picture.source} text={picture.text}/>
            })
          }
          </div>
      </main>
    )
  }
});

module.exports = App;