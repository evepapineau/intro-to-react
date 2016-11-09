var React = require('react')
var $ = require('jquery')

var GithubProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired
    },
    getInitialState: function() {
        return {
            
        }
    },
    componentDidMount: function() {
        this.fetchData();
    },
    componentDidUpdate: function(prevProps) {
        if (prevProps.username !== this.props.username) {
            this.fetchData()
        }
    },
    fetchData: function() {
        $.getJSON('https://api.github.com/users/' + this.props.username).then(function(res) {
            this.setState({
                user: res
            })
        }.bind(this));
    },
    render: function() {
        if (!this.state.user) {
            return (
                <div>LOADING</div>
            )
        }
        else {
            return (
                <div className="github-user">
                  <img className="github-user__avatar" src={this.state.user.avatar_url}/>
                  <div className="github-user__info">
                    <p>{this.state.user.name}({this.state.user.login})</p>
                    <p>{this.state.user.bio}</p>
                  </div>
                </div>
            )
        }
    }
})

module.exports = GithubProfile;