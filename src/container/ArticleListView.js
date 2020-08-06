import React, { Component } from 'react'
import axios from 'axios'
import Article from '../components/Article'
import ArticleForm from '../components/form'
// const listData = [];
// for (let i = 0; i < 23; i++) {
//     listData.push({
//         href: 'https://ant.design',
//         title: `ant design part ${i}`,
//         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//         description:
//             'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//         content:
//             'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//     });
// }


export default class ArticleListView extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(response => {
                this.setState({
                    articles: response.data
                })
                console.log(response.data)
            })
    }

    render() {
        return (
            <div>

                <Article data={this.state.articles} />
                <ArticleForm btn="Add new" action="post" articleID={null} />
            </div>
        )
    }
}
