import { Form, Input, Space, Image, Grid } from 'antd-mobile';
import styles from './index.less';
import add from '../../assets/add.svg';
import eye from '../../assets/eye.svg';
import { useState } from 'react';
import AppHeader from '@/components/appHeader';
import { RightOutline } from 'antd-mobile-icons';
import JustModel from '@/components/justModel';
import AvatarPopup from '@/components/avatarPopup';

const ChineseNumbers = ['一', '二', '三', '四', '五'];

export default function GuardInfo() {
  const [guardForm, setGuardForm] = useState([]); //守护人表单
  const [seniorPasswordVisible, setSeniorPasswordVisible] = useState(true); //高级密码是否可见
  const [passwordVisible, setPasswordVisible] = useState(true); //密码是否可见
  const [avataPopuprVisible, setAvataPopuprVisible] = useState(false); //头像弹窗
  const [guardModelVisible, setGuardModelVisible] = useState(false); //添加守护人弹窗
  const [nicknameModelVisible, setNicknameModelVisible] = useState(false); //昵称弹窗

  const addGuard = (val: string) => {
    let copyGuardForm = JSON.parse(JSON.stringify(guardForm));
    copyGuardForm.push(val);
    setGuardForm(copyGuardForm);
  };

  return (
    <div className={styles.container}>
      <AppHeader title="守护信息" />
      {/* 基本信息 */}
      <Space block direction={'vertical'} className={styles.body}>
        <Space block direction={'vertical'} className={styles.box}>
          <div className={styles.title}>基本信息</div>
          <div className={styles.boxBody}>
            <Grid columns={5} className={styles.item}>
              <Grid.Item span={2}>
                <div className={styles.Label}>头像</div>
              </Grid.Item>
              <Grid.Item
                span={3}
                onClick={() => {
                  setAvataPopuprVisible(true);
                }}
              >
                <Space block justify="between" align="center">
                  <Image
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-1.lanrentuku.com%2F2020%2F11%2F5%2Fdef6ed04-6d34-402e-99c8-366266f627dd.png%3FimageView2%2F2%2Fw%2F500&refer=http%3A%2F%2Fi-1.lanrentuku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655023448&t=72dcda0c02507bd382da62c5e55b3903"
                    width={48}
                  />
                  <RightOutline fontSize={18} />
                </Space>
              </Grid.Item>
            </Grid>
            <Grid columns={5} className={styles.item}>
              <Grid.Item span={2}>
                <div className={styles.Label}>昵称</div>
              </Grid.Item>
              <Grid.Item
                span={3}
                onClick={() => {
                  setNicknameModelVisible(true);
                }}
              >
                <Space block justify="between" align="center">
                  <div>夏天一抹蓝</div>
                  <RightOutline fontSize={18} />
                </Space>
              </Grid.Item>
            </Grid>
            <Grid columns={5} className={styles.item}>
              <Grid.Item span={2}>
                <div className={styles.Label}>姓名</div>
              </Grid.Item>
              <Grid.Item span={3}>
                <Space block align="center">
                  <div>王小丫</div>
                </Space>
              </Grid.Item>
            </Grid>
            <Grid columns={5} className={styles.item}>
              <Grid.Item span={2}>
                <div className={styles.Label}>用户名</div>
              </Grid.Item>
              <Grid.Item span={3}>
                <Space block align="center">
                  <div>请输入</div>
                </Space>
              </Grid.Item>
            </Grid>
            <Grid columns={5} className={styles.item}>
              <Grid.Item span={2}>
                <div className={styles.Label}>设备型号</div>
              </Grid.Item>
              <Grid.Item span={3}>
                <Space block align="center">
                  <div>BAH4-W09</div>
                </Space>
              </Grid.Item>
            </Grid>
          </div>
        </Space>
        {/* 守护人信息 */}
        <Space block direction={'vertical'} className={styles.box}>
          <div className={styles.title}>守护人信息</div>
          <div className={styles.boxBody}>
            {guardForm.map((item, index) => {
              return (
                <Grid columns={5} className={styles.item} key={index}>
                  <Grid.Item span={2}>
                    <div
                      className={styles.Label}
                    >{`第${ChineseNumbers[index]}守护人`}</div>
                  </Grid.Item>
                  <Grid.Item span={3}>
                    <Space block align="center">
                      <div>{item}</div>
                    </Space>
                  </Grid.Item>
                </Grid>
              );
            })}
            {guardForm.length === 5 || (
              <Space
                align="center"
                className={styles.addGuardItem}
                onClick={() => {
                  setGuardModelVisible(true);
                }}
              >
                <Image src={add} width={24} />
                <div>添加守护人</div>
              </Space>
            )}
          </div>
        </Space>
        {/* 其他设置 */}
        <Space block direction={'vertical'} className={styles.box}>
          <div className={styles.title}>其他设置</div>
          <div className={styles.boxBody}>
            <Grid columns={5} className={styles.item}>
              <Grid.Item span={2}>
                <div className={styles.Label}>高级密码</div>
              </Grid.Item>
              <Grid.Item span={3}>
                <Grid columns={5}>
                  <Grid.Item span={4}>
                    <Input
                      type={seniorPasswordVisible ? 'text' : 'password'}
                      value="123456"
                      readOnly
                      className={styles.inputText}
                    />
                  </Grid.Item>
                  <Grid.Item span={1}>
                    <Space block justify="end">
                      <Image
                        src={eye}
                        width={24}
                        onClick={() => {
                          setSeniorPasswordVisible(!seniorPasswordVisible);
                        }}
                      />
                    </Space>
                  </Grid.Item>
                </Grid>
              </Grid.Item>
            </Grid>
            <Grid columns={5} className={styles.item}>
              <Grid.Item span={2}>
                <div className={styles.Label}>账号</div>
              </Grid.Item>
              <Grid.Item span={3}>
                <Space block align="center">
                  <div>20220427012</div>
                </Space>
              </Grid.Item>
            </Grid>
            <Grid columns={5} className={styles.item}>
              <Grid.Item span={2}>
                <div className={styles.Label}>密码</div>
              </Grid.Item>
              <Grid.Item span={3}>
                <Grid columns={5}>
                  <Grid.Item span={4}>
                    <Input
                      type={passwordVisible ? 'text' : 'password'}
                      value="123456"
                      readOnly
                      className={styles.inputText}
                    />
                  </Grid.Item>
                  <Grid.Item span={1}>
                    <Space block justify="end">
                      <Image
                        src={eye}
                        width={24}
                        onClick={() => {
                          setPasswordVisible(!passwordVisible);
                        }}
                      />
                    </Space>
                  </Grid.Item>
                </Grid>
              </Grid.Item>
            </Grid>
          </div>
        </Space>
        <Space block align="center" justify="center" className={styles.footer}>
          解除绑定
        </Space>
      </Space>

      {/* 添加守护人弹窗 */}
      <JustModel
        title="添加守护人"
        placeholder="请输入守护人手机号码"
        inputType="number"
        visible={guardModelVisible}
        onClose={() => {
          setGuardModelVisible(false);
        }}
        onFinish={(val: string) => {
          addGuard(val);
        }}
      />
      {/* 修改昵称弹窗 */}
      <JustModel
        title="修改昵称"
        placeholder="请输入昵称"
        visible={nicknameModelVisible}
        onClose={() => {
          setNicknameModelVisible(false);
        }}
      />
      {/* 修改头像弹窗 */}
      <AvatarPopup
        visible={avataPopuprVisible}
        onClose={() => {
          setAvataPopuprVisible(false);
        }}
      />
    </div>
  );
}
