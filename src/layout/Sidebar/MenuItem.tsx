import type { MenuProps } from 'antd';
import layout from '../../router/layout';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = []
let rootSubmenuKeys:string[] = []


for(let route of layout.children) {
  let it = null
  if(route.path !== '/') {
    if(route.children && route.children.length) {
      it =  getItem(route.title, `/${route.path}`, null , detailChildren(route.children))
    }else {
      it = getItem(route.title, `/${route.path}`)
    }
    items.push(it)
    rootSubmenuKeys.push(route.path)
  }
}

function detailChildren(children: any) {
  let childrenArr = []

  for(let item of children) {
    childrenArr.push(getItem(item.title, `/${item.path}`))
  }
  return childrenArr
}

console.log(items)

export {
  items,
  rootSubmenuKeys
}
