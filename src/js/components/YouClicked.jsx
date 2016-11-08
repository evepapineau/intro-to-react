var React = require('react');

var YouClicked = React.createClass({
    getInitialState: function() {
        return {
            timesButtonCount: 0,
            timesButtonParagraph: "You have not clicked the button.",
            timesButtonReset: 0,
            timesButtonResetParagraph: ""
        }
    },
    _onClick: function() {
        var buttonCount = this.state.timesButtonCount + 1;
        var buttonParagraph = this.state.timesButtonParagraph;
        if (buttonCount === 1) {
            buttonParagraph= "You clicked the button once."
        }
        else if (buttonCount === 2) {
            buttonParagraph= "You clicked the button twice."
        }
        else if (buttonCount >= 3) {
            buttonParagraph= `You clicked the button ${buttonCount} times.`
        }
        this.setState({
            timesButtonCount: buttonCount,
            timesButtonParagraph: buttonParagraph
        })
    },
    _onClickReset: function() {
        var buttonReset = this.state.timesButtonReset + 1;
        var buttonResetParagraph = this.state.timesButtonResetParagraph;
        if (buttonReset >=1) {
            buttonResetParagraph = `You clicked the reset button ${buttonReset} times.`
            
        } 
        this.setState({
            timesButtonReset: buttonReset,
            timesButtonParagraph: "You have not clicked the button.",
            timesButtonResetParagraph: buttonResetParagraph,
            timesButtonCount: 0
            
        })
    },
    render: function() {
        return (
            <div>
                <button onClick={this._onClick}>Click me!</button>
                <button onClick={this._onClickReset}>Reset me!</button>
                <p>{this.state.timesButtonParagraph}</p>
                <p>{this.state.timesButtonResetParagraph}</p>
            </div>
        )
    } 
})

module.exports = YouClicked;