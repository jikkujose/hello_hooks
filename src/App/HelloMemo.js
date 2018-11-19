import React, { memo } from "react"

function HelloMemo({ name }) {
  return (
    <div className="ml3-ns pa3 white bg-black-80 sans-serif br2">
      <div className="">{`Memoized function by ${name}`}</div>
    </div>
  )
}

export default memo(HelloMemo)
