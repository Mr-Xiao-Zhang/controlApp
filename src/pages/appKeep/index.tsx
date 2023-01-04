import AppHeader from '@/components/appHeader';
import AppTitle from '@/components/appTitle';
import SetTimePopup from '@/components/setTimePopup';
import {
  Button,
  Collapse,
  Divider,
  Grid,
  IndexBar,
  List,
  Popup,
  Space,
  SwipeAction,
} from 'antd-mobile';
import { AddOutline } from 'antd-mobile-icons';
import { useEffect, useState } from 'react';
import { request } from 'umi';
import styles from './index.less';

interface IApp {
  name: string;
  chird: string[];
}

interface IApps {
  title: string;
  items: IApp[];
}
export default function AppKeep() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [appList, setAppList] = useState<IApps[]>([]);
  useEffect(() => {
    request('/api/appList', {
      method: 'get',
    }).then((res) => {
      setAppList(res.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <AppHeader title="应用保持" />
      <div className={styles.appKeep}>
        <IndexBar>
          {appList.map((item, index) => {
            return (
              <IndexBar.Panel
                index={item.title}
                title={`标题${item.title}`}
                key={`标题${item.title}`}
              >
                <Space block direction={'vertical'} style={{ '--gap': '16px' }}>
                  {item.items.map((item2, index2) => {
                    return (
                      <SwipeAction
                        rightActions={[
                          {
                            key: 'delete',
                            text: '删除',
                            color: 'danger',
                          },
                        ]}
                        key={index2}
                      >
                        <Collapse
                          {...(item2.chird.length === 0
                            ? { activeKey: [] }
                            : {})}
                        >
                          <Collapse.Panel
                            key="1"
                            title={
                              <AppTitle
                                name={item2.name}
                                isCollapse={item2.chird.length > 0}
                                {...(item2.chird.length === 0
                                  ? {
                                      onclick: () => {
                                        setPopupVisible(true);
                                      },
                                    }
                                  : {})}
                              />
                            }
                          >
                            <div className={styles.collapseContainer}>
                              {item2.chird.map((item3, index3) => {
                                return (
                                  <Grid
                                    columns={4}
                                    className={styles.item}
                                    key={index3}
                                  >
                                    <Grid.Item span={3}>{item3}</Grid.Item>
                                    <Grid.Item span={1}>
                                      <Space
                                        justify="end"
                                        block
                                        className={styles.rightActions}
                                      >
                                        <div
                                          onClick={() => {
                                            setPopupVisible(true);
                                          }}
                                        >
                                          修改
                                        </div>
                                        <div>删除</div>
                                      </Space>
                                    </Grid.Item>
                                  </Grid>
                                );
                              })}
                              <Space
                                block
                                className={styles.footer}
                                onClick={() => {
                                  setPopupVisible(true);
                                }}
                              >
                                <AddOutline />
                                <div>添加设置时间</div>
                              </Space>
                            </div>
                          </Collapse.Panel>
                        </Collapse>
                      </SwipeAction>
                    );
                  })}
                </Space>
              </IndexBar.Panel>
            );
          })}
        </IndexBar>
        <SetTimePopup
          visible={popupVisible}
          onClose={() => {
            setPopupVisible(false);
          }}
        />
      </div>
    </div>
  );
}
