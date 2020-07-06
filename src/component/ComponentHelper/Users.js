import React, { Component } from 'react'
import '../../asset/css/CHelper/CHelper.css'
import QuadBox from '../util/QuadBox'
export default class Users extends Component {
    render() {
        return (
            <div className = 'Users'>
                <h1 style={{flexBasis:'100%'}}><b>加入我们,让组件库变得更好!</b></h1>
                <h2 style={{lineHeight:'240px',flexBasis:'300px'}}>与我们合作的开源社区:</h2>
                <div className="componentsUsers">
                    <QuadBox imgurl = "devui.svg" content='DevUI'/>          
                    <QuadBox imgurl = "ICE.png" content='ICE'/>
                </div>
                <div style={{flexBasis:'100%'}}></div>
                <h2 style={{lineHeight:'140px',flexBasis:'300px'}} >我们服务于:</h2>
                <div className="componentsUsers">
                    <QuadBox imgurl = "PKU.png" content='北大-华为云实验班' height='120px' layOutDirection='horizontal'/>          
                    <QuadBox imgurl = "huawei.png" content='华为云社区' height='120px' layOutDirection='horizontal'/>          
                   
                </div>
            </div>
        )
    }
}
function ComponentUser(props){
    let nameToLink ={
        'DevUI':"https://devui.design/home"
    }
    return (
        <section className="componentsUsers">
                      
        </section>
    )
}