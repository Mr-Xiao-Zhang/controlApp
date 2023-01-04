import { Space } from 'antd-mobile';
import styles from './index.less';
interface IProps {
  isCollapse?: boolean;
  name?: string;
  onclick?: () => void;
}

export default function AppTitle(props: IProps = { isCollapse: false }) {
  const { isCollapse, name, onclick } = props;

  return (
    <Space block align={'center'} justify={'between'} className={styles.title}>
      <Space block align={'center'} className={styles.left}>
        <div className={styles.icon}></div>
        <div>{name}</div>
      </Space>

      {isCollapse && <div className={styles.right}>查看详情</div>}
      {isCollapse || (
        <div
          className={styles.disabledRight}
          onClick={() => {
            onclick && onclick();
          }}
        >
          设置时间
        </div>
      )}
    </Space>
  );
}
