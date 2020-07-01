import React, { Component } from 'react'
import '../../asset/css/CHelper/CHelper.css'
import  ContentCarousel  from './Carousel'

export default class Feature extends Component {
    render() {
        return (
            <div className = 'feature'>
                <b>了解特性</b>
                <h1><b>在这里,获得最好的组件库使用体验！</b></h1>
                <div className="featureContent">
                    <div className = 'featureLeft'>  
                        <b>最强大的前端组件库插件</b><br/>
                        我们一直在思考,如何让一个组件库变得更易上手？<br/>
                        能否有一种工具，让我们不再频繁的查阅组件库的文档？<br/>
                        能够有一种工具，让我们能够以更优雅的形式书写组件库页面？<br/>
                        能否有一种工具，让全世界的优秀组件被所有人简单的熟知、方便的使用？<br/>
                        现在，你有了DevUIHelper,<br/>
                        尽情的享受最优秀的组件库使用体验吧！<br/>
                        <br/>
                        <b style={{paddingTop:'50px'}}>我们对用户提供的</b>
                        <div>
                            <ul>
                                <li>物料中心</li>
                                <li>@表达式</li>
                                <li>语义化提示</li>
                                <li>指令支持</li>
                            </ul>
                        </div>

                        <b style={{paddingTop:'50px'}}>我们对组件库提供的</b>
                        <div>
                            <ul>
                                <li>定制化文档npm脚本</li>
                                <li>一套完整的版本管理方案</li>
                                <li>组件库冲突管理</li>
                                <li>更多的曝光与用户</li>
                            </ul>
                        </div>

                    </div>

                    <div className = 'featureRight'>
                        <ContentCarousel/>
                    </div>
                </div>

            </div>
        )
    }
}
