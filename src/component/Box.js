/*
 * @Author: your name
 * @Date: 2020-05-24 19:28:30
 * @LastEditTime: 2020-06-03 08:54:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\component\Box.js
 */ 
import React, { Component } from 'react'
import '../asset/css/box.css'

export default class Box extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             link:`/${this.props.content}`
        }
    }
    
    render() {
        return (
            <div>
                <div className={`box ${this.props.content}` } onClick={this.clickEvent}>{this.props.content}</div>
            </div>
        )
    }
    clickEvent=()=>{
        console.log(this.props.history.push(this.state.link))
    }
}
