import React from "react"
import { withRouter } from "react-router-dom"

const NavButton = withRouter(({ children, history, to }) => (
  <button
    onClick={() => {
      history.push(`${to}`)
    }}
  >
    {children}
  </button>
))

export default NavButton
