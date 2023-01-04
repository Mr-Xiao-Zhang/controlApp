import AppHeader from '@/components/appHeader';
import AppManageItem from '@/components/appManageItem';
import SelectTimePopup from '@/components/selectTimePopup';
import { Space, SwipeAction, Tabs } from 'antd-mobile';
import Swiper, { SwiperRef } from 'antd-mobile/es/components/swiper';
import { useRef, useState } from 'react';
import styles from './index.less';

export default function AppManage() {
  const ref = useRef<SwiperRef>(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const changeTab = (key: string) => {
    ref.current?.swipeTo(Number(key) - 1);
  };

  return (
    <div className={styles.container}>
      <AppHeader title="应用管理" />
      <Tabs
        activeLineMode="full"
        onChange={(key: string) => {
          changeTab(key);
        }}
      >
        <Tabs.Tab title="全部应用" key="1" />
        <Tabs.Tab title="允许使用" key="2" />
        <Tabs.Tab title="待审批" key="3" />
      </Tabs>
      <Swiper allowTouchMove={false} ref={ref} indicator={() => null}>
        <Swiper.Item key={1}>
          <Space block direction="vertical" className={styles.body}>
            <AppManageItem
              leftText="这是应用名称"
              rightText="不限制"
              onClick={() => {
                setPopupVisible(true);
              }}
            />
            <AppManageItem
              leftText="这是应用名称"
              rightText="2小时37分钟"
              onClick={() => {
                setPopupVisible(true);
              }}
            />
          </Space>
        </Swiper.Item>
        <Swiper.Item key={2}>
          <Space block direction="vertical" className={styles.body}>
            <AppManageItem leftText="这是应用名称" rightText="不限制" />
            <AppManageItem leftText="这是应用名称" rightText="2小时37分钟" />
          </Space>
        </Swiper.Item>
        <Swiper.Item key={3}>
          <Space block direction="vertical" className={styles.body}>
            <AppManageItem leftText="这是应用名称" isApprovel />
            <AppManageItem leftText="这是应用名称" isApprovel />
          </Space>
        </Swiper.Item>
      </Swiper>

      {/* <Tabs activeLineMode="full" className={styles.tabs}>
        <Tabs.Tab title="全部应用" key="1">
          <Space block direction="vertical" style={{ '--gap': '16px' }}>
            <AppManageItem
              leftText="这是应用名称"
              rightText="不限制"
              onClick={() => {
                setPopupVisible(true);
              }}
            />
            <AppManageItem
              leftText="这是应用名称"
              rightText="2小时37分钟"
              onClick={() => {
                setPopupVisible(true);
              }}
            />
          </Space>
        </Tabs.Tab>
        <Tabs.Tab title="允许使用" key="2">
          <Space block direction="vertical" style={{ '--gap': '16px' }}>
            <AppManageItem leftText="这是应用名称" rightText="不限制" />
            <AppManageItem leftText="这是应用名称" rightText="2小时37分钟" />
          </Space>
        </Tabs.Tab>
        <Tabs.Tab title="待审批" key="3">
          <Space block direction="vertical" style={{ '--gap': '16px' }}>
            <AppManageItem leftText="这是应用名称" isApprovel />
            <AppManageItem leftText="这是应用名称" isApprovel />
          </Space>
        </Tabs.Tab>
      </Tabs> */}
      <SelectTimePopup
        title="设置时间"
        visible={popupVisible}
        onFinish={(res) => {
          setPopupVisible(false);
        }}
        onClose={() => {
          setPopupVisible(false);
        }}
      />
    </div>
  );
}
