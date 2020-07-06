/*
 * @Author: your name
 * @Date: 2020-05-24 20:37:52
 * @LastEditTime: 2020-05-26 16:08:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\component\Header.js
 */ 
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import React, { Component } from 'react'
const { SubMenu } = Menu;
export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            current: 'mail',
        }
    }
    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{'textAlign':'right',display:'fix'}}>
                <Menu.Item key="Slogan" >
                        Everyone will commuicate with machines like a family
                </Menu.Item>
                <Menu.Item key="Project" icon={<AppstoreOutlined />}>
                    项目园
                </Menu.Item>

                <Menu.Item key="app" icon={<SettingOutlined />}>
                <a href="https://sspku-yqliu.github.io/WebStudy/#/" target="_blank" rel="noopener noreferrer">
                    Github文档
                </a>
                </Menu.Item>
                <SubMenu  title="文章导航">
                <Menu.ItemGroup title="普通使用">
                    <Menu.Item key="setting:1">补全提示</Menu.Item>
                    <Menu.Item key="setting:2">悬停提示</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="@表达式">
                    <Menu.Item key="setting:3">表达式简介</Menu.Item>
                    <Menu.Item key="setting:4">表达式教程</Menu.Item>
                </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="contectMe" icon={<MailOutlined />}>
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    联系我
                </a>
            </Menu.Item>
          </Menu>
        )
    }
}
