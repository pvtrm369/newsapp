import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
     let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width:"18rem"}}>
          <img src={imageUrl?imageUrl:"https://image.email.samsungdevelopers.com/lib/fe3611747364047f751577/m/1/4c45577e-62e6-47f2-a8f1-e88538b3fd0a.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"> {title}....</h5>
              <p className="card-text">{description}....</p>
              <a href={newsUrl} className="btn btn-dark">Read More</a>
            </div>
        </div>  
      </div>
    )
  }
}

export default NewsItem
