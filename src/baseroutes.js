import React from 'react'
import { Route } from 'react-router-dom'
import ArticleList from './container/ArticleListView'
import ArticleDetailView from './container/ArticleDetailView'
import Test from './components/test'
function BaseRouter() {
    return (
        <div>
            <Route exact path='/' component={ArticleList} />
            <Route exact path='/:articleID' component={ArticleDetailView} />
            <Route exact path='/test' component={Test} />
        </div>
    )
}

export default BaseRouter
