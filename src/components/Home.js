import React, { Component, PropTypes } from 'react'
import Quiz from '../components/Quiz'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import setCurrentUser from '../actions/set_current_user'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = { name: '' }
  }

  onInputChange(event) {
    this.setState({ name: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    const { setCurrentUser } = this.props
    let name = this.refs.name.value

    const userName = {
      name
    }
    setCurrentUser(userName)
    browserHistory.push('/quiz')
  }

  render() {
    return (
      <div className="panel">
        <div className="panel-header">
          <h3>What are your favorite things?</h3>
          <p>Check how many points you can earn with this awesome quiz!</p>
        </div>
        <div className="panel-body home">
          <p>Please enter your name before starting the quiz.</p>
          <form
            autoComplete="off"
            ref="userForm"
            onSubmit={ this.handleSubmit.bind(this) }>
            <input
              value = { this.state.name }
              onChange={ this.onInputChange.bind(this) }
              type="text"
              className="form-input"
              ref="name"
              name="name"
              placeholder="Your name here" />
            <div className="button-holder">
            <input
                value="Yay! Let's start it!"
                title="Yay! Let's start it!"
                disabled={(this.state.name === '')}
                type="submit"
                className="button"
                to={ `/quiz` } />
              </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, { setCurrentUser })(Home)
