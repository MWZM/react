import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Logo from './Logo'
import { items, rootSubmenuKeys } from './MenuItem'

import '../style/sidebar.scss'


const Sidebar: React.FC = () => {
  const [current, setCurrent] = useState('article');
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
        mode="inline"
        theme="dark"
        style={{height: '100%'}}
        defaultOpenKeys={['/main']}
        openKeys={openKeys}
        selectedKeys={[current]}
        items={items}
        inlineCollapsed={false}
        onClick={onClick}
        onOpenChange={onOpenChange}
      />
    </div>
  );
};

export default Sidebar;