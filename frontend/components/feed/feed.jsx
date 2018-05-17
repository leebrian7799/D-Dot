import React from 'react';
import FeedItemContainer from './feed_item_container';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchUser(this.props.sessionUser.username);
    this.props.fetchAllPhotos();
  }


  render() {
    let that = this;
    let allPhotos;
    if (that.props.photos.length) {
      allPhotos = that.props.photos.map( (photo, idx) => {
        return (
          <div key={idx} >
            <img src={`${photo.image}`}></img>
          </div>
        );
      }).reverse();
    }
    return (
      <div>
        {allPhotos}
      </div>
    );
    //
    //
    // if (this.props.location.pathname === '/' || this.props.location.pathname === '/discover') {
    //   return (
    //     <div id='discover'>
    //       {allPhotos}
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div id="feed">
    //       {allPhotos}
    //     </div>
    //   );
    // }
  }
}

export default Feed;
