import React from 'react';

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
          <article key={index}>
            { article.urlToImage &&
              <div className='img-wrap'>
                <img align='left' src={article.urlToImage}/>
              </div>
            }
            <div>
              <div className='title'>
                <a href={article.url}>{article.title}</a>
                <div className='author'>
                  <span>{article.author}</span>
                </div>
              </div>
              <p>{article.description}</p>
            </div>
          </article>
        )}
      </div>
    );
  }
}

export default News;
