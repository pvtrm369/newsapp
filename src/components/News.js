import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles= [
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Joel Khalili",
      "title": "Peter Todd Was ‘Unmasked’ As Bitcoin Creator Satoshi Nakamoto. Now He’s In Hiding",
      "description": "Peter Todd has gone underground after an HBO documentary named him as the creator of Bitcoin, Satoshi Nakamoto, whose real identity has long remained a mystery.",
      "url": "https://www.wired.com/story/peter-todd-was-unmasked-as-bitcoin-creator-satoshi-nakamoto-now-hes-in-hiding/",
      "urlToImage": "https://media.wired.com/photos/6716870e6874cb5feda0798e/191:100/w_1280,c_limit/102124-bitcoin-satoshi-an.jpg",
      "publishedAt": "2024-10-22T11:33:59Z",
      "content": "In the week before the documentary was released, online betting markets had Len Sassaman, a cryptographer who moved in similar online circles to Satoshi, as the most likely candidate to be revealed a… [+2075 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Andy Greenberg",
      "title": "Meet ZachXBT, the Masked Vigilante Tracking Down Billions in Crypto Scams and Thefts",
      "description": "He just untangled a $243 million bitcoin theft, what may be the biggest-ever crypto heist to target a single victim. And he has never shown his face.",
      "url": "https://www.wired.com/story/meet-zachxbt-243-million-crypto-theft/",
      "urlToImage": "https://media.wired.com/photos/671803d2124551b4eaed68ad/191:100/w_1280,c_limit/security_zachxbt_crypto_vigilante.jpg",
      "publishedAt": "2024-10-24T09:00:00Z",
      "content": "As ZachXBT has pursued that career as a crypto vigilante, he has also kept his mask firmly in place. Online, he appears only as his avatar, a kind of platypus cartoon figure in a detective's trench c… [+3865 chars]"
    }
  ]
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1

    }
  }
    async componentDidMount(){
      let url="https://newsapi.org/v2/everything?q=developers&apiKey=1e2e327727714ea0813ec2f5fe0e03a7&page=1"
       let data=await fetch(url);
       let parsedData=await data.json();
       console.log(parsedData);
       this.setState({articles: parsedData.articles})

  }
  handleNextClick= async ()=>{
      
        let url=`https://newsapi.org/v2/everything?q=developers&apiKey=1e2e327727714ea0813ec2f5fe0e03a7&page-${this.state.page+1}`
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({
            page:this.state.page + 1,
            articles:parsedData.articles
        })

      }
  
  handlePrevClick= async ()=>{
    let url=`https://newsapi.org/v2/everything?q=developers&apiKey=1e2e327727714ea0813ec2f5fe0e03a7&page-${this.state.page-1}`
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({
        page:this.state.page - 1,
        articles:parsedData.articles
    })
  }

  render() {
    return (
      <div className="container my-3">
        <h2> Code-Shorts</h2>
              <div className="row">
                  {this.state.articles.filter(article => 
              !article.title?.includes("[Removed]") &&
              !article.description?.includes("[Removed]") &&
              !article.source?.name.includes("[Removed]")
            ).map((element)=>{
                     return <div className="col-md-4" key={element.url}>
                    <NewsItem     title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,88):""}   imageUrl={element.urlToImage}
                    newsUrl={element.url} />
                    </div>
                    
                  })}
               
            </div>
            <div className="container  d-flex justify-content-between ">
            <button  disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Prev</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>

            </div>
      </div>
    )
  }
}

export default News
