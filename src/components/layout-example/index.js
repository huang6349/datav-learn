import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LayoutExampleView extends Component {
  static propTypes = {
    message: PropTypes.string,
  }
  static defaultProps = {
    message: '无'
  }
  render() {
    const { message, height, width } = this.props;
    return (
      <section>
        <span>{`当前DOM：宽度[${width}px], 高度[${height}]`}</span>
        <br />
        <span>{`组件传递消息：${message}`}</span>
      </section>
    );
  }
}

export default LayoutExampleView;
