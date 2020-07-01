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
 import TitleButton from '../component/util/TitleButton'
 import '../asset/css/Component.css'
import CHHeader from '../component/ComponentHelper/CHHead';
import Feature from '../component/ComponentHelper/Feature';
import MaterialCenter from '../component/ComponentHelper/MaterialCenter';
import Users from '../component/ComponentHelper/Users';
 export default class WebComponentHelper extends Component {
     render() {
         return (
             <div className="extensionMain">
                 <CHHeader/>
                 <img src = {require('../asset/img/CH/LOGO.svg')} style={{height:'600px',padding:'auto',marginTop:'20px'}}/>
                 <div className = "Intro">
                    <h1>DevUIHelper</h1>
                    <h2>The Most Powful VSCode Extension For Components</h2>
                </div>
                    <Feature></Feature>
                    <MaterialCenter/>
                    <Users></Users>
                    <div className = "users">
                        <h2>正在使用: </h2>

                    </div>


             </div>
         )
     }   
 }
 