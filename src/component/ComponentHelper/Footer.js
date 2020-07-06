import '../../asset/css/CHelper/CHelper.css'
import Myself from '../Main/Myself'
import React from 'react'
import TitleButton from '../util/TitleButton'
export function Footer(){
    return (
        <div className='footer'>
            <div className='footerLeft'>
                <h1><b>联系我们</b></h1>
                <ul>
                    
                        <li><img src = {require('../../asset/img/OtherLOGO/GitHub.svg')}/><a href="https://github.com/sspku-yqLiu/DevUIHelper-LSP">Github</a></li>
                   
                   
                        <li><img src = {require('../../asset/img/OtherLOGO/微软.svg')}/><a href="https://marketplace.visualstudio.com/items?itemName=sspkuDevUI.devuihelper">Rating us</a></li>
                    
                        <li><img src = {require('../../asset/img/OtherLOGO/邮箱2.svg')}/><a>Mail</a></li>
                 
                </ul>
            </div>
            <div className='footerRight'>
                
            </div>

        </div>
    )
}