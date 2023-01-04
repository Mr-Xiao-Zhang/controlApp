import styles from './index.less';
import { Button, Checkbox, Grid, Popup, Space } from 'antd-mobile';
import { CloseOutline } from 'antd-mobile-icons';
import { useEffect, useState } from 'react';
import { ITimes } from '../switchTime';
import SelectTimePopup from '../selectTimePopup';

interface Iprops {
  visible: boolean;
  onClose: () => void;
}

const ChineseNumbers = ['一', '二', '三', '四', '五', '六', '日'];

export default function SetTimePopup(props: Iprops) {
  const { visible, onClose } = props;
  const [timeList, setTimeList] = useState(
    Array.from(
      Array(7),
      (d, i) => new Object({ time: i, checked: false }) as ITimes,
    ),
  );
  const [startTime, setStartTime] = useState('开始时间');
  const [endTime, setEndTime] = useState('结束时间');
  const [curIsstart, setCurIsstart] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  //点击日期
  const clickTime = (index: number, e: any) => {
    e.stopPropagation();
    let copyTimeList = JSON.parse(JSON.stringify(timeList));
    copyTimeList[index].checked = !copyTimeList[index].checked;
    setTimeList(copyTimeList);
  };
  return (
    <Popup
      visible={visible}
      onMaskClick={() => {
        onClose();
      }}
      bodyStyle={{
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
        background: '#F2F2F2',
      }}
      destroyOnClose={true}
    >
      <Space block direction={'vertical'} className={styles.container}>
        <div>
          <Space
            block
            align="center"
            justify="between"
            className={styles.header}
          >
            <div>设置时间</div>
            <CloseOutline
              fontSize={15}
              color="#999999"
              onClick={() => {
                onClose();
              }}
            />
          </Space>
          <div className={styles.body}>
            <div className={styles.up}>
              <div className={styles.title}>选中频次</div>
              <div className={styles.timeList}>
                <Grid columns={3} gap={[44, 16]}>
                  {timeList.map((item, index) => {
                    return (
                      <Grid.Item span={1} key={index} className={styles.item}>
                        <Space
                          block
                          align="center"
                          justify="center"
                          onClick={(e) => {
                            clickTime(index, e);
                          }}
                        >
                          <input type="checkbox" checked={item.checked} />
                          <div>{`周${ChineseNumbers[item.time]}`}</div>
                        </Space>
                      </Grid.Item>
                    );
                  })}
                </Grid>
              </div>
            </div>
            <Space
              block
              align="center"
              justify="between"
              className={styles.down}
              onClick={() => {
                setPopupVisible(true);
              }}
            >
              <div>选择时间：</div>
              <Space block>
                <div
                  onClick={() => {
                    setCurIsstart(true), setPopupVisible(true);
                  }}
                >
                  {startTime}
                </div>
                <div>-</div>
                <div
                  onClick={() => {
                    setCurIsstart(false), setPopupVisible(true);
                  }}
                >
                  {endTime}
                </div>
              </Space>
            </Space>
          </div>
        </div>
        <Space block className={styles.footer}>
          <Button
            className={styles.btn}
            onClick={() => {
              onClose();
            }}
          >
            取消
          </Button>
          <Button color="primary">确定</Button>
        </Space>
      </Space>
      <SelectTimePopup
        title={'选择时间'}
        visible={popupVisible}
        onFinish={(res) => {
          res[0] !== '不限制'
            ? curIsstart
              ? setStartTime(`${res[0]}${res[1]}`)
              : setEndTime(`${res[0]}${res[1]}`)
            : curIsstart
            ? setStartTime(`不限制`)
            : setEndTime(`不限制`);
          setPopupVisible(false);
        }}
        onClose={() => {
          setPopupVisible(false);
        }}
      />
    </Popup>
  );
}
