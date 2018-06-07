import React from 'react';
import { Link } from 'react-router-dom';

const FeedItemContainer = (props) => {

  if (props.photo){
    let authorName = props.photo.author;
    var pStyle = {
      color: 'gray',
      fontSize: '18px',
      padding: "3px",
    };
    return (
      <div className="feed-item">
        <div className="feed-item-header">
          <div className="feed-item-header-profile-photo">
            <div
              className="feed-item-header-profile-photo-image"
              >
            </div>
          </div>
          <div style={{padding: '5px'}}>{authorName}</div>
        </div>

        <div >
          <img src={props.photo.image} onClick={props.displayPhoto}></img>
        </div>


        <div className="feed-item-description">
          <p style={pStyle}>{props.photo.title}</p>
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
