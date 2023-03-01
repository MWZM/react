import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import layout from '../../router/layout';
import Logo from './Logo'

import '../style/sidebar.scss'
import { useLocation, useNavigate } from 'react-router-dom';

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

layout.children.forEach(item => {
  let it = getItem(item.path, item.path == '/' ? item.path : `/${item.path}`)
  items.push(it)
  rootSubmenuKeys.push(item.path)
})


const Sidebar: React.FC = () => {
  const [current, setCurrent] = useState('/');
  const [openKeys, setOpenKeys] = useState(['/home']);

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {

    setCurrent(location.pathname)

  }, [location.pathname])

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    navigate(e.key)
  };

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div className='menu'>
      <Logo />
      <Menu
        className='menu_item'
        style={{height: '100%'}}
        onClick={onClick}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        defaultOpenKeys={['/']}
        selectedKeys={[current]}
        mode="inline"
        theme="dark"
        items={items}
      />
    </div>
  );
};

export default Sidebar;