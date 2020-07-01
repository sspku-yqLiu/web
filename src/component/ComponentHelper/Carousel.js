import React, { Component } from 'react'
import '../../asset/css/CHelper/CHelper.css'
import {Carousel} from 'antd';
export default class ContentCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel autoplay autoplaySpeed={5000}>
                <div>
                <img src = {require('../../asset/img/CH/demo1.png')} width='100%' height='100%' />
                </div>
                <div>
                <img src = {require('../../asset/img/CH/demo2.png')} width='100%' height='100%' />
                </div>
                <div>
                <img src = {require('../../asset/img/CH/demo3.png')} width='120%'  height='100%' />
                </div>

            </Carousel>
            </div>
        )
    }
}
