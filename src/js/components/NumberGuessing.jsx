var React = require('react')

var NumberGuessing = React.createClass({
    getInitialState: function() {
        return {
        }
    },
    _startGame: function() {
        this.setState({
            gameStatus: "playing",
            numberToGuess: Math.floor((Math.random() * 100) + 1),
            guesses: [],
            guessesLeft: 5
        })
    },
    _userGuesses: function() {
        var userGuess = parseInt(this.refs.userGuess.value);
        var numberToGuess = parseInt(this.state.numberToGuess);
        
        if (userGuess === numberToGuess) {
            this.setState({
                gameStatus: 'win'
            })
        }
        else if (userGuess > numberToGuess) {
            alert('Try lower.')
        }
        else if (userGuess < numberToGuess) {
            alert('Try higher')
        }
        this.setState({
            guesses: this.state.guesses.concat([userGuess + " "]),
            guessesLeft: this.state.guessesLeft -1
        })
    },
    componentDidMount: function() {
        this._startGame()
    },
    render: function() {
        
        if (this.state.gameStatus === "win") {
            return (
                <div>
                    <p>You win!</p>
                    <button onClick={this._startGame}>restart</button>
                </div>
            )
        }
        else if (this.state.guessesLeft > 0) {
            return (
            <div>
                <input ref="userGuess" type="text"/>
                <button onClick={this._userGuesses}>GUESS</button>
                <button onClick={this._startGame}>NEW GAME</button>
                <p>You guessed: {this.state.guesses}</p>
                <p>You have {this.state.guessesLeft} guesses left.</p>
            </div>
            )
        }
        else {
            return (
                <div>
                    <p>You loose.</p>
                    <button onClick={this._startGame}>restart</button>
                </div>
            )
        }
    }
})

module.exports = NumberGuessing;