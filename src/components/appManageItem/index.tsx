import { Space, SwipeAction, Image } from 'antd-mobile';
import styles from './index.less';
import pass from '../../assets/pass.svg';
import del from '../../assets/del.svg';

interface IProps {
  leftText?: string;
  rightText?: string;
  isApprovel?: boolean;
  onClick?: () => void;
}

export default function AppManageItem(props: IProps = { isApprovel: false }) {
  const { leftText, rightText, isApprovel, onClick } = props;

  return (
    <>
      {isApprovel || (
        <SwipeAction
          rightActions={[
            {
              key: 'delete',
              text: '卸载',
              color: 'danger',
            },
          ]}
        >
          <Space
            block
            align={'center'}
            justify={'between'}
            className={styles.container}
          >
            <Space block align={'center'} className={styles.left}>
              <div className={styles.icon}></div>
              <div>{leftText}</div>
            </Space>
            <div
              className={styles.right}
              onClick={() => {
                onClick && onClick();
              }}
            >
              {rightText}
            </div>
          </Space>
        </SwipeAction>
      )}
      {isApprovel && (
        <Space
          block
          align={'center'}
          justify={'between'}
          className={styles.container}
        >
          <Space block align={'center'} className={styles.left}>
            <div className={styles.icon}></div>
            <div>{leftText}</div>
          </Space>
          <Space block align={'center'} className={styles.right}>
            <Space block align={'center'} className={styles.pass}>
              <Image src={pass} width={16} />
              <div>通过</div>
            </Space>
            <Space align={'center'} className={styles.del}>
              <Image src={del} width={16} />
              <div>删除</div>
            </Space>
          </Space>
        </Space>
      )}
    </>
  );
}
