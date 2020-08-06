import React, { Component } from 'react'
import axios from 'axios'
import ArticleForm from '../components/form'
import { Card } from 'antd'

export default class ArticleListView extends Component {

    state = {
        article: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(response => {
                this.setState({
                    article: response.data
                })
                console.log(response.data)
            })
    }

    deleteHandler = (event) => {
        const articleID = this.props.match.params.articleID
        axios.delete(`http://127.0.0.1:8000/api/${articleID}`)
            .then(response => {
                this.setState({
                    article: response.data
                })
                console.log(response.data)
            })
    }

    render() {
        const articleID = this.props.match.params.articleID
        return (
            <div>
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content}</p>
                </Card>
                <ArticleForm
                    articleID={articleID}
                    btn="Update"
                    action="put"
                />
                <form onSubmit={this.deleteHandler}>
                    <button>delete</button>
                </form>
            </div>
        )
    }
}
