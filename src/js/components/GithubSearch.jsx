var React = require('react')
var GithubSearchForm = require('./GithubSearchForm')
var GithubUser= require('./GithubProfile')

var GithubSearch = React.createClass({
  getInitialState: function() {
    return {};
  },
  _handleSearch: function(searchTerm) {
      this.setState({
          user: searchTerm
      })
  },
  render: function() {
    return (
      <div>
        <GithubSearchForm onSearch={this._handleSearch}/>
        {this.state.user ? <GithubUser username={this.state.user}/> : null}
      </div>
    );
  }
});

module.exports = GithubSearch;