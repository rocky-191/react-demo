import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
  };
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {
    const {author, content} = this.props.comment;
    return (
      <div className="comment-item">
        <span className="avatar" />
        <span>{author}</span>
        <p>{content}</p>
      </div>
    );
  }
}

export default CommentItem;
