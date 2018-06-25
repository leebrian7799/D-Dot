import React, { Component } from 'react';

class CommentBox extends React.Component {

  render (){
    return <div>
      <CommentList />
      <CommentForm />
    </div>;

  }
}

const CommentList = () => {
  return (
    <div className="commentList">

    </div>
  );
}

const CommentForm = () => {
  return (
    <div className="commentForm">
      
    </div>
  );
}

export default CommentBox;
