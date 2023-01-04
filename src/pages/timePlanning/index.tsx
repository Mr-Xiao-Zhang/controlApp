import AppHeader from '@/components/appHeader';
import SwitchTime from '@/components/switchTime';
import { CapsuleTabs, Space } from 'antd-mobile';
import styles from './index.less';

export default function timePlanning() {
  return (
    <div className={styles.container}>
      <AppHeader title="时间规划" />
      <div className={styles.header}>
        <CapsuleTabs>
          <CapsuleTabs.Tab title="周一" key="Monday" />
          <CapsuleTabs.Tab title="周二" key="Tuesday" />
          <CapsuleTabs.Tab title="周三" key="Wednesday" />
          <CapsuleTabs.Tab title="周四" key="Thursday" />
          <CapsuleTabs.Tab title="周五" key="Friday" />
          <CapsuleTabs.Tab title="周六" key="Saturday" />
          <CapsuleTabs.Tab title="周日" key="Sunday " />
        </CapsuleTabs>
      </div>
      <div className={styles.body}>
        <SwitchTime />
      </div>
      <div>
        <Space
          block
          justify={'center'}
          align={'center'}
          className={styles.footer}
        >
          保存
        </Space>
      </div>
    </div>
  );
}
