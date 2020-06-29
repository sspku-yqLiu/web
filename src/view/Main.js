/*
 * @Author: your name
 * @Date: 2020-05-26 15:49:23
 * @LastEditTime: 2020-06-03 08:53:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\web\src\view\Main.js
 */ 
import React, { Component } from 'react'
import Box from '../component/Box';
import Header from '../component/Header';
import 'antd/dist/antd.css'
import '../asset/css/Main.css'
import Myself from '../component/Myself';

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
           stars:[],
           distance:800,
           flag:false
        }
      }
      componentDidMount(){
        if(!this.state.flag){
            this.state.stars.forEach(e=>{
            var speed = 0.2 + (Math.random()*1);
            var distance = this.state.distance+Math.random()*300
            e.style.transformOrigin = `0 0 ${distance}px`;
            e.style.transform = `translate3d(0,0, -${distance}px) rotateY(${Math.random()*360}deg) rotateX(${Math.random()*(-50)}deg) scale(${speed},${speed})`;
            });
            this.setState({flag:true})
        }
      }
    render() {
        let stars =[];
        let n =0;
        while(n<800){
          stars.push(n++);
        }
        return (
        <div className="backGround">
            <div className='main'>
                <Header></Header>
                <div className = "stars">
                {stars.map((e)=>{
                    let speed = 0.2+Math.random()*1;
                    let thisDistance = this.state.distance + (Math.random()+300);
                    return (
                        <div className = "star" key={e} ref={e=>this.state.stars.push(e)}>  </div>
                    )
                })}
                </div>
                <div className='content'>
                    <h1 className='slogan'> Coding for future</h1>
                    <div className="boxs"> 
                        <Box content = 'Extension' history = {this.props.history}></Box>
                        <Box content = 'npm' history = {this.props.history}></Box>
                        <Box content = 'Search' history = {this.props.history}></Box>
                        <Box content = 'Docs' history = {this.props.history}></Box>
                        <Box content = 'Others' history = {this.props.history}></Box>
                    </div>
                </div>
            </div>
            <Myself></Myself>
        </div>
        )
    }
}
