import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import CustomLayout from './container/Layout'
// import ArticleListView from './container/ArticleListView'

import { BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from './baseroutes'



function App() {
  return (
    <div className="App">
      <Router>
        <CustomLayout >

          <BaseRouter />
        </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
