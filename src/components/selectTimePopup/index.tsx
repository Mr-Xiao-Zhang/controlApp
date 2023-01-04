import { Button, Picker, Popup, Space } from 'antd-mobile';
import { CloseOutline } from 'antd-mobile-icons';
import PickerView, {
  PickerColumn,
  PickerColumnItem,
} from 'antd-mobile/es/components/picker-view';
import { useState } from 'react';
import styles from './index.less';

interface IProps {
  title: string;
  visible: boolean;
  onClose: () => void;
  onFinish: (res: string[]) => void;
}

const hourArr = ['不限制', ...Array.from(Array(24), (d, i) => `${i}小时`)];
const minuteArr = ['', ...Array.from(Array(60), (d, i) => `${i}分钟`)];

export default function SelectTimePopup(props: IProps) {
  const { visible, onClose, onFinish, title } = props;
  const [value, setValue] = useState(['不限制', '0分钟']);
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
    >
      <Space block direction={'vertical'} className={styles.container}>
        <div>
          <Space
            block
            align="center"
            justify="between"
            className={styles.header}
          >
            <div>{title}</div>
            <CloseOutline
              fontSize={15}
              color="#999999"
              onClick={() => {
                onClose();
              }}
            />
          </Space>
          <div>
            <PickerView
              columns={[hourArr, minuteArr]}
              onChange={(value) => {
                setValue(value as string[]);
              }}
              style={{ '--item-height': '48px' }}
            />
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
          <Button
            color="primary"
            onClick={() => {
              onFinish(value);
            }}
          >
            确定
          </Button>
        </Space>
      </Space>
    </Popup>
  );
}
