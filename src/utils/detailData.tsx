import { breadcrumb } from '../router/layout'

function detailBread(path: string) {
  let pagePath = path.split('/')[1]
  let arr:any = breadcrumb.filter((item:any) => {
    return item.path == `/${pagePath}`
  })
  console.log(arr)
  let breadInfo = { ...getChildrenPath(arr[0].children, path), fatherPath:arr[0].children[0].path, fatherTitle: arr[0].title  }
  return breadInfo
}

function getChildrenPath(arr:any, path: string):object {
  let childrenPath = arr.filter((item: any) => {
    return path == item.path
  })
  return childrenPath[0]
}

export {
  detailBread
}