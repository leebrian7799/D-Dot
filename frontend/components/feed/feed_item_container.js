import React from 'react';
import { Link } from 'react-router-dom';

const FeedItemContainer = (props) => {
  let authorName = props.photo.author;

  return (
    <div className="feed-item">
      <div className="feed-item-header">
        <div className="feed-item-header-profile-photo">
          <div
            className="feed-item-header-profile-photo-image"
            style={{ backgroundImage: `url(${props.photo.authorProfilePhoto})`}}
            >
          </div>
        </div>
        <Link to={`/${props.photo.author}`}>{authorName}</Link>
      </div>

      <div className="feed-item-image">
        <Link to={`/photos/${props.photo.id}`}>
          <img src={props.photo.image}></img>
        </Link>
      </div>

      <div className="feed-item-description">
        <p>{props.photo.title}</p>
        <p>{props.photo.description}</p>
      </div>
    </div>
  );
};

// <div className="feed-item">
//   <img src={`${props.photo.image}`} />
// </div>


export default FeedItemContainer;
