// Higher order component (HOC) - a component that renders
// other components. The goal/purpose is to re-use code
  // Render hijacking
  // Prop manipulation
  // Abstract state

import React from 'react'
import { render } from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info, please don't share</p> }
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated && <WrappedComponent {...props} />}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)

const AuthInfo = requireAuthentication(Info)

render(<AuthInfo isAuthenticated={false} info='These are the details' />, document.getElementById('app'))
