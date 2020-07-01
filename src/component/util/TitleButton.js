/*
 * @Author: your name
 * @Date: 2020-05-26 15:18:42
 * @LastEditTime: 2020-05-26 15:30:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\component\TitleButton.js
 */ 
import React, { Component } from 'react'
import '../../asset/css/TitleBox.css'
export default class TitleButton extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:props.name
        }
    }
    
    render() {
        return (
            <div>
                <button className="titleButton">
                    {this.state.name}
                    <span></span>
                </button>
            </div>
        )
    }
}
