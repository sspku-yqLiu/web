import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react'
import '../../asset/css/CHelper/CHelper.css';
const { SubMenu } = Menu;

export default class CHHeader extends React.Component {
  state = {
    current: 'mail',
    HeaderStyle :{'textAlign':'right',height:'60px',lineHeight:'60px'}
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
        <div className="Header">
        <Menu onClick={this.handleClick} inlineIndent='50px' theme = "light" mode="horizontal" className = 'Header' style = {this.state.HeaderStyle}>
            <Menu.Item key="mail" icon={<MailOutlined />} style={{width:'150px',textAlign:'center'}}>
            文档
            </Menu.Item>
            <Menu.Item key="app"  icon={<AppstoreOutlined />} style={{width:'150px',textAlign:'center'}}>
            特性
            </Menu.Item >
            <SubMenu icon={<SettingOutlined />} title="演示" style={{width:'150px',textAlign:'center'}}>
            <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="downLoad" icon={<SettingOutlined />} style={{width:'150px',textAlign:'center'}} >
            <a href="https://ant.design" target="_blank" rel="下载">
                下载
            </a>
            </Menu.Item>
            <Menu.Item key="Storage" icon={<SettingOutlined />} style={{width:'150px',textAlign:'center'}} >
            <a href="https://ant.design" target="_blank" rel="下载">
                物料中心
            </a>
            </Menu.Item>
        </Menu>
      </div>
    );
  }
}

