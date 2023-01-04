import { Space, Image } from 'antd-mobile';
import { useEffect, useState } from 'react';
import { request } from 'umi';
import styles from './index.less';

export default function AppList() {
  const [appList, serAppList] = useState([]);

  useEffect(() => {
    request('/api/getAppList', {
      method: 'get',
    }).then((res) => {
      serAppList(res.data);
    });
  }, []);

  return (
    <div className={styles.appList}>
      {appList.map((item: any, index) => {
        return (
          <div className={styles.item} key={index}>
            <Space block justify={'between'} align={'center'}>
              <Space block align={'center'}>
                <Image src={item.url} width={32} />
                <div className={styles.nameText}>{item.name}</div>
              </Space>
              <div className={styles.timeText}>{item.time}</div>
            </Space>
          </div>
        );
      })}
    </div>
  );
}
