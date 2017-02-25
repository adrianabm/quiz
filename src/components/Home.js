import React, { Component, PropTypes } from 'react'
import Quiz from '../components/Quiz'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import setCurrentUser from '../actions/set_current_user'

class Home extends Component {
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
        <div className="panel-body">
          <p>Please enter your name before starting the quiz.</p>
          <form
            ref="userForm"
            onSubmit={ this.handleSubmit.bind(this) }>
            <input
              type="text"
              ref="name"
              name="name"
              placeholder="Your name here" />
            <button
              type="submit"
              className="button"
              to={ `/quiz` }>Yay! Let's start it!
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, { setCurrentUser })(Home)
