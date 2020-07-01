import React, { Component } from 'react'
import '../../asset/css/util.css'
export default class QuadBox extends Component {
    constructor(props) {
        super(props)   
        this.state = {
            style : {width:this.props.width?this.props.width:'240px',
            height:this.props.height?this.props.height:'240px'},
            content : this.props.content?this.props.content:'',
            imgurl:this.props.imgurl?this.props.imgurl:''
        }
    }
    
    
    render() {
        console.log(this.state.imgurl)
        return (
            <div className = 'QuadBox' style={this.state.style} >
                <img src = {require('../../asset/img/devui.svg') }/>
                {this.content}
            </div>
        )
    }
}
