/*
 * @Author: your name
 * @Date: 2020-05-25 21:38:05
 * @LastEditTime: 2020-06-03 08:53:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\component\Analysis.js
 */ 
import { Tree,Modal} from 'antd';
import {
  DownOutlined,
  FrownOutlined,
  SmileOutlined,
  MehOutlined,
  FrownFilled,
} from '@ant-design/icons';
import React, { Component } from 'react'
import '../asset/css/Alert.css'
export const treeData = [
    {
      title: 'Reason1',
      key: '0-0',
      icon: <SmileOutlined />,
      children: [
        {
          title: 'Reason1.1',
          key: '0-0-1',
          icon: <SmileOutlined />,
        },
        {
          title: 'Reason1.2',
          key: '0-0-2',
          icon: <SmileOutlined />,
        },
      ],
    },
    {
      title: 'Reason1',
      key: '0-1',
      icon: <MehOutlined />,
      warnLevel:'warning',
      children: [
        {
          title: 'Reason1.1',
          key: '0-1-0',
          warnLevel:'error',
          icon: <SmileOutlined />,
        },
        {
          title: 'Reason1.2',
          key: '0-1-1',
          icon: <SmileOutlined />,
        },
        {
          title: 'Reason1.3',
          key: '0-1-2',
          icon: <SmileOutlined />,
        },
        {
          title: 'Reason1.4',
          key: '0-1-3',
          icon: <SmileOutlined />,
        },
      ],
    },
    {
      title: 'Reason1',
      key: '0-2',
      icon: <FrownFilled />,
      warnLevel:'error',
      children: [
        {
          title: 'Reason1.1',
          key: '0-2-0',
          icon: <SmileOutlined />,
        },
        {
          title: 'Reason1.2',
          key: '0-2-1',
          icon: <SmileOutlined />,
        },
      ],
    },
  ];
  const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
      <p className="site-description-item-profile-p-label">{title}:</p>
      {content}
    </div>
  );
  function switcher(state){
    switch(state){
      case 'success':success();break;
      case 'warning':warning();break;
      case 'error':error();break;
      default:success();break;
    }
  }
  function success() {
    Modal.success({
      content: 'some messages...some messages...',
    });
  }
  
  function error() {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  }
  
  function warning() {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  }
 class Analysis extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        visible:false
     }
   }
   
   showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  search(key,data){
    for(var e of data){
      if(e.key == key)
       return e;
      else if(typeof(e)=='Array'){
        this.search(key,e);
      }
      else{
        return;
      }
    }
  }
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
    render() {
        return (
            <div>
              <div class='alertLeftContent'>
                  <Tree
                      showIcon
                      defaultExpandAll
                      defaultSelectedKeys={['0-0-0']}
                      switcherIcon={<DownOutlined />}
                      treeData={treeData}
                      onSelect={e=>{
                        let searResult = treeData.filter(treeEle=>(treeEle.key==e[0]))[0];
                        // let searResult = this.search(e[0],treeData);
                        if(searResult)
                          switcher(searResult.warnLevel);
                        else
                          switcher('success')
                      }}
                  />
                </div>
                <Modal
                  title="Basic Modal"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}
export default Analysis
