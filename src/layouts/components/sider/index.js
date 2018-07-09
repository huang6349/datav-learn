import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Menu,
  Icon,
} from 'antd';

import styles from './styles.css';

class SiderView extends Component {
  static propTypes = {
    pathname: PropTypes.string.isRequired,
    width: PropTypes.number,
    onClick: PropTypes.func,
  }
  static defaultProps = {
    width: 240,
  }
  render() {
    const { pathname, width, onClick } = this.props;
    return (
      <Layout.Sider width={width}>
        <Menu className={styles['menu']} mode="inline" selectedKeys={[pathname]} onClick={onClick}>
          <Menu.Item key="/grid">
            <Icon type="profile" />&nbsp;布局模型
          </Menu.Item>
          <Menu.Item key="/echarts">
            <Icon type="pie-chart" />&nbsp;Echarts
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    );
  }
}

export default SiderView;
