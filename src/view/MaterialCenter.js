import React, { Component } from 'react'
import WhiteCard from '../component/util/whiteCard'
import '../asset/css/CHelper/MaterialCenter.css'
import { Pagination,Input,Dropdown,Menu,message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const {Search } = Input;
export default class MaterialCenter extends Component {
   
    render() {
        const frameworkMenu = (
            <Menu onClick={({ key }) => {message.info(`Click on item ${key}`);}}>
              <Menu.Item key="Agnular">Angular</Menu.Item>
              <Menu.Item key="React">React</Menu.Item>
              <Menu.Item key="Vue">Vue</Menu.Item>
            </Menu>
          );
          const componentsMenu = (
            <Menu onClick={({ key }) => {message.info(`Click on item ${key}`);}}>
              <Menu.Item key="DevUI">DevUI</Menu.Item>
            </Menu>
          );
        return (
            <div className="materialCenter">
                <div className="MaterialSearch" style={{backgroundSize:'100%',backgroundImage:'url('+require("../asset/img/CH/MaterialCenter/backgroud.jpg")+')'}}>
                    <h1>在这里，获取来自全世界的物料</h1>
                    <div style={{flexBasis:'100%',height:0}}></div>
                    <Search placeholder="Find Material..." onSearch={value => console.log(value)} enterButton style={{width:"400px",marginTop:'150px'}} size='large'/>
                    <div style={{flexBasis:'100%',height:0}}></div>
                    <Dropdown overlay={frameworkMenu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Select Framework <DownOutlined />
                        </a>
                    </Dropdown>
                    <Dropdown overlay={componentsMenu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Select Components <DownOutlined />
                        </a>
                    </Dropdown>
                    <div style={{flexBasis:'100%',height:0,marginBottom:'200px'}}></div>
                </div>

                <div className="materials">
                    <WhiteCard imgFileName = "demo01.png" content="文件树选择器"></WhiteCard>
                    <WhiteCard imgFileName = "demo01.png" content="文件树选择器"></WhiteCard>
                    <WhiteCard imgFileName = "demo01.png" content="文件树选择器"></WhiteCard>
                    <WhiteCard imgFileName = "demo01.png" content="文件树选择器"></WhiteCard>
                    <WhiteCard imgFileName = "demo01.png" content="文件树选择器"></WhiteCard>
                    <WhiteCard imgFileName = "demo01.png" content="文件树选择器"></WhiteCard>
                    <WhiteCard imgFileName = "demo01.png" content="文件树选择器"></WhiteCard>     
                </div>
                <Pagination defaultCurrent={1} total={50} />
                
            </div>
        )
    }
}
