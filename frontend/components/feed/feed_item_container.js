import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import CommentBox from '../photo/comments_form/comment';
=======
import CommentBox from '../photo/comments'
>>>>>>> 960d8d54eb68c2d0d4bc03752ed70797df38ce53

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
<<<<<<< HEAD
=======
              <div className="commentBox">
                We created a React div component! WOO!
              </div>
>>>>>>> 960d8d54eb68c2d0d4bc03752ed70797df38ce53
              <CommentBox />
            </div>
  }

};


export default FeedItemContainer;
