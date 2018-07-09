import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

class LayoutEchartsView extends Component {
  static propTypes = {
    option: PropTypes.object,
  }
  static defaultProps = {
    option: {},
  }
  render() {
    const { option, height, width } = this.props;
    return (
      <ReactEcharts option={option} style={{ height: height, width: width }} />
    );
  }
}

export default LayoutEchartsView;
