import React from 'react';
import { Link } from 'react-router-dom';

const FeedItemContainer = (props) => {

  if (props.photo){
    let authorName = props.photo.author;
    return (
      <div className="feed-item">
        <div className="feed-item-header">
          <div className="feed-item-header-profile-photo">
            <div
              className="feed-item-header-profile-photo-image"
              >
            </div>
          </div>
          <Link to={`/${props.photo.author}`}>{authorName}</Link>
        </div>

        <div >
          <img src={props.photo.image} onClick={props.displayPhoto}></img>
        </div>

        <div className="feed-item-description">
          <p>{props.photo.title}</p>
          <p>{props.photo.description}</p>
        </div>
      </div>
    )
  } else {
    return <div>
              <img src={event.target.src}  className = "modalImagge"/>
              <div> </div>
            </div>
  }



};


export default FeedItemContainer;
