import React from 'react';
import { Link } from 'react-router-dom';
import CommentBox from '../photo/comments_form/comment';

const FeedItemContainer = (props) => {
  if (props.photo){
    let authorName = props.photo.author;
    return (
      <div className="feed-item"  onClick={props.displayPhoto}>
          <img src={props.photo.image} className="photo"></img>
          <div className="feed-item-description">
            <div>{authorName}</div>
            <p className="photo-title">{props.photo.title}</p>
            <p className="description">{props.photo.description}</p>
          </div>
      </div>
    )
  } else {
    return <div>
              <img src={event.target.src}  className = "modalImagge"/>
              <p>{event.path[1].children[1].children[2].textContent}</p>
              <CommentBox />
            </div>
  }
};


export default FeedItemContainer;
