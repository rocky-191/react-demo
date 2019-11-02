import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
  };
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {
    return (
      <div className="comment-list">
        {this.props.comments.map (comment => {
          return <CommentItem key={comment.author} comment={comment} />;
        })}
      </div>
    );
  }
}

export default CommentList;
