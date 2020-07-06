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
 import '../asset/css/CHelper/CHelper.css'
import CHHeader from '../component/ComponentHelper/CHHead';
import Feature from '../component/ComponentHelper/Feature';
import Users from '../component/ComponentHelper/Users';
import { Footer } from '../component/ComponentHelper/Footer';
 export default class WebComponentHelper extends Component {
     render() {
         return (
             <div className="extensionMain">
                 <CHHeader/>
                 <img src = {require('../asset/img/CH/LOGO.svg')} style={{height:'600px',padding:'auto',marginTop:'20px'}}/>
                 <div className = "Intro">
                    <h1>DevUIHelper</h1>
                    <h2>The Most Powful VSCode Extension For Components</h2>
                    
                    <p align="center" className='badge'>
                        <a href="https://github.com/sspku-yqLiu/DevUIHelper-LSP"><img src="https://img.shields.io/github/stars/sspku-yqLiu/DevUIHelper-LSP" alt="Github Star"/></a>       
                        <a href="https://github.com/sspku-yqLiu/DevUIHelper-LSP/blob/master/LICENSE"><img src="https://img.shields.io/github/license/sspku-yqLiu/DevUIHelper-LSP" alt="License"/></a>          
                        <a href="https://marketplace.visualstudio.com/items?itemName=sspkuDevUI.devuihelper"><img src="https://img.shields.io/badge/InstallCount-169-brightgreen" alt="Document"/></a>
                        <br/>
                        <a href="https://github.com/microsoft/vscode-extension-samples"><img src="https://img.shields.io/badge/SupportFrame-Angular-red"/></a>
                        <a href="https://devui.design/home"><img src="https://img.shields.io/badge/SupportComponentsLib-DevUI-blue"/></a>
                    
                    </p>

                </div>
                    <Feature></Feature>
                    <Users></Users>
                    <Footer></Footer>
                </div>
         )
     }   
 }
 