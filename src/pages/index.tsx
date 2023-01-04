import styles from './index.less';
import '../themes/index.less';
import { Grid, Space, Image, Button } from 'antd-mobile';
import vip from '../assets/vip.svg';
import lock from '../assets/lock.svg';
import bigLearn from '../assets/bigLearn.svg';
import twoArrow from '../assets/twoArrow.svg';
import { useEffect, useState } from 'react';
import { request, history } from 'umi';
import ColumnChart from '@/components/columnChart';
import AppList from '@/components/appList';
import CardSwiper from '@/components/cardSwiper';
import AppHeader from '@/components/appHeader';

interface IModule {
  id: number;
  name: string;
  path: string;
}

export default function HomePage() {
  const [modules, setModules] = useState<IModule[]>([]);
  const [isLock, setIsLock] = useState(false);

  useEffect(() => {
    request('/api/getModuleList', {
      method: 'get',
    }).then((res) => {
      setModules(res.data);
    });
  }, []);

  //点击功能模块
  const clickModuleBtn = (path: string) => {
    history.push(path);
  };

  //点击家长中心
  const clickParentCenterBtn = () => {
    history.push('/personalCenter');
  };

  return (
    <div className={styles.container}>
      <AppHeader title="易管助手" isHomePage />
      <div className={styles.header}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.leftText}>管控小程序</div>
            <Space
              align="center"
              className={styles.rightText}
              onClick={() => {
                clickParentCenterBtn();
              }}
            >
              <div>家长中心</div>
              <Image src={twoArrow} width={16} />
            </Space>
          </div>
          <div className={styles.text}>
            欢迎来到管控小程序，轻松托管孩子学习！
          </div>
        </div>
        {/* 轮播卡片 */}
        <CardSwiper />
      </div>
      <div className={styles.body}>
        <Grid columns={1} gap={[0, 16]}>
          <Grid.Item>
            <div className={styles.vip}>
              <div>
                <div>
                  <Image src={vip} width={20} className={styles.img} />
                  <div>管控小程序VIP</div>
                </div>
                <div>尊享12项专属特权</div>
              </div>
              <div>
                <Button className={styles.btn}>立即开通</Button>
              </div>
            </div>
          </Grid.Item>
          <Grid.Item>
            <div className={styles.functionModule}>
              <Grid columns={4} gap={[12, 24]}>
                {modules.map((item, index) => {
                  return (
                    <Grid.Item key={index}>
                      <Space
                        block
                        direction={'vertical'}
                        justify={'center'}
                        align={'center'}
                        onClick={() => {
                          clickModuleBtn(item.path);
                        }}
                      >
                        <div className={styles.box}></div>
                        <div className={styles.text}>{item.name}</div>
                      </Space>
                    </Grid.Item>
                  );
                })}
              </Grid>
            </div>
          </Grid.Item>
          <Grid.Item>
            <div className={styles.switchTab}>
              <Grid columns={2} gap={13}>
                <Grid.Item span={1}>
                  <Space
                    block
                    justify={'center'}
                    align={'center'}
                    className={`${styles.item} ${isLock && styles.itemActive}`}
                    onClick={() => {
                      setIsLock(!isLock);
                    }}
                  >
                    <Image src={lock} width={25} />
                    <div>{isLock ? '一键开锁' : '一键锁定'}</div>
                  </Space>
                </Grid.Item>
                <Grid.Item span={1}>
                  <Space
                    block
                    justify={'center'}
                    align={'center'}
                    className={styles.item}
                  >
                    <Image src={bigLearn} width={25} />
                    <div>切换模式</div>
                  </Space>
                </Grid.Item>
              </Grid>
            </div>
          </Grid.Item>
          <Grid.Item>
            <ColumnChart />
          </Grid.Item>
          <Grid.Item>
            <AppList />
          </Grid.Item>
        </Grid>
      </div>
    </div>
  );
}
