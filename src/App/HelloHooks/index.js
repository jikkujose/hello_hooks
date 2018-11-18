import React, { useState } from "react"
import { useDocumentTitle } from "./hooks"

export function HelloHooks() {
  const [count, setCount] = useState(0)
  useDocumentTitle(count)

  return (
    <div className="ml3-ns pa3 bg-black-80 white sans-serif br2 w5">
      <div className="">Hooks!</div>
      <div className="bg-black-10 f jb w4 cv mt2 pv2">
        <div
          className="f2 code bg-white-10 usn pa1 br-pill pointer hover-bg-white-20"
          onClick={() => setCount(count - 1)}
        >
          -
        </div>
        <div className="code f1 pv2">{count}</div>
        <div
          className="f2 code pa1 br-pill usn bg-white-10 pointer hover-bg-white-20"
          onClick={() => setCount(count + 1)}
        >
          +
        </div>
      </div>
    </div>
  )
}
