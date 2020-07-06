import React, { Component } from 'react'
import '../../asset/css/util.css'
export default class WhiteCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="cardContent">
                <div className='img'>
                    <img src = {require(`../../asset/img/CH/MaterialCenter/Demo/${this.props.imgFileName}`)}></img>  
                </div>
                <p><b>{this.props.content}</b></p>
            </div>
        )
    }
}
