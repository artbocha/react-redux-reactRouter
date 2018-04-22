import React from 'react';
import Article from '../components/article';

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    const url = 'https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=f22bcc2fb9a54185b76491b9c353d894';
    fetch(url)
      .then(res => res.json())
      .then(el => this.setState({ articles: el.articles }));
  }

  render() {
    return (
      <div>
        <div className='news header'>
          <h1>News</h1>
        </div>
        { this.state.articles.map((article, index) =>
          <Article key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            author={article.author}
            urlToImage={article.urlToImage}
          />
        )}
      </div>
    );
  }
}

export default News;
