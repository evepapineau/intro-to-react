var React = require('react')

var CharacterLimit = React.createClass({
    getInitialState: function() {
        return {
            currentInput: "",
        }
    },
    _handleInput: function(event) {
        var value = event.target.value;
        var limit = this.props.limit;
        
        if (value.length <= limit) {
        this.setState({
            currentInput: value
        })
        }
    },
    render: function() {
        return (
            <div>
                <input type="text" value={this.state.currentInput} onInput={this._handleInput}></input>
                <p>{this.props.limit - this.state.currentInput.length}</p>
            </div>
        )
    }
})

module.exports = CharacterLimit;