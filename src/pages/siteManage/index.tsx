import AppHeader from '@/components/appHeader';
import { Space, Swiper, Switch, Tabs } from 'antd-mobile';
import { SwiperRef } from 'antd-mobile/es/components/swiper';
import { useRef, useState } from 'react';
import styles from './index.less';

const defData = [
  {
    url: 'https://www.zhihu.comaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    checked: true,
  },
  {
    url: 'https://www.zhihu.com',
    checked: true,
  },
  {
    url: 'https://www.zhihu.com',
    checked: false,
  },
  {
    url: 'https://www.zhihu.com',
    checked: false,
  },
];

export default function SiteManage() {
  const ref = useRef<SwiperRef>(null);
  const [data, setData] = useState(defData);

  const changeData = (val: boolean, index: number) => {
    let copyData = JSON.parse(JSON.stringify(data));
    copyData[index].checked = val;
    setData(copyData);
  };

  const changeTab = (key: string) => {
    if (key === '1') {
      ref.current?.swipePrev();
    } else {
      ref.current?.swipeNext();
    }
  };
  return (
    <div className={styles.container}>
      <AppHeader title="网址管理" />
      <Tabs
        activeLineMode="full"
        className={styles.tabs}
        onChange={(key: string) => {
          changeTab(key);
        }}
      >
        <Tabs.Tab title="白名单" key="1" />
        <Tabs.Tab title="黑名单" key="2" />
      </Tabs>
      <Swiper allowTouchMove={false} ref={ref} indicator={() => null}>
        <Swiper.Item key={1}>
          <Space
            block
            direction="vertical"
            className={styles.body}
            style={{ '--gap': '16px' }}
          >
            {data.map((item, index) => {
              return (
                <Space
                  block
                  align="center"
                  justify="between"
                  className={styles.item}
                  key={index}
                >
                  <div>{item.url}</div>
                  <Space block align="center">
                    <div
                      className={`${styles.allowText} ${
                        item.checked || styles.prohibitText
                      }`}
                    >
                      {item.checked ? ' 允许' : '禁止'}
                    </div>
                    <Switch
                      checked={item.checked}
                      onChange={(val: boolean) => {
                        changeData(val, index);
                      }}
                      className={styles.switchBtn}
                    />
                  </Space>
                </Space>
              );
            })}
          </Space>
        </Swiper.Item>
        <Swiper.Item key={2}>
          <Space
            block
            direction="vertical"
            className={styles.body}
            style={{ '--gap': '16px' }}
          >
            {data.map((item, index) => {
              return (
                <Space
                  block
                  align="center"
                  justify="between"
                  className={styles.item}
                  key={index}
                >
                  <div>{item.url}</div>
                  <Space block align="center">
                    <div
                      className={`${styles.allowText} ${
                        item.checked || styles.prohibitText
                      }`}
                    >
                      {item.checked ? ' 允许' : '禁止'}
                    </div>
                    <Switch
                      checked={item.checked}
                      onChange={(val: boolean) => {
                        changeData(val, index);
                      }}
                      className={styles.switchBtn}
                    />
                  </Space>
                </Space>
              );
            })}
          </Space>
        </Swiper.Item>
      </Swiper>
    </div>
  );
}
