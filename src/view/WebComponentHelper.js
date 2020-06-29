/*
 * @Author: your name
 * @Date: 2020-05-26 15:46:48
 * @LastEditTime: 2020-05-26 17:48:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react\web\src\view\WebComponentHelper.js
 */ 
 import React, { Component } from 'react';
 import { Carousel } from 'antd';
 import TitleButton from '../component/TitleButton'
 import '../asset/css/Component.css'
 export default class WebComponentHelper extends Component {
     render() {
         return (
             <div className="extensionMain">
                 <div className = "title">
                    <TitleButton name = {`文档`}></TitleButton>
                    <TitleButton name = {`特性`}></TitleButton>
                        <h1>hello world</h1>
                    <TitleButton name = {`演示`}></TitleButton>
                    <TitleButton name = {`下载`}></TitleButton>
                 </div>
                 <div className = "Intro">
                    <h1>一个强大的、面向组件库的插件</h1>
                    <div className = "users">
                        <h2>正在使用: </h2>
                        <span className="components">
                            <img src={require("../asset/img/devui.svg")} ></img><a href = "https://devui.design/home">DevUI</a>
                        </span>
                    </div>
                    <div className = 'demo'>
                    <Carousel autoplay     width= '50%'>
                        <div>
                        <h3>1</h3>
                        </div>
                        <div>
                        <h3>2</h3>
                        </div>
                        <div>
                        <h3>3</h3>
                        </div>
                        <div>
                        <h3>4</h3>
                        </div>
                    </Carousel>
                    </div>
                 </div>
             </div>
         )
     }
 }
 