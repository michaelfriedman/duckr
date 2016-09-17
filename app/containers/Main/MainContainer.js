import React, { PropTypes } from 'react'
import { Navigation } from 'components'
import { connect } from 'react-redux'
import { container, innerContainer } from './styles.css'

const MainContainer = React.createClass({
  propTyes: {
    isAuthed: PropTypes.bool.isRequired
  },
  render () {
    console.log('Props', this.props)
    return (
      <div className={container}>
        <Navigation isAuthed={this.props.isAuthed} />
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
})

export default connect(
  (state) => ({isAuthed: state.isAuthed})
)(MainContainer)
