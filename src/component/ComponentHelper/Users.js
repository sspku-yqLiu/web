import React, { Component } from 'react'
import '../../asset/css/CHelper/CHelper.css'
import QuadBox from '../util/QuadBox'
export default class Users extends Component {
    render() {
        return (
            <div className = 'Users'>
                <h1 style={{flexBasis:'100%'}}><b>加入我们,让组件库变得更好!</b></h1>
                <h2 flexBasis='30%'>与我们合作的组件库:</h2>
                <div className="componentsUsers">
                <ComponentUser name = "DevUI"></ComponentUser>
                </div>
                <h2 width='30%'>我们的用户来自于:</h2>
            </div>
        )
    }
}
function ComponentUser(props){
    let nameToLink ={
        'DevUI':"https://devui.design/home"
    }
    return (
        <span className="componentsUsers">
            <QuadBox content = 'DevUI' imgurl = '../../asset/img/devui.svg'></QuadBox>
            <img src={require("../../asset/img/devui.svg")} ></img><a href = {nameToLink[props.name]}>{props.name}</a>          
        </span>
    )
}