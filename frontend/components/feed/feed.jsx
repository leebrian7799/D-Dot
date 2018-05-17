import React from 'react';
import FeedItemContainer from './feed_item_container';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPhotos();
  }

  render() {
    let that = this;
    let allPhotos;
    if (that.props.photos.length) {
      allPhotos = that.props.photos.map( (photo, idx) => {
        return (
          <div key={idx} className="feed-item-container">
              <FeedItemContainer photo={photo} />
          </div>
        );
      }).reverse();
    }

    return (
      <div>
        { allPhotos }
      </div>
    );
  }
}

export default Feed;
