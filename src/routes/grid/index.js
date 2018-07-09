import React from 'react';
import {
  Layout,
} from 'antd';
import { connect } from 'dva';

import { map } from 'lodash';

import { GridLayout, GridLayoutExample } from '../../components';

import styles from './styles.css';

function GridPage({ dispatch, grid }) {
  const { layouts } = grid;
  return (
    <Layout className={styles['layout']}>
      <Layout.Content>
        <GridLayout layouts={map(layouts, (item, i) => {
          item.dom = <GridLayoutExample message={`元素序号：${i}`} />;
          return item;
        })} isDesign={true}></GridLayout>
      </Layout.Content>
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    grid: state['grid'],
  };
}

export default connect(mapStateToProps)(GridPage);
