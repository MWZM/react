import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './style/root.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// 常用路由模式有 BrowserRouter 与 HashRouter 模式
// BrowserRouter 为 history 模式下的路由
// HashRouter 为 hash 模式下的路由
// 两者展示区别 hash 模式下 url有 #， history 模式下没有 #

/**
 * @BrowserRouter 进行组件跳转是可以传递任意参数实现组件通信
 * @HashRouter 不能（除非手动拼接 URL 字符串），因此一般配合 Redux 使用
 * 
 * @HashRouter 相当于锚点定位，因此不论 # 后面的路径如何变化，请求的相当于就是 # 之前的页面。可以很容易进行前后端不分离部署
 * 也就是把前端打包文件放到服务器的 public 或者 static 中 因此请求的就是 ip地址：端口/#/xxxx  因此氢气路径为/
 * 
 * @BrowserRouter 模式下请求链接都是ip地址：端口/xxx/xxxx
 */

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);