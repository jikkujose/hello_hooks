import React, { Component } from "react"
import { HelloSuspense } from "./HelloSuspense"

export class App extends Component {
  render() {
    return (
      <div className="f ch bg-yellow">
        <div className="" style={{ width: 800 }}>
          <div className="f2 sans-serif fw2 pa3 mb2">
            Hello Hooks, SVG React Component & Suspsene
          </div>
          <div className="pa3">
            <HelloSuspense />
          </div>
        </div>
      </div>
    )
  }
}
