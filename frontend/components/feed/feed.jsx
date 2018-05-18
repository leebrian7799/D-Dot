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
          <FeedItemContainer photo={photo} />
        );
      }).reverse();
    }

    return (
        <div className = "imageList">
          <div className = "index-panel">
            <div className = "imageList">
              <div className = "index-posts">
                <div className = "image-cards" >
                  {allPhotos}
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }
}



export default Feed;
