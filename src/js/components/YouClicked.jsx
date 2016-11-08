var React = require('react');

var YouClicked = React.createClass({
    getInitialState: function() {
        return {
            timesButtonCount: 0,
            timesButtonParagraph: "You have not clicked the button."
        }
    },
    _onClick: function() {
        var buttonCount = this.state.timesButtonCount + 1;
        var buttonParagraph = this.state.timesButtonParagraph;
        if (buttonCount ===1) {
            buttonParagraph= "You clicked the button once."
        }
        else if (buttonCount ===2) {
            buttonParagraph= "You clicked the button twice."
        }
        else if (buttonCount >=3) {
            buttonParagraph= `You clicked the button ${buttonCount} times.`
        }
        this.setState({
            timesButtonCount: buttonCount,
            timesButtonParagraph: buttonParagraph
        })
    },
    render: function() {
        return (
            <div>
                <button onClick={this._onClick}>Click me!</button>
                <p>{this.state.timesButtonParagraph}</p>
            </div>
        )
    } 
})

module.exports = YouClicked;