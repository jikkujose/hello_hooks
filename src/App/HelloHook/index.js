import React, { useState } from "react"

export function HelloHook() {
  const [count, setCount] = useState(0)

  return (
    <div className="ml2 pa3 bg-black-80 white sans-serif br2">
      <div className="">Hooks!</div>
      <div className="bg-black-10 fv w3 cv mt2 pv2">
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
