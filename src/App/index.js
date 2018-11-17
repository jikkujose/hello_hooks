import React, { Component } from "react"
import { HelloSVG } from "./HelloSVG"
import { HelloSuspense } from "./HelloSuspense"

export class App extends Component {
  render() {
    return (
      <div className="f ch bg-yellow bb b--black-20">
        <div className="" style={{ width: 800 }}>
          <div className="f2 mt2 sans-serif fw2 pa3 mb2">
            Hello Hooks, SVG React Component, lazy & Suspsene
          </div>
          <div className="pa3 f">
            <HelloSVG />
            <HelloSuspense />
          </div>
        </div>
      </div>
    )
  }
}
