var React = require('react')

var SearchForm = React.createClass({
    propTypes: {
        onSearch: React.PropTypes.func
    },
    _handleSubmit: function(e) {
        e.preventDefault();
        var input = this.refs.userInput.value
        this.props.onSearch(input)
    },
    render: function() {
        return (
          <form onSubmit={this._handleSubmit}>
            <p>Enter a GitHub username:</p>
            <input ref="userInput" type="text" />
            <button>Go!</button>
          </form>
        );
    }
});

module.exports = SearchForm;