import './index.css';

import { App } from './components';
import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ru_RU from 'antd/locale/ru_RU';

ReactDOM.createRoot(document.getElementById('root')).render(
   <ConfigProvider locale={ru_RU}>
      <App />
   </ConfigProvider>
);
