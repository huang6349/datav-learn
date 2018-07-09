import React from 'react';
import {
  Layout,
} from 'antd';
import { connect } from 'dva';

import { map } from 'lodash';

import { GridLayout, GridLayoutEcharts } from '../../components';

import styles from './styles.css';

function EchartsPage({ dispatch, echarts }) {
  const { layouts } = echarts;
  return (
    <Layout className={styles['layout']}>
      <Layout.Content>
        <GridLayout layouts={map(layouts, (item, i) => {
          item.dom = <GridLayoutEcharts option={item['echarts']} />;
          return item;
        })}></GridLayout>
      </Layout.Content>
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    echarts: state['echarts'],
  };
}

export default connect(mapStateToProps)(EchartsPage);
