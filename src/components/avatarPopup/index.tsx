import { Button, ImageUploader, Popup, Space } from 'antd-mobile';
import styles from './index.less';

interface IProps {
  visible: boolean;
  onClose: () => void;
}

export default function AvatarPopup(props: IProps) {
  const { visible, onClose } = props;

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
      <div className={styles.container}>
        <Space block align="center" justify="center" className={styles.header}>
          从手机相册中选择
        </Space>
        <Space
          block
          align="center"
          justify="center"
          className={styles.footer}
          onClick={() => {
            onClose;
          }}
        >
          取消
        </Space>
      </div>
    </Popup>
  );
}
