import styles from './index.less';
import { Grid, Space } from 'antd-mobile';
import { useState } from 'react';

export interface ITimes {
  checked: boolean;
  time: number;
}

export default function SwitchTime() {
  const [timeList, setTimeList] = useState(
    Array.from(
      Array(24),
      (d, i) => new Object({ time: i + 1, checked: false }) as ITimes,
    ),
  );
  const [timeManageList, setTimeManageList] = useState([]);

  const clickTime = (index: number) => {
    let copyTimeList = JSON.parse(JSON.stringify(timeList));
    let copyTimeManageList = JSON.parse(JSON.stringify(timeManageList));
    copyTimeList[index].checked = !copyTimeList[index].checked;
    setTimeList(copyTimeList);

    let copyTimeManageListCurIndex = copyTimeManageList.findIndex(
      (Item: any) => {
        return Item === index + 1;
      },
    );
    if (copyTimeManageListCurIndex !== -1) {
      copyTimeManageList.splice(copyTimeManageListCurIndex, 1);
    } else {
      copyTimeManageList.push(index + 1);
    }
    setTimeManageList(copyTimeManageList);
  };

  return (
    <Space block direction={'vertical'} style={{ '--gap': '16px' }}>
      <div className={styles.timeList}>
        <Space block direction={'vertical'}>
          <div className={styles.title}>请选择时间</div>
          <div>
            <Grid columns={6} gap={3}>
              {timeList.map((item, index) => {
                return (
                  <Grid.Item span={1} key={index}>
                    <Space
                      block
                      justify="center"
                      align={'center'}
                      className={
                        !item.checked
                          ? styles.item
                          : [styles.item, styles.itemActive].join(' ')
                      }
                      onClick={() => {
                        clickTime(index);
                      }}
                    >
                      {`${item.time}:00`}
                    </Space>
                  </Grid.Item>
                );
              })}
            </Grid>
          </div>
        </Space>
      </div>
      <div className={styles.timeManage}>
        <div className={styles.title}>学校管理时间段</div>
        <div className={styles.desc}>
          孩子在校时间，家长的时间规划设置不起作用
        </div>
        {timeManageList.length > 0 && (
          <Grid columns={2} gap={20} className={styles.itemList}>
            {timeManageList.map((item, index) => {
              return (
                <Grid.Item span={1} key={index} className={styles.item}>
                  {`${item}:00 ~ ${item + 1}:00`}
                </Grid.Item>
              );
            })}
          </Grid>
        )}
      </div>
    </Space>
  );
}
