import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react'
import '../../asset/css/CHelper/CHelper.css';
const { SubMenu } = Menu;

export default class CHHeader extends React.Component {
  state = {
    current: 'mail',
    HeaderStyle :{'textAlign':'right',height:'60px',lineHeight:'60px'},
    ItemStyle:{width:'150px',textAlign:'center'}
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
        <SubMenu icon={<SettingOutlined />} title="演示" style={this.state.ItemStyle}>
                    <Menu.Item key="setting:1">使用文档</Menu.Item>
                    <Menu.Item key="setting:2">源码文档</Menu.Item>
            </SubMenu>
            <SubMenu icon={<SettingOutlined />} title="演示" style={this.state.ItemStyle}>
            <Menu.ItemGroup title="普通使用">
                    <Menu.Item key="setting:1">补全提示</Menu.Item>
                    <Menu.Item key="setting:2">悬停提示</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="@表达式">
                    <Menu.Item key="setting:3">表达式简介</Menu.Item>
                    <Menu.Item key="setting:4">表达式教程</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="downLoad" icon={<SettingOutlined />} style={this.state.ItemStyle} >
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

