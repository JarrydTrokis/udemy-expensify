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
  return (props) => {
    const { isAdmin, info } = props
    return (
      <div>
        { isAdmin && <p>This is private info, please don't share</p> }
        <WrappedComponent info={info} />
      </div>
    )
  }
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

// This is an even higher order component
const Overall = () => {
  return (
    <div>
      <AuthInfo isAuthenticated info='test' />
      <AdminInfo isAdmin info='this is the admin block' />
    </div>
  )
}

// render(<AuthInfo isAuthenticated={true} info='These are the details' />, document.getElementById('app'))

render(<Overall isAdmin info='Talk to me' />, document.getElementById('app'))
