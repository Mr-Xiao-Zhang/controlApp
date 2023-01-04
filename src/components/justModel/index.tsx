import { Button, Grid, Input, Modal, Toast } from 'antd-mobile';
import { useState } from 'react';
import styles from './index.less';

interface IProps {
  visible: boolean;
  title: string;
  inputType?: string;
  placeholder?: string;
  onClose: () => void;
  onFinish?: (val: string) => void;
}

export default function JustModel(props: IProps) {
  const { visible, onClose, onFinish, title, inputType, placeholder } = props;
  const [value, setValue] = useState('');

  const clickOk = () => {
    if (value === '') {
      Toast.show({
        content: '不能为空',
      });
    } else {
      setValue(''), onFinish && onFinish(value), onClose();
    }
  };

  const modalBody = (
    <div className={styles.modalBody}>
      <div className={styles.body}>
        <Input
          type={inputType || 'text'}
          placeholder={placeholder || '请输入'}
          className={styles.input}
          value={value}
          onChange={(value) => {
            setValue(value);
          }}
        />
      </div>
      <Grid columns={2}>
        <Grid.Item span={1}>
          <Button
            block
            shape="rectangular"
            size="large"
            onClick={() => {
              setValue(''), onClose();
            }}
          >
            取消
          </Button>
        </Grid.Item>
        <Grid.Item span={1}>
          <Button
            block
            shape="rectangular"
            size="large"
            style={{ '--text-color': '#576CD3' }}
            onClick={() => {
              clickOk();
            }}
          >
            确定
          </Button>
        </Grid.Item>
      </Grid>
    </div>
  );

  return (
    <Modal
      visible={visible}
      title={title}
      content={modalBody}
      onClose={() => {
        setValue(''), onClose();
      }}
      closeOnMaskClick={true}
    />
  );
}
