var React = require('react')

var intro = {
  backgroundImage: './img/test.png',
  marginTop: 30,
  width: 840,
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto'
};


var Index = React.createClass({
  render: function() {
    return (
      <main>
      <div style={intro}>
      Hello world!

      <a href="./about.html">About</a>

      <h1>This is</h1>
      <p>A static page.</p>
      <p>React component.</p>
      <p>It live updates.</p>
      <p>Holy shit.</p>
      <p>How do I style it? Done</p>
      <p>How do I make next components?</p>
      </div>
      </main>
    )
  }
})

module.exports = Index

