/*
 * @Author: your name
 * @Date: 2020-05-26 16:47:24
 * @LastEditTime: 2020-06-03 09:34:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\web\src\component\Myself.js
 */ 
import React, { Component } from 'react'
import '../../asset/css/Main.css'
export default class Myself extends Component {
    render() {
        return (
            <div className='myself'>
                <div className="myselfLeft">
                    <div className='img'>
                        <img src={require("../../asset/me.jpg")} className="myPic"/>
                    </div>
                    <div className='introduction'>
                        <h2>刘勇琦-sspku</h2>
                        <span>web/nodejs/插件开发</span>
                    </div>
                    <ul>
                        <li><a href='#'><img src={require("../../asset/img/微信.svg")} /></a></li>
                        <li><a href='#'><img src={require("../../asset/img/GitHub.svg")} /></a></li>
                        <li><a href='#'><img src={require("../../asset/img/邮箱.svg")} /></a></li>
                        <li><a href='#'><img src={require("../../asset/img/BILIBILI_LOGO.svg")} /></a></li>
                        <li><a href='#'><img src={require("../../asset/img/学位.svg")} /></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
