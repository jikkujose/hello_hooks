import React, { lazy, Suspense } from "react"

const MrDynamic = lazy(() => import("./MrDynamic.js"))

export function HelloSuspense() {
  return (
    <div className="sans-serif pa3 ml3-ns mb3 bg-black-80 white br2 w5">
      <div className="mb2">Dynamic Import!</div>
      <Suspense fallback={<div>loading</div>}>
        <MrDynamic />
      </Suspense>
    </div>
  )
}
