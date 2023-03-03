import { lazy, ReactNode } from 'react'
import { lazyload } from "./tool"

const Layout = lazy(() => import('../layout/Layout'))
const Main = lazy(() => import('../view/main/main'))
const Home = lazy(() => import('../view/home/home'))
const Article = lazy(() => import('../view/home/article'))
const MainChildren = lazy(() => import('../view/main/mainChildren'))

const layout = {
  path: '/',
  element: lazyload(<Layout/>),
  children: [
    {
      path: '/home',
      title: 'HOME',
      children: [
        {
          path: '/home/article',
          title: 'ARTICLE',
          element: lazyload(<Article/>),
        },
        {
          path: '/home/children',
          title: 'INDEX',
          element: lazyload(<Home/>),
        }
      ],
    },
    {
      path: '/main',
      title: 'MAIN',
      children: [
        {
          path: '/main/index',
          title: 'ITEMS',
          element: lazyload(<Main/>),
        },
        {
          path: '/main/children',
          title: 'CHILDREN',
          element: lazyload(<MainChildren/>),
        }
      ],
    }
  ]
}

let breadcrumb:object[] = []

function detailBreadcrumb(children: any, bread: any):void {
  children.forEach((element: { title: string; path: string; children: any }, index: string | number) => {
    let item:any = element.children ? { title: element.title, path: element.path, children: [] } : { title: element.title, path: element.path }
    bread.push(item)
    if(element.children) {
      detailBreadcrumb(element.children, bread[index].children)
    }
  })
}

detailBreadcrumb(layout.children, breadcrumb)

export {
  layout,
  breadcrumb
}