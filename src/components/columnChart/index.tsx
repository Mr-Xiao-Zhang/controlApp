import { Column } from '@ant-design/charts';
import styles from './index.less';
import { Space, Image, SpinLoading, Button } from 'antd-mobile';
import loadingImg from '../../assets/loading.png';
import { useEffect, useState } from 'react';
import { request } from 'umi';
import { RightOutline } from 'antd-mobile-icons';

export default function ColumnChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getChartList();
  }, []);

  const getChartList = () => {
    request('/api/getChartList', {
      method: 'get',
    }).then((res) => {
      setTimeout(() => {
        setLoading(false);
        setData(res.data);
      }, 500);
    });
  };

  const clickRefreshBtn = () => {
    setData([]);
    setLoading(true);
    getChartList();
  };
  const config = {
    data,
    yAxis: {
      position: 'right' as any,
    },
    xField: 'type',
    yField: 'sales',
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '小时',
      },
    },
    columnStyle: {
      fill: '#8E9EEF',
    },
  };

  return (
    <div>
      <div className={styles.columnChart}>
        <Space
          block
          justify={'between'}
          align={'center'}
          className={styles.header}
        >
          <div>使用时长</div>
          <Space align="center">
            <Button
              fill="none"
              onClick={() => {
                clickRefreshBtn();
              }}
              className={styles.refreshBtn}
            >
              刷新
            </Button>
            {loading && (
              <Image
                src={loadingImg}
                width={16}
                className={styles.loadingImg}
              />
            )}
          </Space>
        </Space>
        <div className={styles.title}>1小时32分钟</div>
        <div className={styles.chart}>
          <Column {...config} />
        </div>
        <Space
          block
          justify={'between'}
          align={'center'}
          className={styles.footer}
        >
          <div>应用使用详情</div>
          <Space block justify={'between'} align={'center'}>
            <div>查看详情</div>
            <RightOutline fontSize={12} />
          </Space>
        </Space>
      </div>
    </div>
  );
}
