import { Avatar, Grid, Space, Image, Swiper } from 'antd-mobile';
import free from '../../assets/free.svg';
import online from '../../assets/online.svg';
import mobile from '../../assets/mobile.svg';
import styles from './index.less';
import { useEffect, useState } from 'react';
import { request } from 'umi';

interface IUserCard {
  id: number;
  name: string;
}

export default function CardSwiper() {
  const [userCardList, setUserCardList] = useState<IUserCard[]>([]);
  useEffect(() => {
    request('/api/getUserCardList', {
      method: 'get',
    }).then((res) => {
      setUserCardList(res.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Swiper>
        {userCardList.map((item, index) => {
          return (
            <Swiper.Item key={index}>
              <div className={styles.card}>
                <Grid columns={3} gap={[0, 16]}>
                  <Grid.Item span={3}>
                    <Space block align={'center'} style={{ '--gap': '10px' }}>
                      <Avatar src="" />
                      <div>
                        <div className={styles.upText}>{item.name}</div>
                        <div className={styles.downText}>你还未开通VIP特权</div>
                      </div>
                    </Space>
                  </Grid.Item>
                  <Grid.Item span={1} className={styles.downCon}>
                    <Space block justify={'center'} align={'center'}>
                      <Image src={free} width={16} />
                      <div>学习模式</div>
                    </Space>
                  </Grid.Item>
                  <Grid.Item span={1} className={styles.downCon}>
                    <Space block justify={'center'} align={'center'}>
                      <Image src={online} width={16} />
                      <div>离线状态</div>
                    </Space>
                  </Grid.Item>
                  <Grid.Item span={1} className={styles.downCon}>
                    <Space block justify={'center'} align={'center'}>
                      <Image src={mobile} width={16} />
                      <div>BAH4-W09</div>
                    </Space>
                  </Grid.Item>
                </Grid>
              </div>
            </Swiper.Item>
          );
        })}
      </Swiper>
    </div>
  );
}
