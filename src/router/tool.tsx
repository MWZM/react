import { ReactNode, Suspense } from 'react'

import Loading from '../components/loading'

// 避免 闪屏问题
function lazyload(children: ReactNode):ReactNode {
  return (
    <Suspense fallback={<Loading></Loading>}>
      { children }
    </Suspense>
  )
}

export {
  lazyload
}