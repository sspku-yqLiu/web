import React, { Component } from 'react'
import '../../asset/css/util.css'

export default class QuadBox extends Component {
    constructor(props) {
        super(props)   
        this.state = {
            style : {width:this.props.width?this.props.width:'240px',
            height:this.props.height?this.props.height:'240px'},
            content : this.props.content?this.props.content:'',
            imgurl:this.props.imgurl?this.props.imgurl:'',
            layOutDirection:this.props.layOutDirection?this.props.layOutDirection:'vertical'
        }
    }
    
    
    render() {
        console.log(this.state.imgurl);
        // const reqSvgs = require.context('../../asset/img',true,this.state.imgurl);
        // console.log(reqSvgs)
        if(this.state.layOutDirection == 'vertical')
        return (
            <div className = 'QuadBox' style={this.state.style} >
                <img className='vertialImg' src = {require(`../../asset/img/CH/ComponentsLOGO/${this.state.imgurl}`) }/>
                <h1>{this.state.content}</h1>
            </div>
        )
        else
            return(
                <div className = 'QuadBox' style={this.state.style} >
                    <div className = 'horizontalQuadBoxContent'>
                        <img className = 'horizontalImg' src = {require(`../../asset/img/CH/ComponentsLOGO/${this.state.imgurl}`) }/>
                        <p><b>{this.state.content}</b></p>
                    </div>
                </div>
            )
    }
}
