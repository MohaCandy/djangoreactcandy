import React, { Component } from 'react'

import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.xsrfCookieName = "csrftoken"

export default class ArticleForm extends Component {

    state = {
        title: '',
        content: ''
    }

    titleHandler = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    contentHandler = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    submitHandler = (event, action, articleID) => {
        //add these info as new article to the database
        event.preventDefault()

        const newArticle = {
            title: this.state.title,
            content: this.state.content
        }
        console.log(newArticle)
        // axios.post('http://127.0.0.1:8000/api/', {
        //     title: this.state.title,
        //     content: this.state.content
        // })
        switch (action) {
            case "post":
                axios({
                    method: "post",
                    url: "http://127.0.0.1:8000/api/",
                    data: newArticle,
                    headers: { "Content-Type": "application/json" }
                })
                    .then(res => console.log(res))
                    .catch(e => console.log(e))
                this.setState({
                    title: '',
                    content: ''
                })
                break
            case "put":
                axios({
                    method: "put",
                    url: `http://127.0.0.1:8000/api/${articleID}/`,
                    data: newArticle,
                    headers: { "Content-Type": "application/json" }
                })
                    .then(res => console.log(res))
                    .catch(e => console.log(e))
                this.setState({
                    title: '',
                    content: ''
                })
                break
            default:
                console.log("dd")
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.submitHandler(event, this.props.action, this.props.articleID)}>
                    <label>title</label>
                    <input placeholder="Title" value={this.state.title} onChange={this.titleHandler} />

                    <label>Content</label>
                    <input placeholder="Title" value={this.state.content} onChange={this.contentHandler} />

                    <button type="submit" htmlType="submit">{this.props.btn}</button>
                    <br />
                    <br />
                </form>
            </div >
        )
    }
}

