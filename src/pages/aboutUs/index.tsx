import AppHeader from '@/components/appHeader';
import { Avatar, Space } from 'antd-mobile';
import { RightOutline } from 'antd-mobile-icons';
import styles from './index.less';

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <AppHeader title="关于我们" />
      <div className={styles.header}>
        <Avatar src="" className={styles.avatar} />
        <div className={styles.name}>麦田格助手</div>
        <div className={styles.version}>v1.0</div>
      </div>
      <Space block direction="vertical" className={styles.body}>
        <Space block align="center" justify="between" className={styles.item}>
          <div>用户服务协议</div>
          <RightOutline />
        </Space>
        <Space block align="center" justify="between" className={styles.item}>
          <div>隐私协议</div>
          <RightOutline />
        </Space>
      </Space>
    </div>
  );
}
