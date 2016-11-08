var React = require('react');

var GuessTheNumber = React.createClass({
    _handleButtonClick: function () {
        var userGuess = parseInt(this.refs.userGuess.value);
        var myGuess = parseInt(this.props.myGuess);
        
        if (userGuess === myGuess) {
            alert("Your guess is right!")
        }
        else if (userGuess > myGuess) {
            alert("Your guess is too high.")
        }
        else if (userGuess < myGuess) {
            alert("Your guess is too low.")
        }
    },
    render: function() {
        return (
            <div>
                <p>
                    <input ref="userGuess" type="text"></input>
                    <button onClick={this._handleButtonClick}>Guess!</button>
                </p>
            </div>
        )
    }
})

module.exports = GuessTheNumber;