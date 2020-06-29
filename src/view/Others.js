/*
 * @Author: your name
 * @Date: 2020-05-28 10:31:53
 * @LastEditTime: 2020-05-28 12:25:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\web\src\view\Others.js
 */ 
import React, { Component } from 'react'

export default class Others extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             content:[
                 '111',
                 '222',
                 '333',
                 '<script> alert("hello")</script>'
             ]
        }
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
