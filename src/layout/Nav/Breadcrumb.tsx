import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { detailBread } from '../../utils/detailData'

const Breadcrumbs: React.FC = () => {
  const location = useLocation()
  const [ pathInfo, setPathInfo ] = useState<any>({ title: 'HOME', path: '/home/children', fatherPath: '/home', fatherTitle: 'ARTICLE' })

  useEffect(() => {
    setPathInfo(detailBread(location.pathname))
    console.log(pathInfo)
  }, [location.pathname])

  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/home/article">Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={pathInfo.fatherPath}>{ pathInfo.fatherTitle }</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>{ pathInfo.title }</Breadcrumb.Item>
    </Breadcrumb>
  )
};

export default Breadcrumbs;