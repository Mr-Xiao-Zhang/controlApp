import AppHeader from '@/components/appHeader';
import { SearchBar, Space, Switch } from 'antd-mobile';
import styles from './index.less';

export default function PluginManage() {
  return (
    <div className={styles.container}>
      <AppHeader title="插件管理" />
      <div className={styles.header}>
        <SearchBar placeholder="搜索" style={{ '--background': '#ffffff' }} />
      </div>
      <Space block direction="vertical" className={styles.body}>
        <div className={styles.box}>
          <Space block justify="between" align="center" className={styles.item}>
            <div>网易有道词典-课程详情</div>
            <Space block align="center">
              <div className={styles.allowText}>允许</div>
              <Switch className={styles.switchBtn} />
            </Space>
          </Space>
        </div>
        <div className={styles.box}>
          <Space block justify="between" align="center" className={styles.item}>
            <div>网易有道词典-课程详情</div>
            <Space block align="center">
              <div className={styles.allowText}>允许</div>
              <Switch className={styles.switchBtn} />
            </Space>
          </Space>
          <Space block justify="between" align="center" className={styles.item}>
            <div>网易有道词典-课程详情</div>
            <Space block align="center">
              <div className={styles.allowText}>允许</div>
              <Switch className={styles.switchBtn} />
            </Space>
          </Space>
        </div>
      </Space>
    </div>
  );
}
