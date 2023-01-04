import { Grid, Space } from 'antd-mobile';
import { LeftOutline } from 'antd-mobile-icons';
import { history } from 'umi';
import styles from './index.less';

interface IProps {
  title: string;
  isHomePage?: boolean;
}

export default function AppHeader(props: IProps) {
  const { title, isHomePage } = props;

  const onBack = () => {
    history.goBack();
  };

  return (
    <Grid columns={3} className={styles.container}>
      <Grid.Item span={1}>
        {isHomePage || (
          <LeftOutline
            onClick={() => {
              onBack();
            }}
          />
        )}
      </Grid.Item>
      <Grid.Item span={1}>
        <Space block justify="center">
          {title}
        </Space>
      </Grid.Item>
    </Grid>
  );
}
