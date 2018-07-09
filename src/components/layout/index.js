import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RGL, {
  WidthProvider,
} from 'react-grid-layout';
import ResizeDetector from 'react-resize-detector';

import { map } from 'lodash';

import styles from './styles.css';

const ReactGridLayout = WidthProvider(RGL);

class LayoutView extends Component {
  static propTypes = {
    /** 可视化图形的布局数据 */
    layouts: PropTypes.arrayOf(PropTypes.shape({
      /** 元素布局位置 */
      position: PropTypes.shape({
        /** 元素宽度 */
        w: PropTypes.number.isRequired,
        /** 元素高度 */
        h: PropTypes.number.isRequired,
        /** 元素X坐标 */
        x: PropTypes.number.isRequired,
        /** 元素Y坐标 */
        y: PropTypes.number.isRequired,
        /** 元素标识 */
        i: PropTypes.string.isRequired,
      }).isRequired,
      /** 元素内容 */
      dom: PropTypes.element.isRequired,
    })),
    /** 可视化图形的元素位置发生变化的回调函数 */
    onLayoutChange: PropTypes.func,
  }
  static defaultProps = {
    layouts: [],
  }
  /**
   * 新增一个布局
   * 
   * @param {Number} length 已存在的布局元素个数
   */
  static increase(length = 0) {
    const i = length, w = 4, h = 2;
    return {
      position: {
        x: Number((i * w) % 12),
        y: Math.floor(i / 6) * h,
        w: Number(w),
        h: Number(h),
        i: i.toString(),
      },
    };
  }
  _items() {
    const { layouts } = this.props;
    return map(layouts, (item, i) => {
      const { position, dom } = item;
      const InternalComponent = (props) => {
        return React.cloneElement(dom || <div />, {
          ...props,
          position: position,
        });
      };
      return (
        <section className={styles['layout']} key={i} data-grid={position}>
          <ResizeDetector handleHeight={true} handleWidth={true}>
            <InternalComponent />
          </ResizeDetector>
        </section>
      );
    });
  }
  render() {
    this._items = this._items.bind(this);
    const { onLayoutChange } = this.props;
    return (
      <ReactGridLayout onLayoutChange={onLayoutChange}>{this._items()}</ReactGridLayout>
    );
  }
}

export default LayoutView;
