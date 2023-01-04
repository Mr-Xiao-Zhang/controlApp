import { Avatar, Grid, Space, Image } from 'antd-mobile';
import user from '../../assets/user.svg';
import binding from '../../assets/binding.svg';
import exit from '../../assets/exit.svg';
import styles from './index.less';
import { RightOutline } from 'antd-mobile-icons';
import AppHeader from '@/components/appHeader';
import { history } from 'umi';
import FreeIcon from '@/components/icon/free';
import MobildeIcon from '@/components/icon/mobilde';
import OfflineIcon from '@/components/icon/offline';

export default function PersonalCenter() {
  const clickAboutUsBtn = () => {
    history.push('/aboutUs');
  };

  return (
    <div className={styles.container}>
      <AppHeader title="个人中心" />
      <div className={styles.header}>
        <Avatar src="" className={styles.avatar} />
        <div className={styles.name}>夏天一抹蓝</div>
        <Grid columns={3} className={styles.desc}>
          <Grid.Item span={1}>
            <Space block justify={'center'} align={'center'}>
              <FreeIcon color="#FFFFFF" />
              <div>学习模式</div>
            </Space>
          </Grid.Item>
          <Grid.Item span={1}>
            <Space block justify={'center'} align={'center'}>
              <OfflineIcon color="#FFFFFF" />
              <div>离线状态</div>
            </Space>
          </Grid.Item>
          <Grid.Item span={1}>
            <Space block justify={'center'} align={'center'}>
              <MobildeIcon color="#FFFFFF" />
              <div>BAH4-W09</div>
            </Space>
          </Grid.Item>
        </Grid>
      </div>
      <Space block direction="vertical" className={styles.body}>
        <Space block align="center" justify="between" className={styles.item}>
          <Space block align="center">
            <Image src={binding} width={16} />
            <div>绑定设备</div>
          </Space>
          <RightOutline />
        </Space>
        <Space
          block
          align="center"
          justify="between"
          className={styles.item}
          onClick={() => {
            clickAboutUsBtn();
          }}
        >
          <Space block align="center">
            <Image src={user} width={16} />
            <div>关于我们</div>
          </Space>
          <RightOutline />
        </Space>
        <Space block align="center" justify="between" className={styles.item}>
          <Space block align="center">
            <Image src={exit} width={16} />
            <div>退出登录</div>
          </Space>
          <RightOutline />
        </Space>
      </Space>
    </div>
  );
}
