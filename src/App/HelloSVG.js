import React from "react"
import { ReactComponent as Logo } from "./r.svg"

export function HelloSVG() {
  return (
    <>
      <div className="sans-serif white pa3 bg-black-80 w5 br2">
        SVG Element as React Component!
        <Logo />
      </div>
    </>
  )
}
