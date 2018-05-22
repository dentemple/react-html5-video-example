import React from "react"

import NavButton from "./NavButton"

const HomeText = () => (
  <main>
    <p className="App-intro">Press the button below to begin</p>
    <NavButton to="/video">Click Here to Load Video</NavButton>
  </main>
)

export default HomeText
