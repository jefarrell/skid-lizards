import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Tags from './Tags';

export default class ListItem extends Component {
  render() {
    const { node, tags } = this.props;
    return (
      // TODO
      <li>
        <p>
          {tags && <Tags tags={tags} />}
        </p>
        <Link to={node.uid}>{node.data.title.text}</Link>
      </li>
    );
  }
}

ListItem.propTypes = {
  node: PropTypes.object.isRequired,
  tags: PropTypes.array,
}
